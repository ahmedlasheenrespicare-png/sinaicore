/* render the document from data */

import { chapters } from '../data/chapters.js'
import {
  numbers,
  grades,
  steps,
  offices,
  destinations,
  gradeOptions,
  packOptions,
  portOptions,
} from '../data/site.js'

const esc = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

/* values that are pure Latin/numbers ("≥ 99.5 %", "FOB · CFR") must not be
   reordered by the RTL paragraph — Arabic-mixed values are left alone so the
   bidi algorithm keeps the unit after the number. */
const ARABIC = /[\u0600-\u06FF]/
const valueAttrs = (v) => (ARABIC.test(v) ? '' : ' dir="ltr"')

/* ------------------------------------------------------------------ *
 * chapters
 * ------------------------------------------------------------------ */

function renderBlock(block) {
  switch (block.kind) {
    case 'p':
      return `<p class="chapter__p" data-reveal>${esc(block.text)}</p>`
    case 'rows':
      return `
        <div class="rows" data-reveal>
          <p class="rows__title">${esc(block.title)}</p>
          ${block.rows
            .map(
              ([k, v]) =>
                `<div class="rows__row"><span class="rows__k">${esc(k)}</span><span class="rows__v"${valueAttrs(v)}>${esc(v)}</span></div>`,
            )
            .join('')}
        </div>`
    case 'note':
      return `
        <aside class="note" data-reveal>
          <span class="note__n">${esc(block.n)}</span>
          <p class="note__title">${esc(block.title)}</p>
          <p class="note__text">${esc(block.text)}</p>
        </aside>`
    case 'quote':
      return `
        <blockquote class="pull" data-reveal>
          <p class="pull__text">${esc(block.text)}</p>
          <cite class="pull__cite">${esc(block.cite)}</cite>
        </blockquote>`
    case 'fig':
      return `
        <figure class="fig${block.bare ? ' fig--bare' : ''}${block.span === 'wide' ? ' fig--wide' : ''}" data-fig>
          <div class="fig__frame">
            <img
              class="fig__img"
              src="${esc(block.src)}"
              alt="${esc(block.alt)}"
              loading="${block.eager ? 'eager' : 'lazy'}"
              decoding="async"
              style="--ratio: ${esc(block.ratio || '4 / 3')}"
            />
          </div>
          <figcaption class="fig__caption">
            ${block.tag ? `<span class="fig__tag">${esc(block.tag)}</span>` : ''}
            <span class="fig__text">${esc(block.caption)}</span>
          </figcaption>
        </figure>`
    default:
      return ''
  }
}

export function renderChapters() {
  const host = document.getElementById('chapters')
  if (!host) return []

  host.innerHTML = chapters
    .map(
      (ch, i) => `
      <section class="chapter" id="${esc(ch.id)}" data-chapter="${i + 1}" aria-labelledby="h-${esc(ch.id)}">
        <div class="chapter__grid">
          <aside class="chapter__margin">
            <div class="chapter__num" aria-hidden="true">${esc(ch.n)}</div>
            <p class="chapter__lat">${esc(ch.lat)}</p>
            <h2 class="chapter__title" id="h-${esc(ch.id)}">${esc(ch.title)}</h2>
            <p class="chapter__sub">${esc(ch.sub)}</p>
            <p class="chapter__index" dir="ltr">${esc(ch.n)} / 08</p>
          </aside>

          <div class="chapter__body">
            <p class="chapter__lead" data-reveal>${esc(ch.lead)}</p>
            ${ch.blocks.map(renderBlock).join('')}
          </div>

          <div class="chapter__specimen" aria-hidden="true">
            <span>SPECIMEN ${esc(ch.n)}</span>
            <span>${esc(ch.lat)}</span>
          </div>
        </div>
      </section>`,
    )
    .join('')

  return Array.from(host.querySelectorAll('.chapter'))
}

/* ------------------------------------------------------------------ *
 * rail + menu
 * ------------------------------------------------------------------ */

