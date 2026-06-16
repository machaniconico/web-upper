const { spawn } = require("node:child_process");
const http = require("node:http");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.SMOKE_PORT || 48173 + Math.floor(Math.random() * 1000));

function request(pathname) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      hostname: "127.0.0.1",
      port,
      path: pathname,
      method: "GET",
      timeout: 5000,
    };

    const req = http.request(requestOptions, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks).toString("utf8"),
        });
      });
    });

    req.on("timeout", () => {
      req.destroy(new Error(`Request timed out: ${pathname}`));
    });
    req.on("error", reject);
    req.end();
  });
}

async function waitForServer(child) {
  const startedAt = Date.now();
  let lastError = null;
  while (Date.now() - startedAt < 10000) {
    if (child.exitCode !== null) {
      throw new Error(`Server exited early with code ${child.exitCode}`);
    }

    try {
      const response = await request("/health");
      if (response.status === 200 && response.body === "ok") {
        return;
      }
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  throw lastError || new Error("Server did not become ready");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function main() {
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      WEB_UPPER_ALLOW_PRIVATE_URLS: "0",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let output = "";
  child.stdout.on("data", (chunk) => {
    output += chunk;
  });
  child.stderr.on("data", (chunk) => {
    output += chunk;
  });

  try {
    await waitForServer(child);

    const home = await request("/");
    assert(home.status === 200, `Expected home status 200, got ${home.status}`);
    assert((home.headers["content-type"] || "").includes("text/html"), "Home response is not HTML");
    assert(home.body.includes("Web Upper"), "Home page did not include app name");

    const localFetch = await request(`/api/fetch?url=${encodeURIComponent(`http://127.0.0.1:${port}/health`)}`);
    assert(localFetch.status === 403, `Expected private URL block status 403, got ${localFetch.status}`);
    const localPayload = JSON.parse(localFetch.body);
    assert(localPayload.code === "private_network_blocked", "Private URL block did not return expected code");

    const ipv6LocalFetch = await request(`/api/fetch?url=${encodeURIComponent("http://[::1]/")}`);
    assert(ipv6LocalFetch.status === 403, `Expected IPv6 private URL block status 403, got ${ipv6LocalFetch.status}`);

    console.log(`Smoke test passed on http://localhost:${port}`);
  } catch (error) {
    console.error(output.trim());
    throw error;
  } finally {
    child.kill();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
