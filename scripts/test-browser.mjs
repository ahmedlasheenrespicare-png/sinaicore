/* Real-browser smoke test.
 *
 * Loads the built site in headless Chromium, waits for the app to boot, walks
 * the journey and reports what it sees. Needs the two devDependencies below;
 * the bundled Chromium is built for Amazon Linux, so its shared libraries are
 * unpacked once and put on LD_LIBRARY_PATH before the browser is spawned.
 *
 *   npm run test:browser
 */
import { brotliDecompressSync } from 'node:zlib'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'
import sparticuz from '@sparticuz/chromium'

const here = dirname(fileURLToPath(import.meta.url))
const LIBS = '/tmp/sinaicore-chromium-libs'

if (!existsSync(join(LIBS, 'lib', 'libnss3.so'))) {
  mkdirSync(LIBS, { recursive: true })
  const tar = join(LIBS, 'libs.tar')
  writeFileSync(
    tar,
    brotliDecompressSync(
      readFileSync(join(here, '..', 'node_modules', '@sparticuz', 'chromium', 'bin', 'al2023.tar.br')),
    ),
  )
  execFileSync('tar', ['-xf', tar, '-C', LIBS])
}
process.env.LD_LIBRARY_PATH = [join(LIBS, 'lib'), process.env.LD_LIBRARY_PATH].filter(Boolean).join(':')

const BASE = process.env.BASE_URL || 'http://localhost:4173/'
const SHOTS = process.env.SHOTS || '.shots'

const browser = await chromium.launch({
  executablePath: await sparticuz.executablePath(),
  args: [
    ...sparticuz.args,
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
  ],
  headless: true,
})

const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })

const logs = []
const errors = []
page.on('console', (msg) => {
  const t = msg.type()
  logs.push(`[${t}] ${msg.text().slice(0, 300)}`)
  if (t === 'error') errors.push(msg.text())
})
page.on('pageerror', (err) => {
  logs.push(`[pageerror] ${err.message}`)
  errors.push(err.message)
})
page.on('requestfailed', (req) => {
  logs.push(`[requestfailed] ${req.url()} ${req.failure()?.errorText}`)
})
page.on('response', (res) => {
  if (res.status() >= 400) logs.push(`[http ${res.status()}] ${res.url()}`)
})

const t0 = Date.now()
await page.goto(BASE, { waitUntil: 'load', timeout: 90000 })

// wait until the app leaves the booting state
let booted = false
try {
  await page.waitForFunction(() => document.body.classList.contains('is-ready'), { timeout: 90000 })
  booted = true
} catch {
  booted = false
}
const bootMs = Date.now() - t0
console.log(`boot: ${booted ? 'READY' : 'TIMEOUT'} after ${bootMs}ms`)

await page.waitForTimeout(1800) // let the hero reveal settle before the frame is grabbed

const info = await page.evaluate(() => {
  const q = (s) => document.querySelector(s)
  const cs = (el) => (el ? getComputedStyle(el) : null)
  return {
    bodyClass: document.body.className,
    loaderDisplay: cs(q('#loader'))?.display,
    loaderOpacity: cs(q('#loader'))?.opacity,
    chapters: document.querySelectorAll('.chapter').length,
    railItems: document.querySelectorAll('#rail-list .rail__item').length,
    activeRail: [...document.querySelectorAll('.rail__item.is-active .rail__num')].map((e) => e.textContent),
    running: q('#running-title')?.textContent,
    canvas: (() => {
      const c = q('#gl')
      return c ? { w: c.width, h: c.height, cssW: c.clientWidth, cssH: c.clientHeight } : null
    })(),
    scrollHeight: document.documentElement.scrollHeight,
    innerHeight: window.innerHeight,
    figs: document.querySelectorAll('.fig').length,
    figBroken: [...document.querySelectorAll('.fig__img')].filter((i) => i.complete && i.naturalWidth === 0).length,
    figNotLoaded: [...document.querySelectorAll('.fig__img')].filter((i) => !i.complete).length,
    cursor: !!q('#cursor'),
    menuOpen: !!q('#menu-open'),
  }
})
console.log(JSON.stringify(info, null, 2))

await page.screenshot({ path: `${SHOTS}/01-hero.png`, timeout: 90000 })

// walk the journey
const stops = ['water', 'pan', 'harvest', 'wash', 'refine', 'grade', 'pack', 'lab']
const seen = []
for (let i = 0; i < stops.length; i++) {
  const id = stops[i]
  await page.evaluate((chapterId) => {
    const el = document.getElementById(chapterId)
    if (!el) return
    window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 40)
  }, id)
  await page.waitForTimeout(2200)
  const state = await page.evaluate(() => ({
    rail: [...document.querySelectorAll('.rail__item.is-active .rail__num')].map((e) => e.textContent),
    running: document.getElementById('running-title')?.textContent,
    y: Math.round(window.scrollY),
  }))
  seen.push(`${id.padEnd(8)} y=${String(state.y).padStart(6)} rail=[${state.rail}] running="${state.running}"`)
  await page.screenshot({ path: `${SHOTS}/0${i + 2}-${id}.png`, timeout: 90000 })
}
console.log(seen.join('\n'))

