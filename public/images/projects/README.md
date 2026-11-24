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
5. Optional Supabase: put `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`, run `pnpm media:upload`, then set `NEXT_PUBLIC_MEDIA_SOURCE=supabase`.

## Current local sets

- `girl-night-out/` — from `_inbox/girl_night_out` (10 frames)
- `cosplay-day/` — from `render_mia_happy_potter` (cover LOC02893 + 9 frames)
- `ao-dai/` — from `raw_ao_dai_Ha/render` (cover LOC07860 / 17.jpg + 17 frames)
- `fumirai-anniversary/` — from camera JPG
- `high-light-dj/` — DJ highlight set by booth (`dj-amor`, `dj-cece`, `dj-cine`, `dj-dark`, `dj-kazho`, `dj-mia`, `dj-rhyn`; cover from `dj-amor/LOC05303.jpg`)
- `food-fnb/` — F&B stills (`1.jpg`–`8.jpg`; cover from `1.jpg`)
- `visual-side-effect/` — cover from `side_effec_visual_di_amor.mp4` (full `/videos/visual-side-effect.mp4`, intro `/videos/visual-side-effect-intro.mp4`)
- `recap-hlw-2/` — cover from `Recap_HLW_2.mp4` (full `/videos/recap-hlw-2.mp4`, intro `/videos/recap-hlw-2-intro.mp4`)
- `cau-long-fien/` — cover from `Cầu lông Fien.mp4` (full `/videos/cau-long-fien.mp4`, intro `/videos/cau-long-fien-intro.mp4`)
- `east-west-recap/` — cover from `east west recap(2).mp4` (full `/videos/east-west-recap.mp4`, intro `/videos/east-west-recap-intro.mp4`)
- `fumirai-sn/` — cover from `fumirai sn(6) (1).mp4` (intro `/videos/fumirai-sn-intro.mp4`; full on Drive)
- Video showcase (`VideoEmbed`) order: YouTube → Visual Side Effect → HLW → Fien → East West → Fumirai Birthday 1st year (15s intros in git; meta-only cards under players)
- Detail `videoUrl` = Google Drive `/preview` embeds (folder: `video_project_final`)
- Full masters are gitignored; only `public/videos/*-intro.mp4` is committed (~18MB total)
- Video `cover.jpg` frames are taken from `*-intro.mp4` at t≈1s

Drop new sets into `_inbox/<set-name>/`, then ask to map them.
