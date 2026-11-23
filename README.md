# SinaiCore — ملح سيناء · 3D Scroll Experience

An immersive, right-to-left scroll experience for **SinaiCore for Salts & Minerals**:
marine halite sourcing → purity & water-softening tablets → 50 kg sacks and FIBC jumbo bags →
FOB export routes from El Arish and Suez → a lab sample parked beside the quote form.

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

## The five stations

| # | Station | Model | Interaction |
|---|---------|-------|-------------|
| 01 | `crystal` — بلورة الهاليت | `crystal.glb` (macro halite cluster on host rock) | slow centre-screen turn; on scroll the camera dollies *into* the crystal surface |
| 02 | `purity` — النقاء والمعالجة | `tablets.glb` (3 softening tablets) | shards scatter into a grain field, then settle to the tablets; hotspots for NaCl ≥99.5%, moisture, granulometry and independent COA |
| 03 | `packing` — التعبئة والمنتجات | `sack-50kg.glb` + `jumbo-bag.glb` | the 50 kg export sack and the FIBC 1–1.5 MT side by side, each turning a full 360° past its print, seams and discharge spout |
| 04 | `export` — الموانئ واللوجستيات | `globe.glb` (ocean + land ribbons) | FOB arcs from El Arish and Suez / Port Said East to every destination, growing as the station settles |
| 05 | `quote` — طلب عرض سعر | `sample-jar.glb` (lab jar, copper seal, printed label) | not in the pinned act: it parks at a fixed three-quarter angle beside the quote form and only mounts when the section approaches |

Below the act: the five published product grades with their real NaCl/moisture specs,
the three trust pillars, the technical sheet, the six-step inquiry-to-delivery line,
and both offices (El Arish & New Cairo) with live contact details.

## Brand

- Typeface: **Inter**, the family the live site sets its Latin copy in (variable, self-hosted);
  Cairo carries the Arabic.
- Palette taken from the logo and the published site: navy `#0E1A2B`, primary blue
  `#1A6B9C`, copper accent `#C2712F`, product white `#F4F3ED`.
- `public/brand/logo-header.png` — the supplied header lockup, exactly as the site ships it
- `public/brand/logo-header-reverse.png` — same lockup, wordmark and tagline lifted to a
  light steel so it holds on the ink header/footer (no white plate behind it)
- `public/brand/logo-full.png` — supplied stacked lockup (mark + wordmark + tagline)
- `public/brand/logo-mark.png` — extracted mark, used in 3D prints, spec panel and favicon
- `public/img/*` — supplied product/facility photography for the portfolio cards,
  the mobile hero and the refined-grade plate
- The FIBC/sack print in 3D reproduces the supplied bag artwork: emblem, `SinaiCore`
  wordmark, `INDUSTRIAL SEA SALT / JUMBO BULK BAG`, the three selling points,
  `1000 kg (1 Ton)` and `PRODUCT OF EGYPT`

Stations 01–04 live in one pinned viewport (`.journey`, ~4.6 viewports of scroll) with a
sticky WebGL canvas behind it. The copy panels swap as the shared progress value
crosses each station threshold.

## Architecture

```
src/
  App.tsx                 boots the journal, curtain, stage, and sections
  lib/journal.ts          rAF scroll observer → CSS custom properties (--w, --vel…)
  three/
    state.ts              tiny shared mutable state (read in useFrame, never re-renders React)
    Stage.tsx             canvas, studio env, 4 in-act stations, camera rig, export arcs
    SampleJar.tsx         station 05's own small canvas (glass, salt, cap, label)
    materials/HaliteMaterial.ts   refracting / dispersing crystal shader
  components/             Hero, Journey (pinned stations 01–04), Sections (05), Chrome, Curtain
  data/content.ts         every figure and line of copy (Arabic + Latin)
  styles/                 base tokens + layout
scripts/build-assets.mjs  parametric geometry → Draco GLB + software-rasterised previews
public/models/*.glb       the six assets (5–160 KB each, all Draco)
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
- 50 kg sack: the same superellipse skin in flat, straight-gusseted mode with a
  pillowed fill, a sealed stitched mouth (rim cap + dashes), side creases and the
  same printed panel
- sample jar: glass lathe with a shoulder, salt fill, ribbed screw cap, copper seal
  band and a 1:1 label wrap
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
