const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const dns = require("node:dns/promises");
const net = require("node:net");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const fetchTimeoutMs = readBoundedNumber("WEB_UPPER_FETCH_TIMEOUT_MS", 15000, 1000, 120000);
const renderTimeoutMs = readBoundedNumber("WEB_UPPER_RENDER_TIMEOUT_MS", 30000, 1000, 180000);
const maxHtmlBytes = readBoundedNumber("WEB_UPPER_MAX_HTML_BYTES", 5 * 1024 * 1024, 1024, 25 * 1024 * 1024);
const maxRedirects = readBoundedNumber("WEB_UPPER_MAX_REDIRECTS", 5, 0, 10);
const allowPrivateUrls = process.env.WEB_UPPER_ALLOW_PRIVATE_URLS === "1";

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
]);

class ClientError extends Error {
  constructor(status, code, message, detail = "") {
    super(message);
    this.name = "ClientError";
    this.status = status;
    this.code = code;
    this.detail = detail;
  }
}

function readBoundedNumber(name, fallback, min, max) {
  const raw = process.env[name];
  if (!raw) {
    return fallback;
  }
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.trunc(parsed)));
}

function send(response, status, body, headers = {}) {
  response.writeHead(status, headers);
  response.end(body);
}

function sendJson(response, status, payload) {
  send(response, status, JSON.stringify(payload), {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
}

function sendError(response, error, fallbackMessage, timeoutMs = fetchTimeoutMs) {
  if (error instanceof ClientError) {
    sendJson(response, error.status, {
      error: error.message,
      code: error.code,
      detail: error.detail,
    });
    return;
  }

  if (error?.name === "AbortError" || error?.name === "TimeoutError") {
    sendJson(response, 408, {
      error: "URL request timed out",
      code: "request_timeout",
      detail: `The request exceeded ${timeoutMs}ms.`,
    });
    return;
  }

  sendJson(response, 502, {
    error: fallbackMessage,
    code: "upstream_error",
    detail: error?.message || "",
  });
}

function safeStaticPath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const requested = decoded === "/" ? "/index.html" : decoded;
  const resolved = path.resolve(root, `.${requested}`);
  const relative = path.relative(root, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return "";
  }
  return resolved;
}

function ipv4ToNumber(address) {
  return address.split(".").reduce((total, part) => (total << 8) + Number(part), 0) >>> 0;
}

function inIpv4Range(address, base, prefix) {
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  return (ipv4ToNumber(address) & mask) === (ipv4ToNumber(base) & mask);
}

function isBlockedIpv4(address) {
  return [
    ["0.0.0.0", 8],
    ["10.0.0.0", 8],
    ["100.64.0.0", 10],
    ["127.0.0.0", 8],
    ["169.254.0.0", 16],
    ["172.16.0.0", 12],
    ["192.0.0.0", 24],
    ["192.0.2.0", 24],
    ["192.168.0.0", 16],
    ["198.18.0.0", 15],
    ["198.51.100.0", 24],
    ["203.0.113.0", 24],
    ["224.0.0.0", 4],
    ["240.0.0.0", 4],
  ].some(([base, prefix]) => inIpv4Range(address, base, prefix));
}

function isBlockedIpv6(address) {
  const lower = address.toLowerCase();
  const mapped = lower.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) {
    return isBlockedIpv4(mapped[1]);
  }
  if (lower === "::" || lower === "::1") {
    return true;
  }

  const first = lower.split(":").find(Boolean);
  const firstHextet = Number.parseInt(first || "0", 16);
  if (!Number.isFinite(firstHextet)) {
    return true;
  }

  return (
    (firstHextet & 0xfe00) === 0xfc00 ||
    (firstHextet & 0xffc0) === 0xfe80 ||
    (firstHextet & 0xff00) === 0xff00 ||
    lower.startsWith("2001:db8:")
  );
}

function isBlockedAddress(address) {
  const version = net.isIP(address);
  if (version === 4) {
    return isBlockedIpv4(address);
  }
  if (version === 6) {
    return isBlockedIpv6(address);
  }
  return true;
}

function cleanHostname(hostname) {
  return hostname.startsWith("[") && hostname.endsWith("]") ? hostname.slice(1, -1) : hostname;
}

async function assertAllowedUrl(target) {
  if (!["http:", "https:"].includes(target.protocol)) {
    throw new ClientError(400, "unsupported_protocol", "Only HTTP and HTTPS URLs are supported");
  }

  if (allowPrivateUrls) {
    return;
  }

  let addresses;
  const hostname = cleanHostname(target.hostname);
  if (net.isIP(hostname)) {
    addresses = [{ address: hostname }];
  } else {
    try {
      addresses = await dns.lookup(hostname, { all: true, verbatim: true });
    } catch (error) {
      throw new ClientError(400, "dns_lookup_failed", "Could not resolve the URL host", error.message);
    }
  }

  if (!addresses.length || addresses.some(({ address }) => isBlockedAddress(address))) {
    throw new ClientError(
      403,
      "private_network_blocked",
      "Private or reserved network URLs are blocked by default",
      "Set WEB_UPPER_ALLOW_PRIVATE_URLS=1 only when editing trusted local sites.",
    );
  }
}

