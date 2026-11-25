import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { story } from '../story'

/** Two-layer pointer from the reference: a precise dot and a slower ring. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || story.reducedMotion) return

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      ringX: window.innerWidth / 2,
      ringY: window.innerHeight / 2,
    }

    const onMove = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      const target = event.target as HTMLElement | null
      const interactive = target?.closest('a, button, [data-cursor]')
      ring.current?.classList.toggle('is-hover', Boolean(interactive))
      dot.current?.classList.toggle('is-hover', Boolean(interactive))
    }

    const tick = () => {
      pointer.ringX += (pointer.x - pointer.ringX) * 0.16
      pointer.ringY += (pointer.y - pointer.ringY) * 0.11
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pointer.ringX}px, ${pointer.ringY}px, 0) translate(-50%, -50%)`
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    gsap.ticker.add(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      gsap.ticker.remove(tick)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
    </>
  )
}
