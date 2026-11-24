# SinaiCore —interactive 3D product story

A scroll-driven WebGL story for **SinaiCore for Salts & Minerals**: eight chapters
from the brine ponds of the Sinai to the 50 kg sack and the certificate of analysis,
told on a fixed canvas with a scrollable document on top.

## Stack

| Layer | Choice |
| --- | --- |
| Renderer | three.js 0.187 (WebGL2) |
| Scroll | GSAP ScrollTrigger (camera keyframes) + Lenis (smooth scroll) |
| Models | GLB compressed with **Draco** |
| Textures | **KTX2 / Basis Universal** (UASTC + mipmaps) via `KTX2Loader` |
| Build | Vite 7 |

## Run

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # serve dist/ (port 4173)
```

## The three interaction layers

1. **Scroll scrubbing** — `src/data/keyframes.js` holds ten camera stops
   (hero → water → pan → harvest → wash → refine → grade → pack → lab → end).
   ScrollTrigger scrubs them in both directions; the specimen for each chapter is
   swapped by `src/core/app.js`.
2. **Parallax & drag** — the mouse tilts the composition (`stage.js`), and the object
   can be grabbed and orbited inside tight limits (`src/three/drag.js`):
   yaw ±0.95 rad, pitch ±0.38 rad, a light fling, and a spring back to the composed
   orientation. A raycast decides whether a press actually landed on the object, so
   copy, links and buttons keep behaving normally.
3. **3D hotspots** — `src/data/hotspots.js` pins six points to named nodes of the
   lattice / sack / jar. `src/three/hotspots.js` projects them every frame into DOM
   markers that only appear in their own chapter, and opens a spec card
   (purity, moisture, packaging layers…) next to the marker.

## Scene & materials

- One `rig` group holds the crystal lattice and every specimen, so drag rotates them
  together.
- Lighting: PMREM of a procedural `RoomEnvironment` (no HDRI download) + three
  directional lights + a blue bounce light.
- The salt crystals use `MeshPhysicalMaterial` with **`transmission`** (0.94) and
  `attenuationColor`; the transmission buffer is rendered at
  `transmissionResolutionScale = 0.4` to keep the cost close to a single pass.
  Transmission is **desktop-only** and falls back to clearcoat.
- Salt grains in the air are a single `InstancedMesh` (220 instances on phones,
  900 on desktop) with per-instance colour.
- `public/textures/woven-normal.ktx2` is a compressed normal map on the FIBC body.

## Asset pipeline

- `scripts/build-lattice.mjs` generates the hero lattice (76 nodes, 64 cells) and
  compresses it with the `meshopt`/Draco encoder.
- To rebuild the KTX2 normal map: `npx ktx2-encoder` (or `ktx2-encoder`'s Node API,
  `encodeToKTX2`), UASTC + mipmaps, 256×256.
- `public/ktx2/basis_transcoder.{js,wasm}` ships with three.js and must be served
  next to the page (`setTranscoderPath('/ktx2/')`).

## Responsive fallback

| | Desktop (≥ 861px) | Phone (≤ 860px) |
| --- | --- | --- |
| Transmission | on (0.4× buffer) | off — clearcoat only |
| Grains | 900 | 220 |
| Pixel ratio | ≤ 1.75 | ≤ 1.5 |
| Hotspots | markers + spec cards | off — the specs stay in the chapter copy |
| Drag / hover | raycast orbit | off |

On phones the copy is laid over the whole canvas, so a marker could only ever land
on text; the scene there is decorative (scroll scrubbing still runs) and the page
keeps its full content.

## Tests

```bash
npm test            # DOM smoke + lattice geometry (jsdom)
npm run test:browser  # real headless Chromium: boot, 8 chapters, menu, hotspots, drag
```

`scripts/test-browser.mjs` unpacks the bundled Chromium's shared libraries once into
`/tmp/sinaicore-chromium-libs`. `window.__stage` exposes the stage for that test.

## Structure

```
src/core/      boot, scroll, timeline, preloader, nav, reveal, cursor, render
src/data/      chapters, site copy, camera keyframes, hotspots
src/three/     stage, lattice, specimens, particles, drag, hotspots
src/styles/    tokens, base, preloader, chrome, story, responsive
scripts/       build-lattice, test-dom, test-lattice, test-browser
public/        models (Draco GLB), draco/, ktx2/, textures/, brand/, img/, media/
```