async function serveStatic(request, response, url) {
  const filePath = safeStaticPath(url.pathname);
  if (!filePath) {
    send(response, 403, "Forbidden");
    return;
  }

  try {
    const data = await fs.readFile(filePath);
    const type = mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
    send(response, 200, data, {
      "content-type": type,
      "cache-control": "no-store",
    });
  } catch {
    send(response, 404, "Not found");
  }
}

function parseTargetUrl(url) {
  const rawUrl = url.searchParams.get("url") || "";
  try {
    return new URL(rawUrl);
  } catch {
    throw new ClientError(400, "invalid_url", "Invalid URL");
  }
}

async function readLimitedText(upstream) {
  const reader = upstream.body?.getReader();
  if (!reader) {
    const text = await upstream.text();
    if (Buffer.byteLength(text, "utf8") > maxHtmlBytes) {
      throw new ClientError(413, "response_too_large", "The imported HTML is too large");
    }
    return text;
  }

  const chunks = [];
  let total = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    total += value.byteLength;
    if (total > maxHtmlBytes) {
      await reader.cancel();
      throw new ClientError(413, "response_too_large", "The imported HTML is too large");
    }
    chunks.push(Buffer.from(value));
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function fetchWithGuards(target, redirectCount = 0) {
  await assertAllowedUrl(target);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), fetchTimeoutMs);

  try {
    const upstream = await fetch(target.href, {
      redirect: "manual",
      signal: controller.signal,
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) WebUpper/1.0",
      },
    });

    if (upstream.status >= 300 && upstream.status < 400 && upstream.headers.has("location")) {
      if (redirectCount >= maxRedirects) {
        throw new ClientError(400, "too_many_redirects", "The URL redirected too many times");
      }
      const next = new URL(upstream.headers.get("location"), target.href);
      return fetchWithGuards(next, redirectCount + 1);
    }

    const contentType = upstream.headers.get("content-type") || "";
    const html = await readLimitedText(upstream);
    return {
      status: upstream.status,
      ok: upstream.ok,
      url: target.href,
      finalUrl: upstream.url || target.href,
      contentType,
      html,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchSite(request, response, url) {
  try {
    const target = parseTargetUrl(url);
    const result = await fetchWithGuards(target);
    sendJson(response, result.ok ? 200 : result.status, {
      url: target.href,
      finalUrl: result.finalUrl,
      contentType: result.contentType,
      html: result.html,
    });
  } catch (error) {
    sendError(response, error, "Failed to fetch URL");
  }
}

async function resolvePlaywright() {
  try {
    return require("playwright");
  } catch {
    try {
      return require("playwright-core");
    } catch {
      throw new ClientError(
        501,
        "playwright_missing",
        "Playwright is not installed",
        "Install playwright to enable JavaScript-rendered site capture.",
      );
    }
  }
}

async function renderSite(request, response, url) {
  let target;
  try {
    target = parseTargetUrl(url);
    await assertAllowedUrl(target);
  } catch (error) {
    sendError(response, error, "Failed to render URL", renderTimeoutMs);
    return;
  }

  let chromium;
  try {
    ({ chromium } = await resolvePlaywright());
  } catch (error) {
    sendError(response, error, "Failed to render URL", renderTimeoutMs);
    return;
  }

  let browser;
  const checkedOrigins = new Map();
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: { width: 1280, height: 900 },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) WebUpper/1.0",
    });

    await page.route("**/*", async (route) => {
      try {
        const routeUrl = new URL(route.request().url());
        if (["http:", "https:"].includes(routeUrl.protocol)) {
          const key = routeUrl.origin;
          if (!checkedOrigins.has(key)) {
            await assertAllowedUrl(routeUrl);
            checkedOrigins.set(key, true);
          }
        }
        await route.continue();
      } catch {
        await route.abort("blockedbyclient");
      }
    });

    await page.goto(target.href, { waitUntil: "networkidle", timeout: renderTimeoutMs });
    const finalUrl = new URL(page.url());
    await assertAllowedUrl(finalUrl);
    const html = await page.content();
    if (Buffer.byteLength(html, "utf8") > maxHtmlBytes) {
      throw new ClientError(413, "response_too_large", "The imported HTML is too large");
    }

    sendJson(response, 200, {
      url: target.href,
      finalUrl: finalUrl.href,
      contentType: "text/html; rendered=playwright",
      html,
    });
  } catch (error) {
    sendError(response, error, "Failed to render URL", renderTimeoutMs);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || `localhost:${port}`}`);

  if (url.pathname === "/api/fetch") {
    fetchSite(request, response, url);
    return;
  }

  if (url.pathname === "/api/render") {
    renderSite(request, response, url);
    return;
  }

  if (url.pathname === "/health") {
    send(response, 200, "ok", {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    });
    return;
  }

  serveStatic(request, response, url);
});

server.listen(port, () => {
  console.log(`Web Upper is running at http://localhost:${port}`);
});