export function renderRail() {
  const list = document.getElementById('rail-list')
  if (!list) return
  list.innerHTML = chapters
    .map(
      (ch, i) => `
      <li>
        <a class="rail__item" href="#${esc(ch.id)}" data-scroll data-rail="${i}" aria-label="الفصل ${esc(ch.n)} — ${esc(ch.title)}">
          <span class="rail__dot" aria-hidden="true"></span>
          <span class="rail__num">${esc(ch.n)}</span>
          <span class="rail__title">${esc(ch.title)}</span>
        </a>
      </li>`,
    )
    .join('')
}

export function renderMenu() {
  const list = document.getElementById('menu-list')
  if (!list) return
  list.innerHTML = chapters
    .map(
      (ch) => `
      <li class="menu__item">
        <a class="menu__link" href="#${esc(ch.id)}" data-scroll>
          <span class="menu__num">${esc(ch.n)}</span>
          <span class="menu__name">${esc(ch.title)}</span>
          <span class="menu__sub">${esc(ch.sub)}</span>
        </a>
      </li>`,
    )
    .join('')
}

/* ------------------------------------------------------------------ *
 * numbers, grades, steps
 * ------------------------------------------------------------------ */

export function renderNumbers() {
  const host = document.getElementById('numbers-rows')
  if (!host) return
  host.innerHTML = numbers.rows
    .map(
      ([k, v]) =>
        `<div class="numbers__row" role="row" data-reveal><span class="numbers__k" role="cell">${esc(k)}</span><span class="numbers__v" role="cell"${valueAttrs(v)}>${esc(v)}</span></div>`,
    )
    .join('')
}

export function renderGrades() {
  const host = document.getElementById('grades')
  if (!host) return
  host.innerHTML = grades
    .map(
      (g, i) => `
      <article class="grade" data-reveal>
        <span class="grade__n">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="grade__name">${esc(g.name)}</h3>
        <span class="grade__latin" dir="ltr">${esc(g.latin)}</span>
        <div class="grade__specs">
          <div class="grade__spec"><span>NaCl</span><b${valueAttrs(g.nacl)}>${esc(g.nacl)}</b></div>
          <div class="grade__spec"><span>Moisture</span><b${valueAttrs(g.moisture)}>${esc(g.moisture)}</b></div>
          <div class="grade__spec"><span>Size</span><b${valueAttrs(g.size)}>${esc(g.size)}</b></div>
          <div class="grade__spec"><span>Pack</span><b>${esc(g.pack)}</b></div>
        </div>
      </article>`,
    )
    .join('')
}

export function renderSteps() {
  const host = document.getElementById('steps')
  if (!host) return
  host.innerHTML = steps
    .map(
      (s, i) => `
      <li class="step" data-reveal>
        <span class="step__n">${esc(s.n)}</span>
        <span class="step__title">${esc(s.title)}</span>
        <span class="step__body">${esc(s.body)}</span>
      </li>`,
    )
    .join('')
}

/* ------------------------------------------------------------------ *
 * footer + form
 * ------------------------------------------------------------------ */

export function renderFooter() {
  const officesHost = document.getElementById('footer-offices')
  if (officesHost) {
    officesHost.innerHTML = offices
      .map(
        (o) => `
        <div class="footer__office">
          <strong>${esc(o.title)}</strong>
          <span>${o.lines.map(esc).join('<br />')}</span>
          <span class="footer__lat">${esc(o.sub)}</span>
        </div>`,
      )
      .join('')
  }

  const destHost = document.getElementById('footer-dest')
  if (destHost) {
    destHost.innerHTML = destinations
      .map((d) => `<li><span>${esc(d.en)}</span>${esc(d.ar)}</li>`)
      .join('')
  }
}

export function renderQuoteForm() {
  const grade = document.getElementById('q-grade')
  const pack = document.getElementById('q-pack')
  const port = document.getElementById('q-port')

  if (grade) {
    grade.innerHTML =
      '<option value="">اختر الدرجة</option>' +
      gradeOptions.map((o) => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join('')
  }
  if (pack) {
    pack.innerHTML =
      '<option value="">اختر التعبئة</option>' +
      packOptions.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join('')
  }
  if (port) {
    port.innerHTML =
      '<option value="">اختر الميناء</option>' +
      portOptions.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join('')
  }
}

export function renderAll() {
  const sections = renderChapters()
  renderRail()
  renderMenu()
  renderNumbers()
  renderGrades()
  renderSteps()
  renderFooter()
  renderQuoteForm()
  return sections
}
