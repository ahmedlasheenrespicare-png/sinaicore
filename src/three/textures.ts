import { useMemo } from 'react'
import * as THREE from 'three'

/* ------------------------------------------------------------------ *
 * Shared model textures.
 *
 * Authored on a canvas at runtime so every print, weave and label is made
 * from the real brand assets — nothing is fetched from a third party.
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * The 50 kg export sack print, copied from the product photograph
 * (public/img/ref/bag50.jpg): blue mountain + crystal emblem over the
 * SinaiCore wordmark, the product line, four round assurance badges, then
 * NET WEIGHT 50 kg · PRODUCT OF EGYPT · www.sinaicore.com — same order,
 * same ink, on the same off-white PP ground.
 * ------------------------------------------------------------------ */
const INK = '#1b4a86'
const INK_LIGHT = '#2b6cb5'

function drawSackBadges(x: CanvasRenderingContext2D, W: number, by: number) {
  const labels: [string, string][] = [
    ['NATURAL', 'SOURCE'],
    ['HIGH', 'PURITY'],
    ['FOOD', 'GRADE'],
    ['QUALITY', 'ASSURED'],
  ]
  const xs = [0.225, 0.405, 0.595, 0.775]
  labels.forEach((lab, i) => {
    const cx = W * xs[i]
    const r = W * 0.058
    x.strokeStyle = INK
    x.lineWidth = Math.max(1.6, W * 0.006)
    x.beginPath()
    x.arc(cx, by, r, 0, Math.PI * 2)
    x.stroke()
    x.save()
    x.translate(cx, by)
    x.fillStyle = INK
    const s = r * 0.5
    if (i === 0) {
      // droplet
      x.beginPath()
      x.moveTo(0, -s)
      x.bezierCurveTo(s * 0.95, -s * 0.1, s * 0.62, s, 0, s)
      x.bezierCurveTo(-s * 0.62, s, -s * 0.95, -s * 0.1, 0, -s)
      x.fill()
    } else if (i === 1) {
      // diamond
      x.beginPath()
      x.moveTo(0, -s)
      x.lineTo(s, -s * 0.18)
      x.lineTo(0, s)
      x.lineTo(-s, -s * 0.18)
      x.closePath()
      x.fill()
    } else if (i === 2) {
      // rosette
      for (let p = 0; p < 7; p++) {
        const a = (p / 7) * Math.PI * 2
        x.beginPath()
        x.ellipse(Math.cos(a) * s * 0.5, Math.sin(a) * s * 0.5, s * 0.42, s * 0.24, a, 0, Math.PI * 2)
        x.fill()
      }
      x.beginPath()
      x.arc(0, 0, s * 0.3, 0, Math.PI * 2)
      x.fill()
    } else {
      // shield with a tick
      x.beginPath()
      x.moveTo(0, -s)
      x.lineTo(s * 0.88, -s * 0.62)
      x.lineTo(s * 0.88, s * 0.2)
      x.quadraticCurveTo(s * 0.7, s * 0.92, 0, s)
      x.quadraticCurveTo(-s * 0.7, s * 0.92, -s * 0.88, s * 0.2)
      x.lineTo(-s * 0.88, -s * 0.62)
      x.closePath()
      x.fill()
      x.strokeStyle = '#f7f7f4'
      x.lineWidth = Math.max(1.4, W * 0.005)
      x.beginPath()
      x.moveTo(-s * 0.36, 0)
      x.lineTo(-s * 0.08, s * 0.3)
      x.lineTo(s * 0.4, -s * 0.3)
      x.stroke()
    }
    x.restore()
    x.fillStyle = INK
    x.font = `700 ${Math.round(W * 0.038)}px Inter, Helvetica, Arial, sans-serif`
    x.fillText(lab[0], cx, by + r * 1.72)
    x.fillText(lab[1], cx, by + r * 1.72 + W * 0.048)
  })
}

