import { useEffect, useRef } from 'react'
import { gl } from '../three/state'
import { chapters, hotspots, packaging, ports, destinations, specs } from '../data/content'

/**
 * The pinned act: one sticky viewport that the four chapters scroll through.
 * Nothing here animates in JS — progress lives in CSS vars written by the
 * journal, so the WebGL layer and typography share one clock.
 */
export default function Journey({ hotspotsOn }: { hotspotsOn: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  // Map the shared scroll progress onto which chapter panel is live.
  useEffect(() => {
    let raf = 0
    let last = ''
    const tick = () => {
      const a = gl.act
      const id = a < 0.21 ? 'crystal' : a < 0.55 ? 'purity' : a < 0.9 ? 'packing' : 'export'
      if (id !== last && ref.current) {
        last = id
        ref.current.dataset.live = id
        window.dispatchEvent(new CustomEvent('sinaicore:chapter', { detail: id }))
        // let the panels' CSS transitions know where they are in the dwell
        ref.current.style.setProperty('--enter', '0')
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="journey" id="journey" ref={ref}>
      <div className="journey-sticky">
        {/* ---------------------------------------------------------- 01 */}
        <section className="panel p-crystal" id="crystal" data-chapter="0">
          <div className="panel-copy">
            <header className="panel-head">
              <span className="panel-num mono">01</span>
              <span className="kicker">THE RAW CRYSTAL</span>
            </header>
            <h2 className="h-scene">
              بلورة هاليت
              <br />
              من قلب سيناء
            </h2>
            <p className="lead">
              نظام بلوري مكعبي تشكّل تحت ضغط البحر قبل ملايين السنين. نستخرجه من الطبقات
              الملحية في وسط سيناء، ثم نغسله ونعاود بلورته لنحصل على حبيبة نقية، بيضاء،
              وخالية من الشوائب.
            </p>
            <dl className="facts">
              <div>
                <dt className="mono">SYSTEM</dt>
                <dd>Cubic · Fm3m</dd>
              </div>
              <div>
                <dt className="mono">PURITY</dt>
                <dd>99.5% NaCl</dd>
              </div>
              <div>
                <dt className="mono">ORIGIN</dt>
                <dd>وسط سيناء</dd>
              </div>
            </dl>
          </div>
          <div className="panel-note">
            <div className="rotate-hint">
              <svg width="26" height="26" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                <path d="M27 17a10 10 0 1 1-3.2-7.3" stroke="currentColor" strokeWidth="1" />
                <path d="M24 5.5 24.5 11l-5.4-.8" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span>يتبع دورانك</span>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- 02 */}
        <section className="panel p-purity" id="purity" data-chapter="1">
          <div className="panel-copy">
            <header className="panel-head">
              <span className="panel-num mono">02</span>
              <span className="kicker">PURITY · PROCESSING</span>
            </header>
            <h2 className="h-scene">
              من الحبيبة
              <br />
              إلى قرص التطرية
            </h2>
            <p className="lead">
              نضغط الملح المعالج في أقراص أسطوانية متجانسة تُستخدم في وحدات تطرية المياه
              المنزلية والصناعية. كل قرص يحمل مواصفة ثابتة: مقاس، صلادة، وسرعة ذوبان متوقّعة.
            </p>

            <div className="hotspot-list" role="list">
              {hotspots.map((h, i) => (
                <div className="hs-row" role="listitem" key={h.id} style={{ '--d': `${i * 55}ms` } as React.CSSProperties}>
                  <span className="hs-val ar-num">{h.value}</span>
                  <span className="hs-txt">
                    <b>{h.label}</b>
                    <i className="mono">{h.sub}</i>
                  </span>
                  <span className="hs-meter" aria-hidden="true">
                    <i style={{ '--m': `${h.metric}%` } as React.CSSProperties} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-note">
            <span className="note-tag">NaCl 99.5%</span>
            <span className="mono panel-counter">02 / 04</span>
          </div>
        </section>

        {/* ---------------------------------------------------------- 03 */}
        <section className="panel p-packing" id="packing" data-chapter="2">
          <div className="panel-copy">
            <header className="panel-head">
              <span className="panel-num mono">03</span>
              <span className="kicker">PACKING · FIBC 1 MT</span>
            </header>
            <h2 className="h-scene">{packaging.title}</h2>
            <p className="lead">{packaging.features[0]} كل شكارة تُخاط وتُرقّم قبل أن تغادر خط التعبئة.</p>

            <div className="spec-table">
              {packaging.rows.map((r) => (
                <div className="spec-row" key={r.k}>
                  <span>{r.k}</span>
                  <i aria-hidden="true" />
                  <b className="mono">{r.v}</b>
                </div>
              ))}
            </div>

            <ul className="pack-feats">
              {packaging.features.slice(1).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="panel-note">
            <span className="note-tag">{packaging.titleLat}</span>
            <span className="mono panel-counter">03 / 04</span>
          </div>
        </section>

        {/* ---------------------------------------------------------- 04 */}
        <section className="panel p-export" id="export" data-chapter="3">
          <div className="panel-copy">
            <header className="panel-head">
              <span className="panel-num mono">04</span>
              <span className="kicker">EXPORT ROUTES</span>
            </header>
            <h2 className="h-scene">
              من العريش
              <br />
              إلى العالم
            </h2>
            <p className="lead">
              ننقل الشحنة براً إلى ميناء العريش على المتوسط، أو عبر السويس إلى البحر الأحمر.
              خطوط مباشرة إلى أوروبا وآسيا وأفريقيا والأمريكتين.
            </p>

            <div className="ports">
              {ports.map((p) => (
                <div className="port" key={p.id}>
                  <span className="port-dot" aria-hidden="true" />
                  <div>
                    <b>{p.name}</b>
                    <i className="mono">{p.nameLat} · {p.coords}</i>
                  </div>
                  <span className="port-role">{p.role}</span>
                </div>
              ))}
            </div>

            <div className="dest-marquee" aria-label="أسواق التصدير">
              <div className="dest-track">
                {[...destinations, ...destinations].map((d, i) => (
                  <span key={`${d.id}-${i}`} className="dest">
                    <b>{d.name}</b>
                    <i className="mono">{d.nameLat}</i>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="panel-note">
            <span className="note-tag">10+ MARKETS</span>
            <span className="mono panel-counter">04 / 04</span>
          </div>
        </section>

        {/* hotspot dots over the 3D tablets */}
        <HotspotOverlay visible={hotspotsOn} />
      </div>

      {/* scroll budget: one viewport per chapter */}
      <div className="journey-track" aria-hidden="true" />

      <div className="panel-strip sr-only">
        {chapters.map((c) => (
          <p key={c.id}>
            {c.index} — {c.labelAr}
          </p>
        ))}
      </div>
    </div>
  )
}

/** Anchored markers on the tablets — the values themselves live in the list. */
function HotspotOverlay({ visible }: { visible: boolean }) {
  const dots = [
    { x: 57, y: 39 },
    { x: 64, y: 56 },
    { x: 47, y: 28 },
    { x: 38, y: 47 },
  ]
  return (
    <div className={`hotspots ${visible ? 'is-on' : ''}`} aria-hidden="true">
      {dots.map((d, i) => (
        <span
          className="hotspot"
          key={i}
          style={{ '--x': `${d.x}%`, '--y': `${d.y}%`, '--d': `${i * 260}ms` } as React.CSSProperties}
        >
          <i />
        </span>
      ))}
    </div>
  )
}
