# Project images

Drop Locikee / Instagram exports here. Do not hotlink Instagram CDN URLs.

## Folder layout

```
public/images/projects/<slug>/
  cover.jpg   # required — card + hero cover
  01.jpg      # optional gallery frames
  02.jpg
```

## Steps

1. Export originals from Instagram / camera (not screenshots of the IG UI).
2. Create a folder named after the project `slug` in `src/data/projects.ts`.
3. Resize long edge ~1600–2000px before commit when possible.
4. Point `cover.src` / `gallery[].src` to `/images/projects/<slug>/...`.

## Current local sets

- `girl-night-out/` — from `_inbox/girl_night_out` (10 frames)
- `cosplay-day/` — from `render_mia_happy_potter` (cover LOC02893 + 9 frames)
- `ao-dai/` — from `raw_ao_dai_Ha/render` (cover LOC07860 / 17.jpg + 17 frames)
- `fumirai-anniversary/` — from camera JPG

Drop new sets into `_inbox/<set-name>/`, then ask to map them.
