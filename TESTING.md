# Manual Test Checklist

## Startup

- `npm start` serves `http://localhost:4173`.
- `GET /health` returns `ok`.
- `npm run check` passes.

## URL Import

- Load a simple public URL.
- Before preview shows the original capture.
- After preview is selectable/editable.
- Split mode shows both previews.
- Slider mode reveals before/after with the range control.
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
- Create a named snapshot.
- Load a saved snapshot.
- Start a new project.

## Export

- Export full HTML.
- Export CSS Diff.
- Export WP CSS.
- Export Shopify section.
- Copy and download export contents.

## Extension

- Load `extension/` as an unpacked Chrome extension.
- Open a page through the extension.
- Confirm Web Upper opens with `?url=` and starts loading the page.
