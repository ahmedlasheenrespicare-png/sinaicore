/**
 * Preview server for the two extra cuts.
 *
 * Serves a production build with a chosen entry as "/", so either alternate
 * design can be shown on its own port without touching the main site.
 *
 *   node scripts/serve-alt-preview.mjs 5180 alt   # container cut
 *   node scripts/serve-alt-preview.mjs 5181 ref   # reference cut
 *   node scripts/serve-alt-preview.mjs 5182 notes # editorial notes cut
 *
 * Build first: npm run build
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const PORT = Number(process.argv[2] || 5180)
const CUT = process.argv[3] || 'alt'
const ENTRY = CUT === 'ref' ? 'ref.html' : CUT === 'notes' ? 'notes.html' : 'alt.html'
const LABEL = CUT === 'ref' ? 'reference' : CUT === 'notes' ? 'editorial notes' : 'container'
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
  '.mp4': 'video/mp4',
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0])
  const rel = url === '/' ? ENTRY : url.replace(/^\/+/, '')
  const file = path.join(ROOT, rel)
  const inside = file.startsWith(ROOT)

  if (inside && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, {
      'content-type': TYPES[path.extname(file)] || 'application/octet-stream',
      'cache-control': 'no-cache',
    })
    fs.createReadStream(file).pipe(res)
    return
  }
  // unknown routes fall back to the alternate cut
  res.writeHead(200, { 'content-type': TYPES['.html'], 'cache-control': 'no-cache' })
  fs.createReadStream(path.join(ROOT, ENTRY)).pipe(res)
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`${LABEL} cut preview → http://0.0.0.0:${PORT}`)
})
