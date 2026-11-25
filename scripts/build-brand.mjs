/**
 * Prepares the brand art for print.
 *
 * The logos that ship with the website are flattened onto black (they were cut
 * for a dark hero). Packaging is printed on cream board and on dark teal bands,
 * so this script keys the black out and leaves true alpha behind:
 *
 *   observed = colour × alpha      (the logo was composited over black)
 *   alpha    = max(r, g, b)        (screen-style key: black → transparent)
 *   colour   = observed ÷ alpha    (un-multiply, so edges keep their hue)
 *
 *   npm run brand
 *
 * Outputs: artwork/brand/sinaicore-lockup.png, artwork/brand/sinaicore-mark.png
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import puppeteer from 'puppeteer-core'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const brandDir = path.join(root, 'artwork', 'brand')

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

const jobs = [
  { source: 'sinaicore-lockup-source.png', target: 'sinaicore-lockup.png', floor: 0.06 },
  // The hero logo stacks the mark over its own wordmark; packaging sets the
  // wordmark in type, so only the mark itself is keyed out of the source.
  { source: 'sinaicore-mark-source.png', target: 'sinaicore-mark.png', floor: 0.06, cropTop: 0.66 },
  // One-colour version: the sack in the reference photography is printed in a
  // single blue on white, so the mark is re-inked rather than tinted.
  {
    source: 'sinaicore-mark-source.png',
    target: 'sinaicore-mark-mono.png',
    floor: 0.06,
    cropTop: 0.6,
    ink: '#0a3b8c',
    scale: 3,
    blackKey: true,
  },
]

await mkdir(brandDir, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: chromium,
  headless: true,
  protocolTimeout: 120000,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb'],
})

const page = await browser.newPage()
await page.setContent('<html><body style="margin:0;background:#000"></body></html>')

for (const job of jobs) {
  const file = path.join(brandDir, job.source)
  const dataUrl = `data:image/png;base64,${(await readFile(file)).toString('base64')}`

  const result = await page.evaluate(async (src, floor, cropTop, ink, scale, blackKey) => {
    const image = new Image()
    image.src = src
    await image.decode()

    const canvas = document.createElement('canvas')
    canvas.width = Math.round(image.naturalWidth * scale)
    canvas.height = Math.round(image.naturalHeight * cropTop * scale)
    const ctx = canvas.getContext('2d')
    // Line art survives the upscale cleanly; the mask is thresholded below.
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      Math.round(image.naturalHeight * cropTop),
      0,
      0,
      canvas.width,
      canvas.height,
    )

    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = frame.data
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const key = Math.max(r, g, b) / 255
      if (blackKey) {
        // The logo was rendered premultiplied over pure black, so the key is
        // "is this pixel black at all": the ink stays at full opacity and the
        // anti-aliased rim feathers over a couple of levels.
        data[i + 3] = key <= 0.02 ? 0 : Math.round(Math.min(1, (key - 0.02) / 0.03) * 255)
        continue
      }
      const alpha = key <= floor ? 0 : Math.min(1, (key - floor) / (1 - floor))
      if (alpha === 0) {
        data[i + 3] = 0
        continue
      }
      // un-multiply, then clamp back into range
      data[i] = Math.min(255, Math.round(r / alpha))
      data[i + 1] = Math.min(255, Math.round(g / alpha))
      data[i + 2] = Math.min(255, Math.round(b / alpha))
      data[i + 3] = Math.round(alpha * 255)
    }
    if (ink) {
      // Keep only ink: alpha follows how far a pixel sits from paper white,
      // which turns the rendered logo into one-colour line art.
      const hex = ink.replace('#', '')
      const ir = parseInt(hex.slice(0, 2), 16)
      const ig = parseInt(hex.slice(2, 4), 16)
      const ib = parseInt(hex.slice(4, 6), 16)
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 0) continue
        const r = data[i] / 255
        const g = data[i + 1] / 255
        const b = data[i + 2] / 255
        // A real one-colour print puts solid ink wherever the logo had paint
        // and leaves bare fabric only in the white facets. Paint is detected by
        // chroma (blue vs. neutral) or by darkness, then feathered to a hard
        // edge so the mark reads as printed, not as a faded photo.
        const hi = Math.max(r, g, b)
        const lo = Math.min(r, g, b)
        const raw = Math.max((hi - lo) / 0.22, (1 - hi) / 0.22)
        const paint = Math.min(1, Math.max(0, (raw - 0.6) / 0.4))
        data[i] = ir
        data[i + 1] = ig
        data[i + 2] = ib
        data[i + 3] = Math.round((data[i + 3] / 255) * paint * 255)
      }
      ctx.putImageData(frame, 0, 0)
    }

    ctx.putImageData(frame, 0, 0)
    return {
      width: canvas.width,
      height: canvas.height,
      png: canvas.toDataURL('image/png').split(',')[1],
    }
  }, dataUrl, job.floor, job.cropTop ?? 1, job.ink ?? null, job.scale ?? 1, job.blackKey ?? false)

  const target = path.join(brandDir, job.target)
  await writeFile(target, Buffer.from(result.png, 'base64'))
  console.log(
    `${job.target.padEnd(24)} ${result.width}×${result.height} px  →  ${path.relative(root, target)}`,
  )
}

await browser.close()
