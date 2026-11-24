/* small shared helpers */

export const $ = (sel, root = document) => root.querySelector(sel)
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel))

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const invLerp = (a, b, v) => (b - a === 0 ? 0 : (v - a) / (b - a))
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
export const easeOut = (t) => 1 - Math.pow(1 - t, 3)

export const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const finePointer = () => window.matchMedia('(pointer: fine)').matches

export const isMobile = () => window.matchMedia('(max-width: 860px)').matches

/** deterministic pseudo-random from a seed, so the explosion is stable */
export function seeded(seed) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function toArabicDigits(value) {
  const digits = '٠١٢٣٤٥٦٧٨٩'
  return String(value).replace(/\d/g, (d) => digits[Number(d)])
}

export function debounce(fn, wait = 180) {
  let t
  return (...args) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), wait)
  }
}

export function rafOnce(fn) {
  let queued = false
  return (...args) => {
    if (queued) return
    queued = true
    requestAnimationFrame(() => {
      queued = false
      fn(...args)
    })
  }
}
