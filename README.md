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