// menu
await page.locator('#menu-open').click()
await page.waitForTimeout(900)
const menuState = await page.evaluate(() => {
  const m = document.getElementById('menu')
  const cs = getComputedStyle(m)
  return { visibility: cs.visibility, opacity: cs.opacity, open: m.classList.contains('is-open') }
})
console.log('menu:', JSON.stringify(menuState))
await page.screenshot({ path: `${SHOTS}/10-menu.png`, timeout: 90000 })
await page.locator('#menu-close').click()
await page.waitForTimeout(700)

// reduced motion sanity: reload with the preference set

/* ---------- 3D interaction layer: hotspots, drag, hover ---------- */

const stage = await page.evaluate(() => ({
  hasStage: !!window.__stage,
  transmission: window.__stage ? window.__stage.renderer.transmissionResolutionScale : null,
  particles: window.__stage ? window.__stage.particles.count : null,
}))
console.log('stage:', JSON.stringify(stage))

await page.evaluate(() => {
  const el = document.getElementById('pack')
  window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 420)
})
await page.waitForTimeout(2400)

const hotspots = await page.evaluate(() =>
  [...document.querySelectorAll('.hs')].map((el) => ({
    id: el.dataset.hotspot,
    chapter: Number(el.dataset.chapter),
    visible: el.classList.contains('is-visible'),
    rect: (() => {
      const r = el.getBoundingClientRect()
      return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)]
    })(),
  })),
)
console.log('hotspots:', JSON.stringify(hotspots))

const sack = hotspots.find((h) => h.id === 'sack')
const visibleHere = hotspots.filter((h) => h.visible).map((h) => h.id)
console.log(`hotspots visible in 07: [${visibleHere}]`)

// a real click on the marker, through the browser's own hit testing
await page.mouse.click(sack.rect[0] + sack.rect[2] / 2, sack.rect[1] + sack.rect[3] / 2)
await page.waitForTimeout(700)
const card = await page.evaluate(() => {
  const c = document.querySelector('.hs-card')
  return {
    open: !c.hidden,
    title: c.querySelector('.hs-card__title')?.textContent,
    specs: [...c.querySelectorAll('.hs-card__specs dd')].map((d) => d.textContent),
    rect: (() => {
      const r = c.getBoundingClientRect()
      return [Math.round(r.left), Math.round(r.top), Math.round(r.right), Math.round(r.bottom)]
    })(),
  }
})
console.log('card:', JSON.stringify(card))
await page.screenshot({ path: `${SHOTS}/11-hotspot-card.png`, timeout: 90000 })

await page.keyboard.press('Escape')
await page.waitForTimeout(500)
console.log('card closed by Escape:', await page.evaluate(() => document.querySelector('.hs-card').hidden))

// drag: press on the object, move, release
const probe = await page.evaluate(() => {
  const st = window.__stage
  const V3 = st.camera.position.constructor
  const v = new V3()
  st.rig.getObjectByName('sack_panel').getWorldPosition(v)
  const p = v.clone().project(st.camera)
  /* start a little off the marker so the press lands on the bag itself */
  return {
    x: Math.round((p.x * 0.5 + 0.5) * innerWidth) - 70,
    y: Math.round((-p.y * 0.5 + 0.5) * innerHeight) + 40,
  }
})
console.log('drag probe at', JSON.stringify(probe))

await page.mouse.move(probe.x, probe.y)
await page.waitForTimeout(500)
console.log('hover over object:', await page.evaluate(() => document.body.classList.contains('is-over-object')))

const yawBefore = await page.evaluate(() => window.__stage.rig.rotation.y)
await page.mouse.down()
await page.waitForTimeout(80)
const draggingClass = await page.evaluate(() => document.body.classList.contains('is-dragging'))
for (let i = 1; i <= 10; i++) {
  await page.mouse.move(probe.x + i * 12, probe.y + i * 3)
  await page.waitForTimeout(40)
}
await page.mouse.up()
await page.waitForTimeout(500)
const yawAfter = await page.evaluate(() => window.__stage.rig.rotation.y)
console.log(
  'drag:',
  JSON.stringify({ draggingClass, yawBefore: +yawBefore.toFixed(3), yawAfter: +yawAfter.toFixed(3) }),
)
await page.screenshot({ path: `${SHOTS}/12-drag.png`, timeout: 90000 })

const released = await page.evaluate(() => !document.body.classList.contains('is-dragging'))

const interactions = {
  markerClicked: card.open && card.title === 'شكارة ٥٠ كجم',
  escapeCloses: await page.evaluate(() => document.querySelector('.hs-card').hidden),
  dragged: draggingClass && Math.abs(yawAfter - yawBefore) > 0.05,
  released,
  hover: await page.evaluate(() => document.body.classList.contains('is-over-object')),
}
console.log('interaction checks:', JSON.stringify(interactions))
if (
  !interactions.markerClicked ||
  !interactions.escapeCloses ||
  !interactions.dragged ||
  !interactions.released
) {
  errors.push('3D interaction layer failed: ' + JSON.stringify(interactions))
}

console.log('fig count:', await page.evaluate(() => document.querySelectorAll('.fig').length))
console.log('chapter ids:', await page.evaluate(() => [...document.querySelectorAll('.chapter')].map((c) => c.id).join(',')))

console.log('--- console ---')
console.log(logs.length ? logs.join('\n') : '(none)')
console.log(errors.length ? `\n${errors.length} ERROR(S)` : '\nNO CONSOLE ERRORS')
await browser.close()
process.exit(errors.length ? 1 : 0)
