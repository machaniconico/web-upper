# Web Upper

Web Upper is a local website UI editing tool. Paste a URL, preview the original page, edit an imported copy, compare before/after, and export HTML or CSS overrides.

## Run

```bash
npm start
```

Open:

```text
http://localhost:4173
```

Node 18 or newer is required.

## Windows Launcher

On Windows, double-click:

```text
Web Upper 起動.cmd
```

This starts the local server if needed and opens `http://localhost:4173`.
It also creates or refreshes an icon shortcut named `Web Upper 起動.lnk` in the project folder.

To create or recreate the icon shortcut:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\create-windows-shortcut.ps1
```

To create the same shortcut on your desktop:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\create-windows-shortcut.ps1 -Desktop
```

The checked-in launcher files are:

- `Web Upper 起動.cmd`
- `launch-web-upper.ps1`
- `create-windows-shortcut.ps1`
- `assets/web-upper-icon.svg`
- `assets/web-upper-icon.ico`

## Features

- URL loading through the local Node proxy
- Optional JavaScript-rendered capture through Playwright
- Before / After / Split / Slider preview modes
- Click-to-select iframe editing
- Text, image, link, layout, color, spacing, radius, and gap controls
- Desktop / Tablet / Phone scoped style overrides
- Margin and padding overlay
- Design Lab with palette, typography, rhythm, depth, industry polish, and contrast tools
- SEO / OGP editor with preview
- Page audit for design, SEO, OGP, accessibility, performance, and maintainability
- Autosave, manual save, restore, and named snapshots
- Toast notifications and a notification log for important actions and failures
- Project JSON export/import for moving work between environments
- Export preflight check with score and top issues before downloading deliverables
- Layer search and drag reorder
- HTML editor, CSS editor, CSS diff export, WordPress CSS export, and Shopify section export
- Chrome extension launcher scaffold in `extension/`

## Optional Playwright Capture

The default URL loader fetches HTML. For sites rendered by JavaScript, install Playwright:

```bash
npm run playwright:install
```

Then restart the server:

```bash
npm start
```

When Playwright is installed, Web Upper first tries `/api/render` and falls back to `/api/fetch` if rendering is unavailable.

## Server Safety

Web Upper blocks private and reserved network URLs by default when importing through `/api/fetch` or `/api/render`.
This helps avoid server-side requests to localhost, router/admin pages, and internal services when the app is shared or deployed.

Copy `.env.example` if you need to tune server limits:

```bash
cp .env.example .env
```

Available settings:

- `WEB_UPPER_FETCH_TIMEOUT_MS` controls plain HTML fetch timeout.
- `WEB_UPPER_RENDER_TIMEOUT_MS` controls Playwright render timeout.
- `WEB_UPPER_MAX_HTML_BYTES` limits imported HTML size.
- `WEB_UPPER_MAX_REDIRECTS` limits followed redirects.
- `WEB_UPPER_ALLOW_PRIVATE_URLS=1` allows trusted local/private URLs for local-only editing.

## Chrome Extension Launcher

1. Open Chrome extensions.
2. Enable developer mode.
3. Load unpacked extension from `extension/`.
4. Open a page, click the Web Upper extension, and send the current tab URL to `http://localhost:4173`.

## Deployment

This app needs the Node server for URL import and proxying. Deploy it to a Node-capable host with:

```bash
npm start
```

The server listens on `process.env.PORT` or `4173`.

## Manual QA

See [TESTING.md](./TESTING.md).

For a quick server check:

```bash
npm run smoke
```
