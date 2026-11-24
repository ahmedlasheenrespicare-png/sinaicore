import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { products, pillars, process, specs, compliance, contact } from '../data/content'

const SampleJar = lazy(() => import('../three/SampleJar'))

/**
 * Station 05 — the jar only mounts when the quote section is close, so the
 * second WebGL context never competes with the scroll act.
 */
function JarStage() {
  const host = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(false)
  useEffect(() => {
    const el = host.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.innerWidth < 760) return
    const io = new IntersectionObserver(
      ([e]) => setLive(e.isIntersecting),
      { rootMargin: '260px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div className="jar-stage" ref={host} aria-hidden="true">
      {live && (
        <Suspense fallback={null}>
          <SampleJar />
        </Suspense>
      )}
      <span className="jar-caption mono">
        <i>05</i> LAB SAMPLE · 500 g · NaCl ≥ 99.5%
      </span>
    </div>
  )
}

/** Product portfolio, five grades exactly as published. */
export function Products() {
  return (
    <section className="products" id="products">
      <div className="shell">
        <header className="sec-head">
          <div>
            <span className="kicker">PRODUCT PORTFOLIO</span>
            <h2 className="h-scene">
              حلول ملح
              <br />
              للأسواق العالمية
            </h2>
          </div>
          <p className="lead">
            محفظة المنتجات تُورَّد من مُنتجين مؤهّلين في سيناء الشمالية وتُدار عبر معالجة
            وتحقّق جودة وتعبئة وإجراءات تصدير مطابقة لمواصفات العميل.
          </p>
        </header>

        <div className="prod-grid">
          {products.map((p, i) => (
            <article className="prod-card" key={p.id} data-reveal style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
              <div className={`prod-media prod-media--${p.id}`}>
                <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
                <span className="prod-tag mono">{p.tagEn}</span>
                <span className="prod-grade mono">{p.grade}</span>
              </div>
              <div className="prod-body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="prod-specs">
                  <span>
                    <em>NaCl</em>
                    <b className="ar-num">{p.nacl}</b>
                  </span>
                  <span>
                    <em>MOISTURE</em>
                    <b className="ar-num">{p.moisture}</b>
                  </span>
                </div>
                <a className="prod-link" href="#contact">
                  اطلب COA &amp; TDS
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M13 8H4M7.5 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                  </svg>
                </a>
              </div>
            </article>
          ))}

          <article className="prod-card prod-card--cta" data-reveal>
            <div className="prod-cta-inner">
              <span className="kicker">CUSTOM SPECIFICATION</span>
              <h3>مقاسك الخاص؟</h3>
              <p>نضبط المقاس الحبيبي ومضادات التكتّل والتعبئة حسب التطبيق.</p>
              <a className="cf-submit" href="#contact">
                <span>تحدّث إلى الفريق</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M13 8H4M7.5 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/** Why SinaiCore — the three published pillars + quality sheet. */
export function Quality() {
  return (
    <section className="quality" id="quality">
      <div className="shell">
        <header className="sec-head">
          <div>
            <span className="kicker">WHY SINAICORE</span>
            <h2 className="h-scene">
              ثلاث ركائز
              <br />
              للثقة
            </h2>
          </div>
          <p className="lead">
            التزامنا يغطي كل مرحلة من سلسلة توريد الملح البحري: المصدر، ضبط التشغيلة،
            والتوثيق حتى لحظة التحميل.
          </p>
        </header>

        <div className="pillars">
          {pillars.map((p, i) => (
            <article className="pillar" key={p.n} data-reveal style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
              <span className="pillar-num mono">{p.n}</span>
              <h3>{p.title}</h3>
              <span className="pillar-en mono">{p.titleEn}</span>
              <p>{p.body}</p>
            </article>
          ))}
        </div>

        <div className="spec-grid">
          <div className="spec-sheet">
            <div className="sheet-head">
              <span className="mono">TECHNICAL SPECIFICATIONS</span>
              <span className="mono">5 GRADES</span>
            </div>
            <div className="sheet-body">
              {specs.map((s, i) => (
                <div className="sheet-row" key={`${s.k}-${i}`}>
                  <span className="sr-key mono">{s.k}</span>
                  <i className="sr-dots" aria-hidden="true" />
                  <b className="ar-num">{s.v}</b>
                  <em className="mono">{s.note}</em>
                </div>
              ))}
            </div>
            <div className="sheet-foot">
              <span>Granulometry per application · anti-caking monitored</span>
              <span className="mono">ISO · ASTM · EN</span>
            </div>
          </div>

          <aside className="lab-note">
            <div className="lab-badge" aria-hidden="true">
              <img src="/brand/logo-mark.png" alt="" width={220} height={120} loading="lazy" decoding="async" />
            </div>
            <h3>من المصدر إلى الشحنة</h3>
            <p>
              يُحصد الملح البحري عبر تبخير شمسي طبيعي، ويُراقَب بإجراءات رقابة منظمة في كل
              مرحلة — من الاستخراج حتى تحميل التصدير. كل تشغيلة تخضع لتحليل كيميائي وفيزيائي.
            </p>
            <ul>
              <li>ضبط النقاء الكيميائي (NaCl)</li>
              <li>تقارير توزيع حجمي بالمناخل</li>
              <li>متابعة الرطوبة ومضادات التكتّل</li>
              <li>تعقّب كامل للتشغيلة</li>
            </ul>
            <div className="compliance">
              {compliance.map((c) => (
                <span key={c.k} className="comp-chip">
                  <b className="mono">{c.k}</b>
                  <em>{c.v}</em>
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="process">
          <h3 className="process-title">
            <span className="kicker">HOW IT WORKS</span>
            من الاستفسار إلى التسليم
          </h3>
          <ol className="process-line">
            {process.map((p, i) => (
              <li className="process-step" key={p.n} data-reveal style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
                <span className="ps-num mono">{p.n}</span>
                <span className="ps-dot" aria-hidden="true" />
                <h4>{p.t}</h4>
                <p>{p.d}</p>
                <span className="ps-tag mono">{p.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="shell contact-inner">
        <div className="contact-copy">
          <span className="kicker">REQUEST A QUOTE · FOB / CIF</span>
          <h2 className="h-display">
            جاهزون
            <br />
            للشحنة القادمة
          </h2>
          <p className="lead">
            أرسل المقاس المطلوب والكمية الشهرية وميناء الوصول، ونرد بعرض سعر ومواصفة
            خلال يوم عمل واحد.
          </p>

          <div className="contact-direct">
            <a href={`mailto:${contact.email}`}>
              <span className="mono">EMAIL</span>
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} dir="ltr">
              <span className="mono">PHONE</span>
              {contact.phone}
            </a>
          </div>

          <div className="offices">
            {contact.offices.map((o) => (
              <div className="office" key={o.id}>
                <span className="office-name">
                  {o.name} <i className="mono">{o.nameEn}</i>
                </span>
                <p>
                  {o.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <JarStage />
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="cf-row">
            <label>
              <span>الشركة</span>
              <input type="text" name="company" placeholder="اسم الشركة" autoComplete="organization" />
            </label>
            <label>
              <span>البريد الإلكتروني</span>
              <input type="email" name="email" placeholder="you@company.com" autoComplete="email" dir="ltr" />
            </label>
          </div>
          <div className="cf-row">
            <label>
              <span>المنتج</span>
              <select name="product" defaultValue="refined">
                <option value="refined">ملح مكرر فاخر — ≥ 99.5%</option>
                <option value="softening">أقراص تطرية المياه — ≥ 99.5%</option>
                <option value="washed">ملح مغسول صناعي — ≥ 98.5%</option>
                <option value="deicing">ملح إذابة الجليد — ≥ 98.0%</option>
                <option value="marine">ملح بحري طبيعي — ≥ 97.0%</option>
              </select>
            </label>
            <label>
              <span>الكمية الشهرية (طن)</span>
              <input type="text" name="qty" placeholder="500" inputMode="numeric" dir="ltr" />
            </label>
          </div>
          <div className="cf-row">
            <label>
              <span>التعبئة</span>
              <select name="packing" defaultValue="jumbo">
                <option value="jumbo">شكائر جامبو ١ – ١.٥ طن</option>
                <option value="50kg">أكياس ٥٠ كجم</option>
                <option value="25kg">أكياس ٢٥ كجم</option>
                <option value="sling">أكياس سلاينج</option>
                <option value="bulk">سائب — سفينة</option>
              </select>
            </label>
            <label>
              <span>ميناء الوصول / الشرط</span>
              <input type="text" name="port" placeholder="FOB Arish" dir="ltr" />
            </label>
          </div>
          <label>
            <span>تفاصيل إضافية</span>
            <textarea name="notes" rows={3} placeholder="المقاس الحبيبي، متطلبات COA، جدول الشحن…" />
          </label>
          <button type="submit" className="cf-submit">
            <span>إرسال الطلب</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H4M7.5 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
            </svg>
          </button>
          <p className="cf-note mono">NO SPAM · RESPONSE WITHIN 1 BUSINESS DAY</p>
        </form>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/brand/logo-header-reverse.png" alt="SinaiCore" width={260} height={38} loading="lazy" decoding="async" />
            <p>SinaiCore for Salts &amp; Minerals — An Egyptian salt exporter coordinating qualified sourcing, quality verification, packaging, documentation, and logistics for global markets.</p>
          </div>
          <nav className="footer-nav" aria-label="روابط التذييل">
            <a href="#crystal">المصدر</a>
            <a href="#purity">النقاء</a>
            <a href="#packing">التعبئة</a>
            <a href="#export">التصدير</a>
            <a href="#products">المنتجات</a>
            <a href="#quality">المواصفات</a>
            <a href="#contact">تواصل</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="mono">© 2026 SINAI CORE · NORTH SINAI, EGYPT</span>
          <span className="mono">info@sinaicore.com · +20 110 753 9914</span>
          <span className="mono">FOB ARISH · SUEZ</span>
        </div>
      </div>
    </footer>
  )
}
