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
| 03 | `packing` — التعبئة والمنتجات | `sack-50kg.glb` + `jumbo-bag.glb` | the 25/50 kg water-softening sack (as photographed) beside the FIBC 1–1.5 MT, each turning a full 360° past its print, crimped seal and discharge spout |
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

## Reference cut — the published site's own architecture

`ref.html` (served at `/ref.html`, or `npm run preview:ref` on its own port) is a third
preview: the palette, section order and information architecture of the **published
SinaiCore site**, with our 3D work standing in where that site uses flat photography.

- Light surfaces + white nav + copper CTA, then the navy and copper banded headings,
  exactly where the reference puts them: hero → three pillars → product band + grade
  cards → quality band + QA tiles + standards + Intertek cards → packaging band +
  logistics → global reach → how it works → quote → footer.
- The reference's hero logo plate is replaced by the **export container** turning in place;
  the quality section's flat photo by the **halite cluster**; the packaging section by the
  **printed 50 kg tablets sack**; the global-reach map by the **3D globe**; and the quote
  block by the **lab sample jar**.
- Copy, grades, ports, Incoterms, standards, offices and contact details are the published
  SinaiCore content, in Arabic; the section kickers stay Latin like the original.
- Photography for the grade and logistics cards lives in `public/img/ref/` (downscaled
  copies of the reference's own product shots).
- Between the hero and the pillars sits a **pinned aerial act**: a 3D pass over the North
  Sinai salt pans, in four beats tied to scroll — `01 AERIAL` the camera descends out of a
  sunlit sky onto the shimmering brine, `02 CRUST` a chiselled block of crystallised salt is
  carved out of the crust, `03 WASH · GRADE` the block dissolves into a veil of wash water
  and its grains sort into coarse / medium / fine layers in mid-air, `04 PACK` those grains
  stream down and fill the printed 50 kg export sack. Copy beats, the side rail and the
  specimen data (`NaCl ≥ 99.5 %`, `1–3 / 0.5–1 / < 0.5 mm`, `25·50 kg`, `FIBC 1–1.5 MT`,
  `FOB Arish · Suez`) sit on a right-hand scrim so the scene stays clear. The act is a
  separate lazy-loaded canvas that unmounts when it leaves the viewport, has a portrait
  camera rig for phones, and holds a still frame for `prefers-reduced-motion`.

## Alternate cut — the container

`alt.html` (built alongside `index.html`, served at `/alt.html`) is a **separate**
preview of a second design direction. The five-station experience above is untouched;
this page shares only the brand, the type and the palette.

The hero is a 20/40 ft box that carries the SinaiCore print. One pinned act, four beats:

| Beats | What happens |
|-------|--------------|
| 01 `open` | the container sits open and centred, doors folded back against its sides |
| 02 `load` | eight 1.5 MT FIBC bags slide in through the doors in a 4 × 2 grid, then ten 50 kg sacks top up the void above them |
| 03 `seal` | the doors swing shut, the bars latch and a copper bolt seal drops onto the seam |
| 04 `sail` | the box shrinks and is hoisted aboard a container ship that sails the 3D globe from El Arish / Port Said toward the export lanes |

A live HUD reports fill %, door state, seal and voyage, and the copy panel steps through the
four beats. Below the act sits a plain table of the two load ports and four sailing lanes.
Assets: `container.glb` (frame, corrugated sheet, floor, one hinged leaf, print plate) and
`cargo-ship.glb` (lofted hull, bridge, deck stacks).

## Assets

The models are authored procedurally in `scripts/build-assets.mjs`:

- halite: irregular faceted cubes (chamfered + position-driven noise), flat-shaded
- tablets: indexed lathe profile with a bevelled rim and a recessed face groove
- FIBC: superellipse body with bulge, pleats and a gathered top; webbing, hems,
  spouts, and a brand panel raycast onto the fabric surface
- tablets sack: a pillow-profile PP sack (soft rounds, crimped accordion head seal,
  stitched collar) modelled on the 25/50 kg bags in the product photography, with the
  `WATER SOFTENING SALT TABLETS` print projected onto its face
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
