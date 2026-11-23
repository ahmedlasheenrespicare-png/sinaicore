# SinaiCore — ملح سيناء · 3D Scroll Experience

An immersive, right-to-left scroll experience for a North Sinai salt producer:
raw halite crystal → water-softening tablets → 1 MT jumbo bag → export routes.

Built with React 19 + three.js (react-three-fiber) and a real-time Draco-compressed
GLB pipeline that runs entirely in this repo — no external model downloads.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production bundle into dist/
npm run preview    # serve the production build
node scripts/build-assets.mjs   # regenerate the 3D assets + preview renders
```

## The four stations

| # | Chapter | Model | Interaction |
|---|---------|-------|-------------|
| 01 | `crystal` — البلورة الخام | `crystal.glb` (halite cluster on host rock) | rotates with scroll + pointer; custom refraction/dispersion shader |
| 02 | `purity` — النقاء والمعالجة | `tablets.glb` (3 softening tablets) | grain field morph, hotspots for NaCl 99.5% and quality specs |
| 03 | `packing` — التعبئة | `jumbo-bag.glb` (FIBC 1 MT) | one slow revolution to reveal print, seams and lift loops |
| 04 | `export` — خطوط التصدير | `globe.glb` (ocean + land ribbons) | animated export arcs from El Arish / Suez to 10 markets |

Everything lives in one pinned viewport (`.journey`, ~4.6 viewports of scroll) with a
sticky WebGL canvas behind it. The copy panels swap as the shared progress value
crosses each chapter threshold.

## Architecture

```
src/
  App.tsx                 boots the journal, curtain, stage, and sections
  lib/journal.ts          rAF scroll observer → CSS custom properties (--w, --vel…)
  three/
    state.ts              tiny shared mutable state (read in useFrame, never re-renders React)
    Stage.tsx             canvas, studio env, 4 chapter models, camera rig, export arcs
    materials/HaliteMaterial.ts   refracting / dispersing crystal shader
  components/             Hero, Journey (pinned chapters), Sections, Chrome, Curtain
  data/content.ts         every figure and line of copy (Arabic + Latin)
  styles/                 base tokens + layout
scripts/build-assets.mjs  parametric geometry → Draco GLB + software-rasterised previews
public/models/*.glb       the four assets (5–160 KB each)
public/draco/             three.js Draco decoder (self-hosted, no CDN)
```

**Scroll performance.** Progress is read from `getBoundingClientRect()` on a single
element per frame and written into CSS custom properties, so typography animates on the
compositor and the 3D layer reads the same number from plain JS state — no React
re-render per frame. The canvas switches to `frameloop="never"` when the pinned act
scrolls off screen, DPR is capped (and lowered automatically by `PerformanceMonitor`),
and `prefers-reduced-motion` disables idle drift, marquees and reveal transitions.

## Assets

The models are authored procedurally in `scripts/build-assets.mjs`:

- halite: irregular faceted cubes (chamfered + position-driven noise), flat-shaded
- tablets: indexed lathe profile with a bevelled rim and a recessed face groove
- FIBC: superellipse body with bulge, pleats and a gathered top; webbing, hems,
  spouts, and a brand panel raycast onto the fabric surface
- globe: icosphere + Natural Earth 110m coastline ribbons baked to
  `src/data/worldOutline.json` (antimeridian-safe, outward-wound)

Each model is compressed to GLB with `KHR_draco_mesh_compression` via
`@gltf-transform` + `draco3d`, and the script also writes software-rendered PNGs to
`.preview/` so the models can be art-directed without a browser.

## Quality & accessibility

- Semantic landmarks, a skip link, focus-visible rings, `aria-label`s on icon-only links.
- Contrast tuned for the dark palette; AA-sized body copy.
- Reduced-motion and small-screen variants for every animated element.
- No third-party requests at runtime: fonts and the Draco decoder are bundled/self-hosted.
