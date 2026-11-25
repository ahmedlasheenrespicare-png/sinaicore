import { useRef } from 'react'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { quality } from '../lib/quality'
import { specSheets } from '../data/specs'
import { clamp, story } from '../story'

export const openSpec = (id: string) => {
  window.dispatchEvent(new CustomEvent<string>('sinaicore:spec', { detail: id }))
}

type Marker = {
  id: string
  position: [number, number, number]
  /** phase window in chapter units (0 → 7) */
  from: number
  to: number
  side?: 'left' | 'right'
}

/**
 * The anchors live in the sculpture's own space, so they follow the damped
 * chapter positions, the pointer tilt and the limited orbit rotation.
 */
const MARKERS: Marker[] = [
  { id: 'purity', position: [0.66, 0.66, 0.7], from: 3.45, to: 5.45, side: 'right' },
  { id: 'moisture', position: [-0.6, 0.45, 1.86], from: 5.35, to: 6.9, side: 'left' },
  { id: 'layers', position: [0.52, -0.58, 1.86], from: 5.35, to: 6.9, side: 'right' },
  { id: 'seal', position: [-1.7, 0.4, 1.0], from: 6.5, to: 8, side: 'left' },
]

function dot(index: number) {
  return String(index + 1).padStart(2, '0')
}

function MarkerButton({ marker, index }: { marker: Marker; index: number }) {
  const wrap = useRef<HTMLDivElement>(null)
  const sheet = specSheets.find((spec) => spec.id === marker.id)

  useFrame(() => {
    const element = wrap.current
    if (!element) return
    const phase = story.phase
    const fadeIn = clamp((phase - marker.from) / 0.3)
    const fadeOut = clamp((marker.to - phase) / 0.3)
    const weight = Math.min(fadeIn, fadeOut)
    if (weight <= 0.01) {
      if (element.style.opacity !== '0') {
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
      }
      return
    }
    const scale = 0.86 + weight * 0.14
    element.style.opacity = weight.toFixed(3)
    element.style.pointerEvents = 'auto'
    element.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`
  })

  if (!sheet) return null

  return (
    <Html
      position={marker.position}
      center
      zIndexRange={[60, 40]}
      style={{ pointerEvents: 'none' }}
      wrapperClass="hotspot-anchor"
    >
      <div ref={wrap} className={`hotspot hotspot--${marker.side ?? 'right'}`}>
        <button
          type="button"
          className="hotspot-button"
          onClick={() => openSpec(marker.id)}
          aria-label={`${sheet.title} — افتح بطاقة المواصفات`}
        >
          <span className="hotspot-pulse" aria-hidden="true" />
          <span className="hotspot-core" aria-hidden="true" />
        </button>
        <span className="hotspot-label">
          <em>{dot(index)}</em>
          {sheet.marker}
        </span>
      </div>
    </Html>
  )
}

export default function Hotspots() {
  /* A phone gets the two most important anchors; five pills over a small
   * model is noise, not interaction. */
  const markers = MARKERS.map((marker, index) => ({ marker, index })).filter(
    ({ marker }) => !quality.low || marker.id !== 'moisture',
  )

  return (
    <>
      {markers.map(({ marker, index }) => (
        <MarkerButton key={marker.id} marker={marker} index={index} />
      ))}
    </>
  )
}
