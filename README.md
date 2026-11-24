# SinaiCore — Premium Industrial Salt from Egypt

English-only static marketing / export website for **SinaiCore for Salts & Minerals**, an Egyptian
salt exporter coordinating qualified sourcing, quality verification, packaging,
documentation, and logistics for global markets.

Rebuilt as a clean, dependency-free static site from the original saved
`sinaicore.com/en/` page (Next.js snapshot). All content, product specifications,
packaging/logistics terms, offices, and contact details are preserved; all
images from the original site are included under `assets/img/`.

## Structure

```
index.html                  Home — hero, pillars, products, quality, logistics, global reach, how it works
experience.html               NEW 3D Experience (v3, inspired by 84-24.org scrollytelling) — fixed 3D bag background model, editorial chapters, exploded view, packaging slider, before/after comparison, fullscreen, portrait warning (desktop-first, SinaiCore colours/data)
products/
  refined-salt.html                 Premium Refined Salt Solutions (NaCl ≥ 99.5%)
  washed-salt.html                  Industrial Washed Salt Solutions (NaCl ≥ 98.5%)
  road-salt.html                    Winter Maintenance Solutions (NaCl ≥ 98.0%)
  water-softening-salt-tablets.html Water Treatment Solutions (NaCl ≥ 99.5%)
  raw-multi-purpose-salt.html       Marine Salt Solutions (NaCl ≥ 97.0%)
company-profile.html        Company profile & offices
contact.html                Contact details + message form
quote.html                  Request-a-quote form (product, quantity, packaging, port)
assets/
  css/style.css             All styles (responsive, no framework)
  css/experience.css        3D Experience page styles (editorial + 3D scene)
  js/main.js                Mobile menu, scroll effects, product filter, lab-report modal, forms
  js/experience.js          3D scroll animation, drag-to-rotate, chapter rail, slider, before/after, fullscreen
  img/                      Product, packaging, hero, logo & world-map images
favicon.png
```

## Run locally

No build step or dependencies required — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- **Forms are static-site friendly:** the quote/contact forms validate in the browser
  and open WhatsApp (`+20 110 753 9914`) / email (`info@sinaicore.com`) with the
  enquiry pre-filled. To use a real backend, point the forms to your endpoint.
- **Shipping terms:** FOB Arish Port (bulk/charter) · FOB Suez Port or Port Said
  East Al-Tafreaa (containerized 20ft/40ft), Incoterms per latest ICC rules.
- **Offices:** El Arish (North Sinai) & Cairo (New Cairo), Egypt.
- **Language:** English only (`lang="en"` on all pages, EN badge in the header).
- Deploy anywhere static: GitHub Pages, Netlify, Vercel, or any web server.


## 3D Experience — architecture (v21)

The `experience.html` page borrows the *architecture and motion logic* of the 84-24.org reference, not its content:

1. **Fixed 3D layer + scrollable DOM** — `.stage-fixed` is `position:fixed; inset:0` with a full-viewport WebGL canvas (`pointer-events:none`); the text column (`main`) scrolls above it on the right 50% and the model is art-directed into the left half by offsetting the camera.
2. **ScrollTrigger keyframes** — one `ScrollTrigger` per chapter writes camera position/target (`window.__cam`) and the particle morph state (`window.__morph`) only while it is active. Chapters 02, 03 and 06 perform the crystal → granules/tablets → jumbo bag → globe morphs; the bag layers also scrub between assembled and exploded.
3. **Chapter navigation 01–08** — the fixed rail (`.side-rail`) and header nav highlight automatically from the active chapter and jump smoothly through Lenis.
4. **Performance** — a preloader gates the scene until the vendored libs are ready; particle budget adapts (8,000 desktop / 4,200 small screens), device pixel ratio is capped, rendering pauses on hidden tabs, and all libraries are vendored + minified (no CDN).

**On Draco / GLB:** this build ships no 3D model files at all — every scene (crystal, granules, tablets, bag, globe, export arcs) is generated procedurally in Three.js, so the 3D payload is 0 KB. If real GLB assets are supplied later, a `DRACOLoader` can be added without changing the scroll architecture.


## Story model (v23, borrowed from Field to Still × Brocksbushes)

The scroll choreography now works like the reference's `sceneAt()`:

