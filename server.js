const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

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

async function fetchSite(request, response, url) {
  const rawUrl = url.searchParams.get("url") || "";
  let target;

  try {
    target = new URL(rawUrl);
  } catch {
    sendJson(response, 400, { error: "Invalid URL" });
    return;
  }

  if (!["http:", "https:"].includes(target.protocol)) {
    sendJson(response, 400, { error: "Only HTTP and HTTPS URLs are supported" });
    return;
  }

  try {
    const upstream = await fetch(target, {
      redirect: "follow",
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) WebUpper/1.0",
      },
    });

    const contentType = upstream.headers.get("content-type") || "";
    const html = await upstream.text();
    sendJson(response, upstream.ok ? 200 : upstream.status, {
      url: target.href,
      finalUrl: upstream.url || target.href,
      contentType,
      html,
    });
  } catch (error) {
    sendJson(response, 502, {
      error: "Failed to fetch URL",
      detail: error.message,
    });
  }
}

async function renderSite(request, response, url) {
  const rawUrl = url.searchParams.get("url") || "";
  let target;

  try {
    target = new URL(rawUrl);
  } catch {
    sendJson(response, 400, { error: "Invalid URL" });
    return;
  }

  if (!["http:", "https:"].includes(target.protocol)) {
    sendJson(response, 400, { error: "Only HTTP and HTTPS URLs are supported" });
    return;
  }

  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch {
    try {
      ({ chromium } = require("playwright-core"));
    } catch {
      sendJson(response, 501, {
        error: "Playwright is not installed",
        detail: "Install playwright to enable JavaScript-rendered site capture.",
      });
      return;
    }
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: { width: 1280, height: 900 },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) WebUpper/1.0",
    });
    await page.goto(target.href, { waitUntil: "networkidle", timeout: 30000 });
    const html = await page.content();
    sendJson(response, 200, {
      url: target.href,
      finalUrl: page.url(),
      contentType: "text/html; rendered=playwright",
      html,
    });
  } catch (error) {
    sendJson(response, 502, {
      error: "Failed to render URL",
      detail: error.message,
    });
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

  serveStatic(request, response, url);
});

server.listen(port, () => {
  console.log(`Web Upper is running at http://localhost:${port}`);
});
