import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { pan } from './PanScene'
import { panBeats } from './content'

const PanScene = lazy(() => import('./PanScene'))

/**
 * A pinned act inside the reference cut.
 *
 * The camera falls out of the sky onto the salt pans, a block of crystallised
 * salt is cut out, washed and graded in the air, then the grains stream into
 * the export sack. Progress is damped on the DOM thread and read by the 3D
 * layer through `pan`, so scrolling never triggers a React render of the scene.
 */
export default function PanAct() {
  const host = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(0)
  const [ready, setReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [near, setNear] = useState(false)
  const onReady = useCallback(() => setReady(true), [])

  // the canvas is only created once the act is nearly on screen, and the
  // render loop stops again as soon as it leaves
  useEffect(() => {
    const el = host.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        setNear(e.isIntersecting)
        if (e.isIntersecting) setMounted(true)
      },
      { rootMargin: '400px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    let raf = 0
    let v = 0
    let prev = performance.now()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - prev) / 1000)
      prev = now
      const el = host.current
      if (el) {
        const r = el.getBoundingClientRect()
        const span = r.height - window.innerHeight
        const target = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0
        v += (target - v) * (1 - Math.exp(-(reduced ? 60 : 9) * dt))
        pan.p = v
        const idx = v < 0.18 ? 0 : v < 0.44 ? 1 : v < 0.72 ? 2 : 3
        setLive((cur) => (cur === idx ? cur : idx))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="ref-pan" ref={host} aria-labelledby="pan-title">
      <div className="ref-pan-sticky">
        <div className={`ref-pan-canvas ${ready ? 'is-ready' : ''}`}>
          {mounted && (
            <Suspense fallback={null}>
              <PanScene onReady={onReady} active={near} />
            </Suspense>
          )}
        </div>
        <div className="ref-pan-scrim" aria-hidden="true" />

        <div className="ref-shell ref-pan-copy">
          {panBeats.map((b, i) => (
            <article key={b.id} className={`ref-pan-beat ${live === i ? 'is-live' : ''}`}>
              <span className="ref-pan-kicker mono">{b.kicker}</span>
              <h3 id={i === 0 ? 'pan-title' : undefined}>
                {b.title.split('\n').map((l, k) => (
                  <span key={k}>{l}</span>
                ))}
              </h3>
              <p>{b.body}</p>
              <ul className="ref-pan-facts">
                {b.facts.map((f) => (
                  <li key={f.k}>
                    <span className="mono">{f.k}</span>
                    <b>{f.v}</b>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <ol className="ref-pan-rail" aria-label="مراحل المشهد">
          {panBeats.map((b, i) => (
            <li key={b.id} className={live === i ? 'is-on' : ''}>
              <span className="mono">{b.n}</span>
              <i>{b.tag}</i>
            </li>
          ))}
        </ol>

        <div className="ref-pan-bar" aria-hidden="true">
          <span className="mono">31.13° N · 33.80° E</span>
          <i />
          <b>{panBeats[live].kicker}</b>
        </div>
      </div>
    </section>
  )
}
