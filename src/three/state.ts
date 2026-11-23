/**
 * Tiny shared state bus for the WebGL layer.
 *
 * The DOM scroll journal writes progress here (imperatively, no React render),
 * and the r3f components read it inside useFrame. This keeps 3D animation off
 * the React render path entirely.
 */
export type GlState = {
  /** 0..1 progress through the pinned 3D act */
  act: number
  /** 0..1 pointer position, -1..1 */
  px: number
  py: number
  /** normalised scroll velocity, 0..1 */
  vel: number
  /** active chapter index */
  chapter: number
  /** 0..1 pointer "energy" that decays — used for hover flares */
  energy: number
  reduced: boolean
}

export const gl: GlState = {
  act: 0,
  px: 0,
  py: 0,
  vel: 0,
  chapter: 0,
  energy: 0,
  reduced: false,
}

export const smooth = (a: number, b: number, t: number, dt: number) =>
  a + (b - a) * (1 - Math.exp(-t * dt))

export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

/** smoothstep between two edges */
export const sstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp01((x - edge0) / (edge1 - edge0 || 1e-6))
  return t * t * (3 - 2 * t)
}

/** ease in-out cubic */
export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/** map a value from one range to another, clamped */
export const remap = (v: number, a: number, b: number, c = 0, d = 1) =>
  c + clamp01((v - a) / (b - a || 1e-6)) * (d - c)
