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
