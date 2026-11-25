import { initialSceneState, type SceneState } from './motion/scene'

export const CHAPTER_COUNT = 8

/** Values continuously read by the render loop. React is never updated per frame. */
export const story = {
  progress: 0,
  /** scroll position in viewport screens (drives sceneAt) */
  position: 0,
  /** eased chapter index, 0 → 7 */
  phase: 0,
  targetPhase: 0,
  /** acceleration of the scroll, used for the reference's "surge" effect */
  surge: 0,
  pointerX: 0,
  pointerY: 0,
  reducedMotion: false,
}

/** The damped scene channels shared by the camera and the sculpture. */
export const motion: SceneState = { ...initialSceneState }

if (import.meta.env.DEV) {
  ;(window as unknown as { __sinaicore?: unknown }).__sinaicore = { story, motion }
}

export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

export const smoothstep = (value: number) => {
  const x = clamp(value)
  return x * x * (3 - 2 * x)
}

export const phaseWeight = (phase: number, index: number) =>
  smoothstep(1 - Math.abs(phase - index))

export const localProgress = (index: number) =>
  clamp(story.phase - index + 0.5)

export const bell = (value: number, centre: number, radius: number) =>
  Math.exp(-Math.pow((value - centre) / radius, 2) * 2)

export const easeOutCubic = (x: number) => 1 - Math.pow(1 - clamp(x), 3)
