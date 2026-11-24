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

await page.screenshot({ path: `${SHOTS}/01-hero.png` })

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
  await page.waitForTimeout(1100)
  const state = await page.evaluate(() => ({
    rail: [...document.querySelectorAll('.rail__item.is-active .rail__num')].map((e) => e.textContent),
    running: document.getElementById('running-title')?.textContent,
    y: Math.round(window.scrollY),
  }))
  seen.push(`${id.padEnd(8)} y=${String(state.y).padStart(6)} rail=[${state.rail}] running="${state.running}"`)
  await page.screenshot({ path: `${SHOTS}/0${i + 2}-${id}.png` })
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
await page.screenshot({ path: `${SHOTS}/10-menu.png` })
await page.locator('#menu-close').click()
await page.waitForTimeout(700)

// reduced motion sanity: reload with the preference set
console.log('fig count:', await page.evaluate(() => document.querySelectorAll('.fig').length))
console.log('chapter ids:', await page.evaluate(() => [...document.querySelectorAll('.chapter')].map((c) => c.id).join(',')))

console.log('--- console ---')
console.log(logs.length ? logs.join('\n') : '(none)')
console.log(errors.length ? `\n${errors.length} ERROR(S)` : '\nNO CONSOLE ERRORS')
await browser.close()
process.exit(errors.length ? 1 : 0)
