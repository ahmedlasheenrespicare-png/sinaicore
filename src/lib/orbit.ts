/**
 * Limited orbit: the second interactivity layer.
 *
 * At the product stations (crystal / sack / container) the object can be
 * dragged with mouse or finger, but only inside a narrow yaw/pitch window and
 * it always springs back. Scroll stays owned by Lenis — the drag only ever
 * touches rotation, never the camera target.
 */
export const orbit = {
  /** damped rotation applied to the sculpture */
  x: 0,
  y: 0,
  /** where the drag wants to be */
  targetX: 0,
  targetY: 0,
  dragging: false,
  /** 0 → 1, how much the current chapter allows the drag */
  station: 0,
  /** body class hook for the grab cursor */
  enabled: false,
}

export const LIMIT = { y: 0.58, x: 0.26 }

export const releaseOrbit = () => {
  orbit.targetX = 0
  orbit.targetY = 0
}
