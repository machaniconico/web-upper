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

To create or recreate the icon shortcut:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\create-windows-shortcut.ps1
```

The checked-in launcher files are:

- `Web Upper 起動.cmd`
- `launch-web-upper.ps1`
- `create-windows-shortcut.ps1`
- `assets/web-upper-icon.svg`

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
