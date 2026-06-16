# Manual Test Checklist

## Startup

- `npm start` serves `http://localhost:4173`.
- `GET /health` returns `ok`.
- `npm run check` passes.
- `npm run smoke` passes.
- `Web Upper 起動.cmd` starts the server and creates or refreshes `Web Upper 起動.lnk` with the Web Upper icon.
- `create-windows-shortcut.ps1 -Desktop` creates the same icon shortcut on the Windows desktop.

## URL Import

- Load a simple public URL.
- Before preview shows the original capture.
- After preview is selectable/editable.
- Split mode shows both previews.
- Slider mode reveals before/after with the range control.
- Importing `http://127.0.0.1:4173/health` is blocked unless `WEB_UPPER_ALLOW_PRIVATE_URLS=1` is set.
- If rendered capture is unavailable, the app falls back to fetched HTML.

## Editing

- Select text and edit copy.
- Select an image and edit `src`, `alt`, lazy loading, and compression where allowed.
- Select a link and edit `href`.
- Change color, fill, size, weight, alignment, display, width, max width, min height, margin, padding, radius, and gap.
- Toggle spacing overlay and confirm it follows selected element scroll.
- Set Style Scope to Desktop / Tablet / Phone and verify the scoped CSS applies only at that viewport.

## Design Lab

- Apply palettes.
- Change typography and rhythm.
- Adjust shape and depth.
- Run industry polish for each preset.
- Run contrast fix on low-contrast text.
- Open CSS editor and apply a small CSS change.
- Open SEO / OGP editor and confirm Audit reflects updated metadata.

## Layers

- Filter layers.
- Select via layers.
- Drag a layer above another layer and confirm the preview updates.
- Move, duplicate, and delete selected elements.

## Project State

- Autosave status updates after edits.
- Save and restore project.
- Export a project JSON file.
- Import the exported project JSON file and confirm the preview is restored.
- Create a named snapshot.
- Load a saved snapshot.
- Start a new project.
- Trigger a save or export action and confirm the toast plus notification log update.

## Export

- Open the export dialog and confirm the preflight score and top issues are shown.
- Click the export preflight refresh button after making a change.
- Export full HTML.
- Export CSS Diff.
- Export WP CSS.
- Export Shopify section.
- Copy and download export contents.

## Extension

- Load `extension/` as an unpacked Chrome extension.
- Open a page through the extension.
- Confirm Web Upper opens with `?url=` and starts loading the page.
