/* DOM smoke test: renders the document in JSDOM and checks the structure. */
import fs from 'node:fs'
import path from 'node:path'
import { JSDOM } from 'jsdom'

const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8')
const dom = new JSDOM(html, { url: 'http://localhost/', pretendToBeVisual: true })
const { window } = dom

global.window = window
global.document = window.document
Object.defineProperty(globalThis, "navigator", { value: window.navigator, configurable: true })
global.HTMLElement = window.HTMLElement
global.Element = window.Element
global.Node = window.Node
global.getComputedStyle = window.getComputedStyle

const { renderAll } = await import('../src/core/render.js')
const sections = renderAll()

const q = (s) => document.querySelectorAll(s).length
const checks = [
  ['chapters', q('.chapter'), 8],
  ['chapter margins', q('.chapter__margin'), 8],
  ['chapter bodies', q('.chapter__body'), 8],
  ['chapter leads', q('.chapter__lead'), 8],
  ['rail items', q('#rail-list .rail__item'), 8],
  ['menu items', q('#menu-list .menu__item'), 8],
  ['numbers rows', q('#numbers-rows .numbers__row'), 10],
  ['grade cards', q('#grades .grade'), 5],
  ['steps', q('#steps .step'), 3],
  ['footer offices', q('#footer-offices .footer__office'), 2],
  ['footer destinations', q('#footer-dest li'), 6],
  ['grade options', q('#q-grade option'), 6],
  ['pack options', q('#q-pack option'), 5],
  ['port options', q('#q-port option'), 4],
]

let ok = true
for (const [name, actual, expected] of checks) {
  const pass = actual === expected
  if (!pass) ok = false
  console.log(`${pass ? '✓' : '✗'} ${name}: ${actual} (expected ${expected})`)
}

const imgs = [...document.querySelectorAll('img')].map((i) => i.getAttribute('src'))
const missing = [...new Set(imgs)].filter((src) => {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return false
  return !fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')))
})
if (missing.length) {
  ok = false
  console.log('✗ missing images:', missing)
} else {
  console.log(`✓ all ${new Set(imgs).size} image paths exist`)
}

const ids = [...document.querySelectorAll('.chapter')].map((s) => s.id)
console.log('chapter ids:', ids.join(', '))
console.log(ok ? '\nDOM SMOKE TEST PASSED' : '\nDOM SMOKE TEST FAILED')
process.exit(ok ? 0 : 1)
