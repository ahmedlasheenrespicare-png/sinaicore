import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { journal } from './lib/journal'
import { gl, sstep } from './three/state'
import Hero from './components/Hero'
import Journey from './components/Journey'
import { Products, Quality, Contact, Footer } from './components/Sections'
import { Header, ChapterRail } from './components/Chrome'
import Curtain from './components/Curtain'

const Stage = lazy(() => import('./three/Stage'))

export default function App() {
  const [ready, setReady] = useState(false)
  const [hotspotsOn, setHotspotsOn] = useState(false)
  const actRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add('is-booting')
    journal.observe()
    journal.refresh()

    // pointer → shared 3D state (no React re-render)
    const onPointer = (e: PointerEvent) => {
      gl.px = (e.clientX / window.innerWidth) * 2 - 1
      gl.py = -((e.clientY / window.innerHeight) * 2 - 1)
      gl.energy = Math.min(1, gl.energy + 0.18)
    }
    window.addEventListener('pointermove', onPointer, { passive: true })

    // decay pointer energy
    let raf = 0
    const decay = () => {
      gl.energy *= 0.965
      raf = requestAnimationFrame(decay)
    }
    raf = requestAnimationFrame(decay)

    const onReady = () => setReady(true)
    window.addEventListener('sinaicore:ready', onReady)

    return () => {
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('sinaicore:ready', onReady)
      cancelAnimationFrame(raf)
    }
  }, [])

  // drive the shared 3D progress from the pinned act's own scroll position
  useEffect(() => {
    let raf = 0
    let v = 0
    const tick = () => {
      const el = actRef.current
      if (el) {
        const r = el.getBoundingClientRect()
        const vh = window.innerHeight
        const span = r.height - vh
        const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0
        // smooth so stops feel damped rather than snapped
        v += (p - v) * 0.12
        gl.act = v
        document.documentElement.style.setProperty('--w', v.toFixed(4))
        const vel = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vel')) || 0
        gl.vel = vel
        // chapter index for other consumers
        gl.chapter = v < 0.26 ? 0 : v < 0.55 ? 1 : v < 0.9 ? 2 : 3
        void sstep
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      <a className="skip-link" href="#journey">
        تخطَّ إلى العرض
      </a>
      <Curtain ready={ready} />
      <Header />
      <ChapterRail />
      <div className="scroll-progress" aria-hidden="true"><i /></div>
      <div className="grain" aria-hidden="true" />

      <main>
        <Hero />

        <div className="act" id="act" ref={actRef}>
          <div className="canvas-slot" aria-hidden="true">
            <Suspense fallback={null}>
              <Stage onReady={() => setReady(true)} onHotspots={setHotspotsOn} />
            </Suspense>
            <div className="canvas-vignette" />
            <div className="canvas-scan" />
          </div>
          <Journey hotspotsOn={hotspotsOn} />
        </div>

        <Products />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