export function SackArtTexture(
  opts: { kg?: 25 | 50; line?: string } = {},
) {
  const { kg = 50, line = 'VACUUM REFINED IODIZED FOOD GRADE TABLE SALT' } = opts
  return useMemo(() => {
    const W = 1024
    const H = 1680
    const c = document.createElement('canvas')
    c.width = W
    c.height = H
    const x = c.getContext('2d')!

    const paint = (img?: HTMLImageElement) => {
      x.setTransform(1, 0, 0, 1, 0, 0)
      x.clearRect(0, 0, W, H)
      x.textAlign = 'center'
      x.fillStyle = '#f7f7f4'
      x.fillRect(0, 0, W, H)

      // 1 — emblem (the real brand mark, tinted flat blue like the print)
      const emW = W * 0.4
      if (img) {
        const emH = emW * (img.height / img.width)
        x.save()
        // monochrome blue: draw, then recolour the alpha through a blue pass
        const tmp = document.createElement('canvas')
        tmp.width = emW
        tmp.height = emH
        const tc = tmp.getContext('2d')!
        tc.drawImage(img, 0, 0, emW, emH)
        tc.globalCompositeOperation = 'source-in'
        tc.fillStyle = INK_LIGHT
        tc.fillRect(0, 0, emW, emH)
        x.drawImage(tmp, W / 2 - emW / 2, H * 0.075)
        x.restore()
      }

      // 2 — wordmark + tagline
      const wordY = img ? H * 0.238 : H * 0.14
      x.fillStyle = INK
      x.font = `700 ${Math.round(W * 0.15)}px Georgia, 'Times New Roman', serif`
      x.fillText('SinaiCore', W / 2, wordY)
      x.font = `400 ${Math.round(W * 0.042)}px Inter, Helvetica, Arial, sans-serif`
      x.fillText('At the Core of Quality and Purity', W / 2, wordY + W * 0.055)

      // 3 — rule
      x.fillStyle = 'rgba(27,74,134,0.3)'
      x.fillRect(W * 0.37, wordY + W * 0.085, W * 0.26, 2)

      // 4 — product line, as three centred lines in the photo
      x.fillStyle = INK
      x.font = `700 ${Math.round(W * 0.063)}px Inter, Helvetica, Arial, sans-serif`
      const maxW = W * 0.76
      const rows: string[] = []
      let cur = ''
      for (const word of line.split(' ')) {
        const next = cur ? `${cur} ${word}` : word
        if (x.measureText(next).width > maxW && cur) {
          rows.push(cur)
          cur = word
        } else cur = next
      }
      if (cur) rows.push(cur)
      const lineY = wordY + W * 0.135
      rows.forEach((t, i) => x.fillText(t, W / 2, lineY + i * W * 0.058))

      // 5 — four assurance badges
      drawSackBadges(x, W, lineY + W * 0.115 + rows.length * W * 0.058)

      // 6 — net weight block
      const netY = H * 0.83
      x.fillStyle = INK
      x.font = `600 ${Math.round(W * 0.044)}px Inter, Helvetica, Arial, sans-serif`
      x.fillText('NET WEIGHT', W / 2, netY)
      x.font = `700 ${Math.round(W * 0.115)}px Inter, Helvetica, Arial, sans-serif`
      x.fillText(`${kg} kg`, W / 2, netY + W * 0.1)
      x.font = `600 ${Math.round(W * 0.04)}px Inter, Helvetica, Arial, sans-serif`
      x.fillText('PRODUCT OF EGYPT', W / 2, netY + W * 0.155)
      x.font = `500 ${Math.round(W * 0.036)}px Inter, Helvetica, Arial, sans-serif`
      x.fillText('www.sinaicore.com', W / 2, netY + W * 0.2)

      tex.needsUpdate = true
    }

    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 8
    // the print spans the front face only, so the map is not stretched around
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
    const img = new Image()
    img.onload = () => paint(img)
    img.onerror = () => paint()
    img.src = '/brand/logo-mark.png'
    paint()
    return tex
  }, [kg, line])
}

