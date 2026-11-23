# SinaiCore — ملح سيناء · 3D Scroll Experience

An immersive, right-to-left scroll experience for **SinaiCore for Salts & Minerals**:
marine halite sourcing → purity & water-softening tablets → FIBC jumbo bags → FOB export routes.

All copy, figures, product grades, packaging formats, Incoterms, offices and contact
details come from the official SinaiCore site. The brand lockup and photography are the
supplied assets (`public/brand`, `public/img`).

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
| 01 | `crystal` — المصدر البحري | `crystal.glb` (halite cluster on host rock) | rotates with scroll + pointer; custom refraction/dispersion shader |
| 02 | `purity` — النقاء والمعالجة | `tablets.glb` (3 softening tablets) | grain field morph, hotspots for NaCl ≥99.5% and batch control |
| 03 | `packing` — التعبئة | `jumbo-bag.glb` (FIBC 1–1.5 MT) | one slow revolution; the face carries the printed SinaiCore lockup |
| 04 | `export` — خطوط التصدير | `globe.glb` (ocean + land ribbons) | animated FOB arcs from El Arish / Suez to six continents |

Below the act: the five published product grades with their real NaCl/moisture specs,
the three trust pillars, the technical sheet, the six-step inquiry-to-delivery line,
and both offices (El Arish & New Cairo) with live contact details.

## Brand

- Palette taken from the logo and the published site: navy `#0E1A2B`, primary blue
  `#1A6B9C`, copper accent `#C2712F`, product white `#F4F3ED`.
- `public/brand/logo-header.png` — supplied header lockup (header + footer)
- `public/brand/logo-mark.png` — extracted mark, used in 3D prints, spec panel and favicon
- `public/img/*` — supplied product/facility photography for the portfolio cards,
  the mobile hero and the refined-grade plate

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
