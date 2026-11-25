/**
 * Screen-based story beats, following the architecture of the "Field to Still"
 * reference: scroll is measured in viewport screens, `sceneAt()` turns that
 * single number into independent named channels, and the render loop damps
 * those channels twice before they reach the scene.
 */
export const BEATS = [
  { id: 'water', screens: 3 },
  { id: 'evaporation', screens: 1.5 },
  { id: 'harvest', screens: 2.5 },
  { id: 'wash', screens: 2.5 },
  { id: 'refine', screens: 2 },
  { id: 'sort', screens: 2 },
  { id: 'pack', screens: 2.5 },
  { id: 'analysis', screens: 2 },
] as const

export type BeatId = (typeof BEATS)[number]['id']

export const TOTAL_SCREENS = BEATS.reduce((sum, beat) => sum + beat.screens, 0)

export function positionForPhase(phase: number) {
  const clamped = Math.min(Math.max(phase, 0), BEATS.length - 1)
  const index = Math.min(Math.floor(clamped), BEATS.length - 2)
  const t = clamped - index
  return (
    BEAT_START[BEATS[index].id] * (1 - t) + BEAT_START[BEATS[index + 1].id] * t
  )
}

export const BEAT_START = BEATS.reduce<Record<BeatId, number>>(
  (starts, beat, index) => {
    starts[beat.id] = BEATS.slice(0, index).reduce((sum, item) => sum + item.screens, 0)
    return starts
  },
  {} as Record<BeatId, number>,
)

/** The last beat's start is the end of the scrubbed story. */
export const STORY_LENGTH = BEAT_START.analysis

/** Position → chapter units, so chapter i always lands exactly on phase i. */
export function phaseAt(position: number) {
  const last = BEATS.length - 1
  if (position <= 0) return 0
  if (position >= BEAT_START[BEATS[last].id]) return last
  for (let index = last - 1; index >= 0; index--) {
    const start = BEAT_START[BEATS[index].id]
    if (position < start) continue
    const end = BEAT_START[BEATS[index + 1].id]
    return index + (position - start) / Math.max(end - start, 0.0001)
  }
  return 0
}

const smooth = (value: number, from: number, to: number) => {
  const t = Math.min(Math.max((value - from) / (to - from), 0), 1)
  return t * t * (3 - 2 * t)
}

/** Rise of one beat, slightly before its section, exactly like the reference. */
export const beatAt = (position: number, id: BeatId, lead = 0.2, trail = 0.9) => {
  const start = BEAT_START[id] - 1
  return smooth(position, start + lead, start + trail)
}

/**
 * One camera station per chapter. Interpolating a keyframed path keeps the
 * subject framed in the empty middle column instead of letting several beats
 * accumulate into one drifting offset.
 */
const CAMERA_KEYS: { pos: [number, number, number]; target: [number, number, number] }[] = [
  { pos: [0, 0.2, 6.6], target: [0, -0.15, 0] }, // 01 · seawater
  { pos: [0.55, 0.66, 5.9], target: [0, 0.05, 0] }, // 02 · evaporation
  { pos: [-0.62, 0.72, 5.6], target: [0, 0, 0] }, // 03 · fracture
  { pos: [0.52, 0.36, 5.9], target: [0, -0.05, 0] }, // 04 · wash
  { pos: [0.16, 0.12, 6.3], target: [0, 0, 0] }, // 05 · refine
  { pos: [-0.25, 0.46, 6.2], target: [0, 0.05, 0] }, // 06 · sort
  { pos: [0.58, 0.16, 7.6], target: [0, -0.15, 0.55] }, // 07 · pack
  { pos: [0.2, 0.42, 8.6], target: [-0.5, -0.15, 0] }, // 08 · analysis
]

function cameraAt(phase: number) {
  const last = CAMERA_KEYS.length - 1
  const clamped = Math.min(Math.max(phase, 0), last)
  const index = Math.min(Math.floor(clamped), last - 1)
  const t = smooth(clamped - index, 0, 1)
  const a = CAMERA_KEYS[index]
  const b = CAMERA_KEYS[index + 1]
  const mix = (from: number, to: number) => from + (to - from) * t
  return {
    camX: mix(a.pos[0], b.pos[0]),
    camY: mix(a.pos[1], b.pos[1]),
    camZ: mix(a.pos[2], b.pos[2]),
    targetX: mix(a.target[0], b.target[0]),
    targetY: mix(a.target[1], b.target[1]),
    targetZ: mix(a.target[2], b.target[2]),
  }
}

export type SceneState = ReturnType<typeof sceneAt>

export function sceneAt(position: number) {
  const water = beatAt(position, 'water', 0.2, 0.9)
  const evaporation = beatAt(position, 'evaporation')
  const harvest = beatAt(position, 'harvest')
  const wash = beatAt(position, 'wash')
  const refine = beatAt(position, 'refine')
  const sort = beatAt(position, 'sort')
  const pack = beatAt(position, 'pack')
  const analysis = beatAt(position, 'analysis')

  const phase = phaseAt(position)

  return {
    scroll: position,
    water,
    evaporation,
    harvest,
    wash,
    refine,
    sort,
    pack,
    analysis,
    phase,
    fill: smooth(position, BEAT_START.pack - 0.4, BEAT_START.pack + 1.4),
    seal: smooth(position, BEAT_START.analysis - 0.5, BEAT_START.analysis + 1.2),
    explode: Math.max(harvest * 0.72, wash * 0.5, sort * 0.66, analysis * 0.14, evaporation * 0.12),
    twist: harvest * -0.25 + wash * 0.3 + sort * -0.2 + pack * 0.18,
    ...cameraAt(phase),
  }
}

export const initialSceneState = sceneAt(0)
