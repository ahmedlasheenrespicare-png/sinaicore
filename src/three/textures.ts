import { useMemo } from 'react'
import * as THREE from 'three'

/* ------------------------------------------------------------------ *
 * Shared model textures.
 *
 * Authored on a canvas at runtime so every print, weave and label is made
 * from the real brand assets — nothing is fetched from a third party.
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * 03b — the tablets sack print, taken from the product photography:
 *       WATER SOFTENING SALT TABLETS · Sea Salt / Solar Evaporation / High Purity
 * ------------------------------------------------------------------ */
export function SackArtTexture() {
  return useMemo(() => {
    const W = 512
    const H = 640
    const c = document.createElement('canvas')
    c.width = W
    c.height = H
    const x = c.getContext('2d')!
    const blue = '#1a6b9c'
    const navy = '#0e1a2b'
    const copper = '#a8582a'

    const paint = (img?: HTMLImageElement) => {
      x.setTransform(1, 0, 0, 1, 0, 0)
      x.clearRect(0, 0, W, H)
      x.textAlign = 'center'

      // emblem
      if (img) {
        const w = 210
        const hh = w * (img.height / img.width)
        x.drawImage(img, W / 2 - w / 2, 26, w, hh)
      }
      // wordmark in the two lockup colours
      x.font = '600 54px Inter, Helvetica, Arial, sans-serif'
      const wS = x.measureText('Sinai').width
      const wC = x.measureText('Core').width
      const left = W / 2 - (wS + wC) / 2
      x.textAlign = 'left'
      x.fillStyle = copper
      x.fillText('Sinai', left, 210)
      x.fillStyle = blue
      x.fillText('Core', left + wS, 210)

      x.textAlign = 'center'
      x.fillStyle = blue
      x.font = '700 44px Inter, Helvetica, Arial, sans-serif'
      x.fillText('WATER SOFTENING', W / 2, 286)
      x.fillText('SALT TABLETS', W / 2, 336)

      x.font = '400 27px Inter, Helvetica, Arial, sans-serif'
      const lines = ['Sea Salt', 'Solar Evaporation Process', 'High Purity']
      lines.forEach((t, i) => {
        const yy = 400 + i * 36
        x.fillStyle = blue
        x.beginPath()
        x.arc(W / 2 - 132, yy - 9, 4.5, 0, Math.PI * 2)
        x.fill()
        x.textAlign = 'left'
        x.fillText(t, W / 2 - 116, yy)
        x.textAlign = 'center'
      })

      x.fillStyle = blue
      x.font = '700 46px Inter, Helvetica, Arial, sans-serif'
      x.fillText('25 / 50 kg', W / 2, 552)
      x.fillStyle = navy
      x.font = '400 28px Inter, Helvetica, Arial, sans-serif'
      x.fillText('PRODUCT OF EGYPT', W / 2, 596)

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
