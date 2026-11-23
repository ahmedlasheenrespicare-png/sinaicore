import { useEffect, useRef, useState } from 'react'

/**
 * Boot curtain. Progress is wall-clock based (not frame based) so it always
 * finishes even on low-fps devices, and it only lifts once the GLBs resolve.
 */
export default function Curtain({ ready }: { ready: boolean }) {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)
  const startRef = useRef(performance.now())
  const readyRef = useRef(false)
  readyRef.current = ready

  useEffect(() => {
    let raf = 0
    let done = false
    const tick = () => {
      const t = (performance.now() - startRef.current) / 1000
      // creep to 92% while loading, then sprint to 100 once assets land
      let v = readyRef.current ? 92 + Math.min(8, (t - readyAt.current) * 40) : Math.min(92, 8 + t * 55)
      if (readyRef.current && !readyAt.current) readyAt.current = t
      if (readyRef.current && t - readyAt.current > 0.45) v = 100
      setPct(Math.round(v))
      if (v >= 100 && !done) {
        done = true
        setTimeout(() => {
          setGone(true)
          document.body.classList.remove('is-booting')
          window.dispatchEvent(new Event('sinaicore:ready'))
        }, 420)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    const readyAt = { current: 0 }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (gone) return null

  return (
    <div className={`curtain ${pct >= 100 ? 'is-lifting' : ''}`} role="status" aria-live="polite">
      <div className="curtain-grain" aria-hidden="true" />
      <div className="curtain-inner">
        <div className="curtain-brand">
          <svg viewBox="0 0 32 32" width="34" height="34" fill="none" aria-hidden="true">
            <path d="M16 2.5 27.7 9.3v13.4L16 29.5 4.3 22.7V9.3L16 2.5Z" stroke="currentColor" strokeWidth="1" />
            <path d="M16 2.5v27M4.3 9.3l11.7 6.8 11.7-6.8M4.3 22.7l11.7-6.6 11.7 6.6" stroke="currentColor" strokeWidth="0.6" opacity=".4" />
          </svg>
          <span>
            SINAI<span>CORE</span>
          </span>
        </div>

        <div className="curtain-mid">
          <span className="curtain-label mono">COMPILING SCENE · تحميل المشهد</span>
          <div className="curtain-num ar-num">{String(pct).padStart(3, '0')}</div>
          <div className="curtain-bar">
            <i style={{ transform: `scaleX(${pct / 100})` }} />
          </div>
          <span className="curtain-hint">GLB · DRACO · 4 STAGES</span>
        </div>
      </div>
    </div>
  )
}
