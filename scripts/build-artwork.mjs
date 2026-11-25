/**
 * Exports the bag artwork: 1:1 PDF + high-resolution PNG for every panel,
 * plus a web-sized texture for the 3D sack and a private preview sheet.
 *
 *   npm run artwork
 *
 * Needs a Chromium/Chrome binary. Set CHROMIUM_PATH (and CHROMIUM_LIBS when the
 * binary keeps its shared libraries outside the default loader path):
 *
 *   CHROMIUM_PATH=/tmp/chromium CHROMIUM_LIBS=/tmp/chromium-libs/lib npm run artwork
 *
 * Rendering is done by the browser on purpose: it shapes the Arabic correctly
 * and prints vector text into the PDF, which a canvas encoder cannot do.
 */
import { mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'
import puppeteer from 'puppeteer-core'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'deliverables', 'bag-artwork')
const webDir = path.join(root, 'public', 'artwork')

const chromium =
  process.env.CHROMIUM_PATH ||
  ['/tmp/chromium', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome'].find(
    (candidate) => existsSync(candidate),
  )

if (!chromium) {
  console.error('No Chromium found. Set CHROMIUM_PATH=/path/to/chrome and run again.')
  process.exit(1)
}

if (process.env.CHROMIUM_LIBS) {
  process.env.LD_LIBRARY_PATH = `${process.env.CHROMIUM_LIBS}:${process.env.LD_LIBRARY_PATH ?? ''}`
}

await mkdir(outDir, { recursive: true })
await mkdir(webDir, { recursive: true })

const MM = 96 / 25.4 // CSS px per millimetre at 96 dpi

/** Trim sizes in mm; `dpi` sets the PNG export resolution. */
const sheets = [
  { file: 'sack-50kg-front.html', name: 'sack-50kg-front', width: 570, height: 920, dpi: 144 },
  { file: 'sack-50kg-back.html', name: 'sack-50kg-back', width: 570, height: 920, dpi: 144 },
  { file: 'jumbo-1000kg.html', name: 'jumbo-1000kg', width: 920, height: 1120, dpi: 120 },
]

const browser = await puppeteer.launch({
  executablePath: chromium,
  headless: true,
  protocolTimeout: 240000,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none', '--force-color-profile=srgb'],
})

const open = async (file) => {
  const page = await browser.newPage()
  await page.goto(pathToFileURL(path.join(root, 'artwork', file)).href, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((resolve) => setTimeout(resolve, 350))
  return page
}

for (const sheet of sheets) {
  const page = await open(sheet.file)
  const scale = sheet.dpi / 96
  await page.setViewport({
    width: Math.round(sheet.width * MM),
    height: Math.round(sheet.height * MM),
    deviceScaleFactor: scale,
  })
  await new Promise((resolve) => setTimeout(resolve, 250))

  const pngPath = path.join(outDir, `${sheet.name}.png`)
  const pdfPath = path.join(outDir, `${sheet.name}.pdf`)

  await page.screenshot({ path: pngPath, type: 'png', captureBeyondViewport: false })
  await page.pdf({
    path: pdfPath,
    width: `${sheet.width}mm`,
    height: `${sheet.height}mm`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  const [png, pdf] = await Promise.all([stat(pngPath), stat(pdfPath)])
  console.log(
    `${sheet.name.padEnd(17)} pdf ${(pdf.size / 1024).toFixed(0).padStart(5)} kB   png ${(png.size / 1024 / 1024).toFixed(2)} MB   ${sheet.width}×${sheet.height} mm @ ${sheet.dpi} dpi`,
  )
  await page.close()
}

/* Web textures: the trim box only (no marks, no slug) for the 3D sack material.
   One press sheet, one texture per product in the line. */
const webTextures = [
  { file: 'sack-50kg-texture.png', query: '', label: 'tablets · 50 kg' },
  { file: 'sack-refined-50kg.png', query: '&product=refined&weight=50 kg', label: 'refined · 50 kg' },
  {
    file: 'sack-washed-1t.png',
    query: '&product=washed&weight=1000 kg',
    label: 'washed · 1 MT',
  },
  { file: 'sack-rock-1t.png', query: '&product=rock&weight=1000 kg', label: 'rock · 1 MT' },
  { file: 'sack-road-1t.png', query: '&product=road&weight=1000 kg', label: 'road · 1 MT' },
]

for (const texture of webTextures) {
  const page = await browser.newPage()
  await page.goto(
    `${pathToFileURL(path.join(root, 'artwork', 'sack-50kg-front.html')).href}?trim${texture.query}`,
    { waitUntil: 'load' },
  )
  await page.evaluate(() => document.fonts.ready)
  await page.setViewport({
    width: Math.round(696 * MM),
    height: Math.round(900 * MM),
    // 1.7k tall: the print stays crisp when the bag fills the frame.
    deviceScaleFactor: 0.8,
  })
  await new Promise((resolve) => setTimeout(resolve, 300))
  await page.screenshot({ path: path.join(webDir, texture.file), type: 'png' })
  console.log(`public/artwork/${texture.file.padEnd(26)} (${texture.label})`)
  await page.close()
}

/* Private preview sheet. */
{
  const page = await open('preview.html')
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1.5 })
  await new Promise((resolve) => setTimeout(resolve, 400))
  await page.screenshot({ path: path.join(outDir, 'preview.png'), type: 'png', fullPage: true })
  console.log('deliverables/bag-artwork/preview.png')
  await page.close()
}

await browser.close()
