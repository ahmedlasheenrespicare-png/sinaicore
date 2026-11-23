import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { gl } from '../three/state'
import { stops, seaPorts, seaRoutes } from './content'

const AltStage = lazy(() => import('./Stage'))

/**
 * Alternate cut — the container is the hero.
 *
 * A standalone page (/alt.html) so the approved five-station experience keeps
 * running untouched. Same identity, same type, same palette.
 */
export default function AltApp() {
  const actRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [live, setLive] = useState(0)
  const [act, setAct] = useState(0)
  const [boot, setBoot] = useState(true)

  /* scroll → shared 3D progress (frame-rate independent damping) */
  useEffect(() => {
    let raf = 0
    let v = 0
    let prev = performance.now()
    const tick = () => {
      const now = performance.now()
      const dt = Math.min(0.1, (now - prev) / 1000)
      prev = now
      const el = actRef.current
      if (el) {
        const r = el.getBoundingClientRect()
        const span = r.height - window.innerHeight
        const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0
        v += (p - v) * (1 - Math.exp(-9 * dt))
        gl.act = v
        const idx = v < 0.14 ? 0 : v < 0.42 ? 1 : v < 0.66 ? 2 : 3
        setLive((cur) => (cur === idx ? cur : idx))
        setAct((cur) => (Math.abs(cur - v) > 0.004 ? v : cur))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onPointer = (e: PointerEvent) => {
      gl.px = (e.clientX / window.innerWidth) * 2 - 1
      gl.py = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', onPointer, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])

  useEffect(() => {
    document.body.classList.add('is-alt')
    return () => document.body.classList.remove('is-alt')
  }, [])

  const onReady = useCallback(() => setReady(true), [])

  useEffect(() => {
    if (!ready) return
    const t = setTimeout(() => setBoot(false), 520)
    return () => clearTimeout(t)
  }, [ready])

  return (
    <div className={`alt ${boot ? 'is-booting' : ''}`}>
      <header className="alt-header">
        <a className="alt-brand" href="/" aria-label="SinaiCore">
          <img src="/brand/logo-header-reverse.png" alt="SinaiCore — At the Core of Quality and Purity" />
        </a>
        <div className="alt-header-right">
          <span className="alt-tag mono">ALT CUT · CONTAINER LOADING</span>
          <a className="alt-cta" href="/">
            <span>العودة للتصميم الأساسي</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
            </svg>
          </a>
        </div>
      </header>

      {/* the hero: one pinned stage, four stops */}
      <div className="alt-act" id="act" ref={actRef}>
        <div className="alt-sticky">
          {boot && (
            <div className="alt-curtain">
              <img src="/brand/logo-mark.png" alt="" />
              <span className="mono">CONTAINER CUT · LOADING SCENE</span>
            </div>
          )}
          <Suspense fallback={null}>
            <AltStage onReady={onReady} />
          </Suspense>
          <div className="alt-vignette" aria-hidden="true" />
          <div className="alt-grid" aria-hidden="true" />
        <div className="alt-copy">
          {stops.map((s, i) => (
            <section key={s.id} className={`alt-stop ${live === i ? 'is-live' : ''}`} data-i={i}>
              <header className="alt-stop-head">
                <span className="alt-num mono">{s.index}</span>
                <span className="alt-kicker mono">{s.labelLat}</span>
              </header>
              <h2 className="alt-title">
                {s.title.split('\n').map((l, k) => (
                  <span key={k}>{l}</span>
                ))}
              </h2>
              <p className="alt-body">{s.body}</p>
              <dl className="alt-facts">
                {s.facts.map((f) => (
                  <div key={f.k}>
                    <dt className="mono">{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        {/* live readout: volume filled, doors, seal */}
        <div className="alt-hud mono" aria-hidden="true">
          <span className="hud-item">
            <i>FILL</i>
            <b>{Math.round(Math.min(1, Math.max(0, (act - 0.14) / 0.3)) * 100)}%</b>
          </span>
          <span className={`hud-item ${act > 0.5 ? 'is-on' : ''}`}>
            <i>DOORS</i>
            <b>{act > 0.5 ? 'LOCKED' : 'OPEN'}</b>
          </span>
          <span className={`hud-item ${act > 0.57 ? 'is-on' : ''}`}>
            <i>SEAL</i>
            <b>{act > 0.57 ? 'STAMPED' : '—'}</b>
          </span>
          <span className={`hud-item ${act > 0.8 ? 'is-on' : ''}`}>
            <i>VOYAGE</i>
            <b>{act > 0.8 ? 'FOB ARISH' : 'AT BERTH'}</b>
          </span>
        </div>

        <ol className="alt-rail" aria-label="مراحل التحميل">
          {stops.map((s, i) => (
            <li key={s.id} className={live === i ? 'is-active' : ''}>
              <span className="mono">{s.index}</span>
              <span className="alt-rail-label">{s.label}</span>
            </li>
          ))}
        </ol>
        </div>
      </div>

      {/* below the act: the port table */}
      <section className="alt-ports">
        <div className="alt-shell">
          <header className="alt-ports-head">
            <span className="alt-kicker mono">FOB ARISH · SUEZ / PORT SAID EAST</span>
            <h2>خطوط الإبحار من سيناء</h2>
            <p>
              تُحمّل الشحنة من ميناء العريش للسوائب والسفن المستأجرة، أو من السويس وشرق بورسعيد
              التفريعة للحاويات ٢٠ و٤٠ قدم. الجداول تقديرية وتُثبّت في عرض السعر.
            </p>
          </header>
          <div className="alt-port-grid">
            {seaPorts.map((p) => (
              <div key={p.id} className="alt-port-card">
                <span className="mono">{p.lat}</span>
                <b>{p.name}</b>
                <i>{p.lat0}° N · {p.lon}° E</i>
              </div>
            ))}
          </div>
          <div className="alt-route-list">
            {seaRoutes.map((r) => (
              <div key={r.id} className="alt-route">
                <b>{r.name}</b>
                <i className="mono">{r.nameLat}</i>
                <span className="alt-route-days mono">{r.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="alt-footer">
        <img src="/brand/logo-header-reverse.png" alt="SinaiCore" />
        <span className="mono">ALT CUT · CONTAINER · 20 / 40 FT · FOB ARISH / SUEZ</span>
      </footer>

      <div className="alt-progress" aria-hidden="true">
        <i style={{ transform: `scaleY(${Math.max(0.02, act)})` }} />
      </div>
    </div>
  )
}
