/**
 * One quality decision, made once, shared by every material and effect.
 * Phones and low-memory machines get a cheaper scene: no transmission, no
 * depth-of-field, a single shadow map and half the particle budget.
 */

type NavigatorWithMemory = Navigator & { deviceMemory?: number }

const isBrowser = typeof window !== 'undefined'

const width = isBrowser ? window.innerWidth : 1440
const memory = isBrowser ? (navigator as NavigatorWithMemory).deviceMemory ?? 8 : 8
const coarse = isBrowser ? window.matchMedia('(pointer: coarse)').matches : false
const reducedMotion = isBrowser
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

/** Software rasterisers (SwiftShader, llvmpipe, …) cannot run three's
 *  transmission pass, which would leave every crystal a flat tinted slab. */
const softwareRenderer = (() => {
  if (!isBrowser) return false
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    if (!gl) return true
    const info = gl.getExtension('WEBGL_debug_renderer_info')
    const name = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : ''
    const lose = gl.getExtension('WEBGL_lose_context')
    lose?.loseContext()
    return /swiftshader|llvmpipe|software|basic render/i.test(name)
  } catch {
    return false
  }
})()

/* Phones, tablets in portrait and genuinely old hardware. A 4 GB laptop is
 * perfectly able to run the full scene, so memory alone is not the signal. */
const low = width < 860 || memory <= 2 || (coarse && width < 1024)

export const quality = {
  level: low ? ('low' as const) : ('high' as const),
  low,
  /** physical transmission is the most expensive feature in the scene */
  transmission: !low && !softwareRenderer,
  postprocessing: !low && !reducedMotion,
  contactShadows: true,
  shadowMapSize: low ? 512 : 1024,
  particles: low ? 0.45 : 1,
  dpr: low ? 1 : 1.5,
  maxDpr: low ? 1.25 : 1.75,
  reducedMotion,
}

export type Quality = typeof quality
