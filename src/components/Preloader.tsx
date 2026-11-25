import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useProgress } from '@react-three/drei'

type PreloaderProps = {
  ready: boolean
  onDone: () => void
}

/** The counter is a blend of drei's real Three.js loading progress and a
 *  cosmetic tween, so it never jumps from 0 to 100 in one frame. */
export default function Preloader({ ready, onDone }: PreloaderProps) {
  const root = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLSpanElement>(null)
  const counter = useRef({ value: 0 })
  const [tweenValue, setTweenValue] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const { active, progress } = useProgress()

  const assetValue = active ? Math.round(progress) : 100
  const value = Math.max(tweenValue, assetValue)

  useEffect(() => {
    const tween = gsap.to(counter.current, {
      value: 100,
      duration: 1.25,
      ease: 'power2.inOut',
      onUpdate: () => setTweenValue(Math.round(counter.current.value)),
    })
    return () => {
      tween.kill()
    }
  }, [])

  useEffect(() => {
    if (!ready || value < 100 || leaving) return
    setLeaving(true)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone()
      return
    }
    gsap.to(root.current, {
      yPercent: -100,
      duration: 0.85,
      ease: 'power3.inOut',
      delay: 0.12,
      onComplete: onDone,
    })
  }, [ready, value, leaving, onDone])

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-brand">
          <span>◆</span> SINAICORE
        </div>
        <div className="preloader-value">
          <span>{String(value).padStart(3, '0')}</span>
          <em>%</em>
        </div>
        <div className="preloader-bar">
          <span ref={bar} style={{ transform: `scaleX(${value / 100})` }} />
        </div>
        <div className="preloader-meta">
          <span>PREPARING THE SPECIMEN</span>
          <span>SINAI / EGYPT · 01—08</span>
        </div>
      </div>
    </div>
  )
}