- **Story position in screens** — `position = scrollTop / viewportHeight`; each chapter is a *beat* measured from the DOM (`offsetTop`), with a monotonic guard so the beats always increase.
- **Subject weights** — instead of a from/to morph, the four 3D subjects (crystal, granules/tablets, jumbo bag, globe) carry a weight each: `smoothstep` bands around the beats of chapters 02, 03 and 06, normalised and damped twice. The particle system blends only the shapes with a non-zero weight, so transitions stay smooth and cheap.
- **Camera keyframes** — a fractional chapter index is interpolated between per-chapter camera keyframes (position + look-at target), then damped; fast scrolling adds a small "surge" push, exactly like the reference's velocity offset.
- **Typography** — chapter headings split into letters and rise with `back.out(2)` / `stagger 0.028`; figures, stat rows, tables and quote blocks use `power3.out` reveals.
- **Micro-interaction** — a soft brand-coloured cursor halo (dot + ring, ring expands on interactive elements), disabled for coarse pointers and reduced motion.
- **Performance** — the whole scene is still procedural (0 KB of model data), with an adaptive particle budget and a preloader gate.


## Product-hero layer (v28, from brocksbushes.moonshiners.co.uk)

- **The bag is the protagonist.** The detailed 50 kg / FIBC model is on screen from the first chapter (it only steps aside for the globe in chapter 06), shown with studio lighting: ACES tone mapping, a 2048px soft-shadow key light with `radius`, blue rim light and a hemisphere fill.
- **Floating elements.** 67 instanced salt bits — 34 small crystals, 20 granules, 8 medium shards and 5 large glassy crystals — orbit the bag at different radii, bob, spin and pulse; scroll velocity adds energy, and they hide when the globe takes the frame.
- **Label & texture.** The front/back artwork is drawn at 1536 × 1920 with 16× anisotropy, and the PP weave doubles as a bump map so the fabric and the blue print read at close range (chapter 02 pushes the camera in).
- **Typography & loader.** Wide-tracked display headings and a minimal loader that shows one big percentage over the brand mark.


## Product family & content rules (v30)

Following the brocksbushes.moonshiners.co.uk breakdown:

- **Three products, not one.** The 50 kg bag is the hero; a jumbo FIBC (cloned model, re-skinned with its own “1,000 kg” print) joins it in chapter 05 and stays for the closing lineup; a stack of softener tablets appears from chapter 02. The camera widens in 05 and again in 08 so the family can stand together.
- **Floating elements match the copy.** The bullet lists carry the element glyphs that float in the scene (◆ crystals, ● granules, ▲ chunks, ▬ tablets), so the list and the 3D agree.
- **Micro-specs** sit directly under every product name (`NaCl ≥ 99.5% · moisture ≤ 0.2%`), the way the reference prints `40% vol · 50cl`.
- **CTA repeated** at the top (header pill “Get a quote →”) and at the bottom (finale buttons).
- **Asset strategy:** no third-party 3D models at all — every mesh is generated in Three.js and every pack shot is SinaiCore's own photography, so there is nothing to licence.


## Scene spec implementation (v31)

| Requirement | Status |
|---|---|
| Three.js + GSAP ScrollTrigger + Lenis | Vendored locally in `assets/js/vendor/`, all `defer`, scene driven by the story clock |
| Scroll scrubbing across 8 chapters | `experience.js` story model → camera keyframes + subject weights |
| Mouse parallax + drag | `window.__mouse` parallax on the camera; drag surface (`#stage-drag`) over the 3D half rotates the model (`dragRy/dragRx`, double-click resets) |
| 3D hotspots with spec cards | `HOTSPOTS` in `experience-3d.js` are anchored in the bag's local space, projected to screen every frame, and open a card (purity, moisture, layers, net weight) |
| Instanced salt particles | `InstancedMesh` per float type (crystal / granule / tablet / large) — one draw call each, matrices updated per frame |
| HDRI + PBR + transmission | A procedural equirectangular studio dome is run through `PMREMGenerator` into `scene.environment`; crystals and large shards use `MeshPhysicalMaterial` with `transmission` (high tier only) |
| Performance | Quality tier (`data-quality`) from screen size, cores and device memory; lower instance counts, no transmission and DPR 1.5 on the low tier; rendering pauses on hidden tabs |
| Mobile / no-WebGL fallback | `body.no-webgl` keeps the pure-CSS bag; `body.webgl-ready` hides it; the stage becomes a sticky panel under 1100px |
| Draco (GLB) / KTX2 | Not applicable — there are no model or texture files: every mesh is generated in Three.js and every print/label is a canvas texture. Nothing to compress, nothing to download. If GLB/KTX2 assets are supplied later, `DRACOLoader` + `KTX2Loader` can be added without touching the scroll architecture. |
