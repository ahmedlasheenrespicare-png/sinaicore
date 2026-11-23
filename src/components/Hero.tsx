import { chapters, stats } from '../data/content'

/**
 * Chapter 00 — the title. Sits above the pinned WebGL act, then hands the
 * stage over to the crystal.
 */
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-grid" />
      </div>

      {/* small screens get a still of the crystal instead of the pinned stage */}
      <div className="hero-poster" aria-hidden="true">
        <img src="/media/halite-poster.png" alt="" width={720} height={720} loading="eager" decoding="async" />
      </div>

      <div className="hero-inner shell">
        <div className="hero-eyebrow">
          <span className="chip">SinaiCore · Halite Division</span>
          <span className="hero-coord mono">31.13° N&nbsp;&nbsp;&nbsp;33.80° E</span>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="line">
              <span>ملح سيناء</span>
            </span>
            <span className="line indent">
              <span>
                بدرجة <em>نقاء</em>
              </span>
            </span>
            <span className="line">
              <span>
                تصنع <b>الصناعة</b>
              </span>
            </span>
          </h1>

          <div className="hero-side">
            <p className="lead hero-lead" data-reveal>
              من رمال وسبخات سيناء الشمالية، نستخرج بلورات الهاليت ونعالجها ونعبّئها في شكائر
              جامبو سعة طن، ثم نشحنها من ميناءي العريش والسويس إلى مصانع المياه والغذاء
              والكيمياء حول العالم.
            </p>

            <ol className="hero-chapters" aria-label="محطات العرض">
              {chapters.map((c, i) => (
                <li key={c.id} style={{ '--d': `${i * 80}ms` } as React.CSSProperties} data-reveal>
                  <a href={`#${c.id}`}>
                    <span className="mono">{c.index}</span>
                    <span className="hc-ar">{c.labelAr}</span>
                    <span className="hc-en mono">{c.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="hero-foot">
          <ul className="hero-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <b className="ar-num">{s.v}</b>
                <em>{s.unit}</em>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <div className="scroll-hint">
            <span className="mono">SCROLL</span>
            <i />
            <span className="scroll-steps mono">01 — 04</span>
          </div>
        </div>
      </div>
    </section>
  )
}