/* the tablets sack keeps the tablets wording */
export function TabletsSackArt() {
  return SackArtTexture({
    kg: 25,
    line: 'WATER SOFTENING SALT TABLETS',
  })
}

/* aliases used by the reference cut */
export const useSackPrint = SackArtTexture

/* Woven PP fabric: a seamless tile of threads plus the brand's blue weft stripe.
   `plain` drops the stripe for the white tablets sack. */
export function useWovenTexture(plain = false) {
  return useMemo(() => {
    const N = 256
    const c = document.createElement('canvas')
    c.width = c.height = N
    const x = c.getContext('2d')!
    x.fillStyle = plain ? '#fbfbf8' : '#f0f0ea'
    x.fillRect(0, 0, N, N)
    // warp / weft threads
    for (let i = 0; i < N; i += 4) {
      x.fillStyle = plain
        ? (i % 8 === 0 ? 'rgba(120,130,140,0.05)' : 'rgba(120,130,140,0.035)')
        : (i % 8 === 0 ? 'rgba(26,107,156,0.10)' : 'rgba(120,130,140,0.05)')
      x.fillRect(0, i, N, 2)
      x.fillStyle = plain
        ? 'rgba(150,160,170,0.03)'
        : (i % 8 === 0 ? 'rgba(26,107,156,0.07)' : 'rgba(150,160,170,0.04)')
      x.fillRect(i, 0, 2, N)
    }
    // the printed blue stripe seen on the real FIBCs
    if (!plain) {
      x.fillStyle = 'rgba(26,107,156,0.55)'
      x.fillRect(N * 0.46, 0, 8, N)
      x.fillStyle = 'rgba(194,113,47,0.35)'
      x.fillRect(N * 0.56, 0, 4, N)
    }
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(plain ? 3 : 2, plain ? 3 : 2)
    t.anisotropy = 4
    return t
  }, [plain])
}

/* ------------------------------------------------------------------ *
 * Container print — the same identity, sprayed on the side panel
 * ------------------------------------------------------------------ */
export function useContainerPrint() {
  return useMemo(() => {
    const W = 1200
    const H = 320
    const c = document.createElement('canvas')
    c.width = W
    c.height = H
    const x = c.getContext('2d')!
    const blue = '#1a6b9c'
    const copper = '#c2712f'
    const paint = (img?: HTMLImageElement) => {
      x.setTransform(1, 0, 0, 1, 0, 0)
      x.clearRect(0, 0, W, H)
      if (img) {
        const h = 176
        const w = h * (img.width / img.height)
        x.drawImage(img, 54, 66, w, h)
        x.textAlign = 'left'
        x.font = '600 66px Inter, Helvetica, Arial, sans-serif'
        x.fillStyle = copper
        x.fillText('Sinai', 54 + w + 42, 172)
        x.fillStyle = blue
        const wS = x.measureText('Sinai').width
        x.fillText('Core', 54 + w + 42 + wS, 172)
        x.fillStyle = '#e8eef2'
        x.font = '400 26px Inter, Helvetica, Arial, sans-serif'
        x.fillText('SALTS & MINERALS · SINAI, EGYPT', 54 + w + 42, 214)
      }
      x.textAlign = 'right'
      x.fillStyle = '#eef4f8'
      x.font = '600 40px Inter, Helvetica, Arial, sans-serif'
      x.fillText('SINAI REFINED SALT', W - 54, 128)
      x.fillStyle = 'rgba(238,244,248,0.72)'
      x.font = '400 26px monospace'
      x.fillText('NaCl ≥ 99.5%  ·  FIBC 1.5 MT  ·  20 / 40 FT', W - 54, 172)
      x.fillText('PRODUCT OF EGYPT  ·  FOB ARISH / SUEZ', W - 54, 208)
      tex.needsUpdate = true
    }
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 8
    const img = new Image()
    img.onload = () => paint(img)
    img.onerror = () => paint()
    img.src = '/brand/logo-mark.png'
    paint()
    return tex
  }, [])
}
