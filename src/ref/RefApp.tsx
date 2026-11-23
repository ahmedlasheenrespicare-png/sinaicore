import { Suspense, lazy, useEffect, useState } from 'react'
import { Icon } from './icons'
import PanAct from './PanAct'
import {
  nav,
  pillars,
  products,
  qualityTiles,
  standards,
  labReports,
  logistics,
  ports,
  destinations,
  steps,
  offices,
  contact,
} from './content'

const ModelStage = lazy(() => import('./Stage'))

function Plate({
  kind,
  dark,
  camera,
  tag,
  hint,
  className = '',
  shadowsAt,
}: {
  kind: 'container' | 'crystal' | 'tablets' | 'fibc' | 'sack' | 'globe' | 'jar'
  dark?: boolean
  camera?: { position: [number, number, number]; fov?: number }
  tag?: string
  hint?: string
  className?: string
  shadowsAt?: number
}) {
  return (
    <div className={`ref-feature-stage ${dark ? 'dark' : ''} ${className}`}>
      {tag && <span className="tag mono">{tag}</span>}
      {hint && <span className="hint mono">{hint}</span>}
      <Suspense fallback={null}>
        <ModelStage kind={kind} dark={dark} camera={camera} shadowsAt={shadowsAt} />
      </Suspense>
    </div>
  )
}

export default function RefApp() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setOn(true), 60)
    document.body.classList.add('is-ref-page')
    return () => {
      clearTimeout(t)
      document.body.classList.remove('is-ref-page')
    }
  }, [])

  /* one restrained reveal for the whole document: the section heads and the
     figure rows rise 12px, once. Nothing else moves except the plates' slow
     zoom on hover. */
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.ref-sec-head, .ref-feature, .ref-product, .ref-port'),
    )
    els.forEach((e) => e.classList.add('craft-rise'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (list) => {
        for (const e of list) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      /* threshold 0 + a small negative margin: a tall figure row is taller
         than the viewport, so a percentage threshold would never fire */
      { rootMargin: '0px 0px -6% 0px', threshold: 0 },
    )
    els.forEach((e) => io.observe(e))
    /* safety net: anything still hidden after a fast jump is shown */
    const t = setTimeout(() => {
      els.forEach((e) => {
        if (!e.classList.contains('in')) {
          const r = e.getBoundingClientRect()
          if (r.top < window.innerHeight && r.bottom > 0) e.classList.add('in')
        }
      })
    }, 1800)
    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <div className={`ref ${on ? 'is-on' : ''}`} id="top">
      {/* ------------------------------------------------------- nav */}
      <nav className="ref-nav" aria-label="التنقل الرئيسي">
        <div className="ref-shell ref-nav-in">
          <a className="ref-lockup" href="#top" aria-label="SinaiCore">
            <img className="ref-lockup-full" src="/brand/logo-header.png" alt="SinaiCore — At the Core of Quality and Purity" />
          </a>
          <ul className="ref-menu">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>
                  <span className="mono">{n.lat}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ref-nav-right">
            <div className="ref-lang" aria-hidden="true">
              <span className="on">ع</span>
              <span>EN</span>
            </div>
            <a className="ref-btn" href="#quote">
              <Icon name="doc" size={16} />
              اطلب عرض سعر
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ------------------------------------------------------ hero */}
        <section className="ref-hero" aria-label="حلول تصدير الملح المصري">
          <div className="ref-hero-bg" aria-hidden="true" />
          <div className="ref-hero-fade" aria-hidden="true" />
          <div className="ref-shell ref-hero-in">
            <div>
              <span className="ref-eyebrow">حلول تصدير الملح المصري</span>
              <h1 className="ref-h1">
                إمداد موثوق من شمال سيناء
                <em>إلى الأسواق العالمية</em>
              </h1>
              <p>
                حلول ملح مصري متميزة من شمال سيناء — تحقّق جودة مستقل، وتعبئة احترافية،
                وتصدير إلى العملاء حول العالم.
              </p>
              <div className="ref-hero-cta">
                <a className="ref-btn" href="#products">
                  <Icon name="box" size={16} />
                  استعرض المنتجات
                </a>
                <a className="ref-btn blue" href="#quote">
                  اطلب عرض سعر
                </a>
              </div>
            </div>

            {/* the reference puts its hero logo here; ours is the exported box */}
            <div className="ref-hero-stage">
              <Suspense fallback={null}>
                <ModelStage
                  kind="container"
                  dark
                  camera={{ position: [4.9, 2.9, 5.4], fov: 32 }}
                  shadowsAt={-1.28}
                />
              </Suspense>
              <span className="ref-hero-plate mono">20 / 40 FT · FOB ARISH / SUEZ</span>
            </div>
          </div>
        </section>

        {/* ---------------------------------------- the aerial salt-pan act */}
        <PanAct />

        {/* --------------------------------------------------- pillars */}
        <section className="ref-sec on-light" id="company">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">WHY SINAICORE?</span>
              <h2>ثلاث ركائز للثقة</h2>
              <p>التزامنا بالتميّز في كل مرحلة من سلسلة توريد ملح البحر.</p>
            </div>
            <div className="ref-grid-3">
              {pillars.map((p) => (
                <article className="ref-card" key={p.n}>
                  <span className="num mono">{p.n}</span>
                  <span className="ref-icon">
                    <Icon name={p.icon} size={24} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  {p.list && (
                    <ul className="ref-list">
                      {p.list.map((l) => (
                        <li key={l}>
                          <Icon name="check" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------- product band + cards */}
        <div className="ref-band copper" aria-hidden="true">
          <div className="ref-shell">
            <h2>Salt Solutions for Global Markets</h2>
            <p>محلول الملح للغذاء والصناعة ومعالجة المياه وصيانة الشتاء والاستخدام التجاري</p>
          </div>
        </div>

        <section className="ref-sec on-gray" id="products">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">PRODUCTS</span>
              <h2>محفظة منتجات ملح سيناء</h2>
              <p>
                تُستمد محفظة SinaiCore من منتجين مؤهلين في شمال سيناء، وتُدار عبر معالجة
                وتحقق جودة وتعبئة وإجراءات تصدير منسّقة لتلائم مواصفات العملاء في الأسواق
                الدولية.
              </p>
            </div>
            <div className="ref-products">
              {products.map((p) => (
                <article className="ref-product" key={p.id}>
                  <div className="ref-product-media">
                    <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
                    <span className="ref-chip">{p.chip}</span>
                  </div>
                  <div className="ref-product-body">
                    <h3>
                      <Icon name="crystal" size={18} />
                      {p.title}
                    </h3>
                    <p>{p.body}</p>
                    <div className="ref-spec">
                      <b>المواصفات النموذجية:</b>
                      <dl>
                        <div>
                          <dt>نقاء NaCl</dt>
                          <dd>{p.nacl}</dd>
                        </div>
                        <div>
                          <dt>الرطوبة</dt>
                          <dd>{p.moisture}</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="ref-product-actions">
                      <a className="ref-btn blue sm" href="#quality">
                        المواصفات الفنية
                      </a>
                      <a className="ref-btn sm" href="#quote">
                        اطلب COA و TDS
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------- quality + 3D row */}
        <div className="ref-band navy" aria-hidden="true">
          <div className="ref-shell">
            <h2>Quality Assurance</h2>
            <p>مراقبة من المصدر إلى الشحنة</p>
          </div>
        </div>

        <section className="ref-sec on-light" id="quality">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">Quality · Batch by Batch</span>
              <h2>كل دفعة تُختبر قبل أن تُشحن</h2>
              <p>
                يُحصَد ملحنا البحري عبر التبخير الشمسي الطبيعي، ويُراقَب بإجراءات ضبط جودة
                منظمة في كل مرحلة — من الاستخراج حتى تحميل التصدير النهائي. تخضع كل دفعة
                لتحليل كيميائي وفيزيائي دقيق، بدعم من تحقق مختبري مستقل عند الحاجة.
              </p>
            </div>

            <div className="ref-feature" style={{ marginBlockEnd: 'clamp(1.6rem,3vw,2.4rem)' }}>
              <Plate
                kind="crystal"
                tag="HALITE · NORTH SINAI"
                hint="3D · crystal.glb"
                camera={{ position: [3.4, 2.3, 3.9], fov: 33 }}
                shadowsAt={-0.86}
              />
              <div className="ref-feature-copy">
                <h3>من بلورة الهاليت إلى شكارة مُختومة</h3>
                <p>
                  رحلة سيناء: بلورة هاليت من الملاحات، فطحن وتدريج، فأقراص مطرية، ثم شكائر
                  ٥٠ كجم وشكائر جامبو ١.٥ طن تُختم للتصدير.
                </p>
                <ul className="ref-facts">
                  <li>
                    <span>PURITY</span>
                    <b>NaCl ≥ 99.5%</b>
                  </li>
                  <li>
                    <span>MOISTURE</span>
                    <b>≤ 0.2%</b>
                  </li>
                  <li>
                    <span>BATCH</span>
                    <b>مُتتبَّع بالكامل</b>
                  </li>
                </ul>
                <a className="ref-btn" href="#quote">
                  اطلب شهادة تحليل
                </a>
              </div>
            </div>

            <div className="ref-grid-4">
              {qualityTiles.map((q) => (
                <article className="ref-tile" key={q.title}>
                  <span className="ref-icon blue">
                    <Icon name={q.icon} size={22} />
                  </span>
                  <h4>{q.title}</h4>
                  <p>{q.body}</p>
                </article>
              ))}
            </div>

            <div className="ref-standards">
              {standards.map((s) => (
                <div className="ref-standard" key={s.k}>
                  <b>{s.k}</b>
                  <span>{s.v}</span>
                </div>
              ))}
            </div>

            <p className="ref-report-note">
              يمكن دعم كل دفعة بشهادة تحليل صادرة أو موثقة من مختبر مستقل من طرف ثالث،
              وفق المتطلبات التعاقدية. تُتاح تقارير مختبر Intertek المستقلة للمراجعة.
            </p>

            <div className="ref-grid-3" style={{ marginBlockStart: '1.1rem' }}>
              {labReports.map((r) => (
                <article className="ref-card" key={r}>
                  <span className="ref-icon soft">
                    <Icon name="doc" size={22} />
                  </span>
                  <h3>{r}</h3>
                  <p>تقرير اختبار مختبري مستقل — Intertek.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------- packaging + ports */}
        <div className="ref-band copper" aria-hidden="true">
          <div className="ref-shell">
            <h2>Packaging &amp; Logistics</h2>
            <p>هندسة كفاءة التصدير</p>
          </div>
        </div>

        <section className="ref-sec on-gray" id="logistics">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">Logistics · Port to Port</span>
              <h2>من الملّاحة إلى بوليصة الشحن</h2>
              <p>
                عمليات لوجستية منظمة تدعم المشترين الصناعيين حول العالم. من الشحنات المعبأة
                إلى تحميل السفن السائبة، نضمن إجراءات محسّنة وشروط Incoterms مرنة وتوثيقًا
                كاملًا.
              </p>
            </div>

            <div className="ref-feature" style={{ marginBlockEnd: 'clamp(1.6rem,3vw,2.4rem)' }}>
              <Plate
                kind="sack"
                tag="50 KG · PRINTED SACK"
                hint="3D · sack-50kg.glb · real print"
                camera={{ position: [2.0, 1.25, 3.0], fov: 32 }}
                shadowsAt={-0.68}
              />
              <div className="ref-feature-copy">
                <h3>شكارة ٥٠ كجم مطبوعة، جاهزة للتحميل</h3>
                <p>
                  نفس الشكارة الموجودة في صورة المنتج: قماش PP أبيض بجسم مسطّح وقدم متسعة
                  وختم رأس مطويّ ملحوم، وطبعة زرقاء كاملة — شعار الجبل والبلور، السطر
                  التعريفي، أربع شارات ضمان، ثم وزن ٥٠ كجم و«صناعة مصر».
                </p>
                <ul className="ref-facts">
                  <li>
                    <span>FIBC</span>
                    <b>1 – 1.5 MT</b>
                  </li>
                  <li>
                    <span>BAGS</span>
                    <b>25 / 50 kg</b>
                  </li>
                  <li>
                    <span>MODE</span>
                    <b>20 / 40 FT</b>
                  </li>
                </ul>
                <a className="ref-btn blue" href="#quote">
                  اطلب مواصفات التعبئة
                </a>
              </div>
            </div>

            <div className="ref-logi">
              {logistics.map((l) => (
                <article className="ref-product" key={l.title}>
                  <div className="ref-product-media">
                    <img src={l.image} alt={l.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="ref-product-body">
                    <h3>
                      <Icon name={l.icon} size={18} />
                      {l.title}
                    </h3>
                    <p>{l.body}</p>
                  </div>
                </article>
              ))}

              <article className="ref-card">
                <span className="ref-icon soft">
                  <Icon name="ship" size={22} />
                </span>
                <h3>شروط الشحن وخيارات التعاقد</h3>
                <p>FOB من موانئ مصرية استراتيجية.</p>
                <div style={{ display: 'grid', gap: '0.8rem', marginBlockStart: '0.9rem' }}>
                  {ports.map((p) => (
                    <div className={`ref-port ${p.tone}`} key={p.id}>
                      <div>
                        <h4>{p.title}</h4>
                        <p className="sub">{p.sub}</p>
                      </div>
                      <ul>
                        {p.rows.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                      {p.tagsLabel && <p className="sub">{p.tagsLabel}</p>}
                      <div className="ref-tags">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ marginBlockStart: '0.9rem', fontSize: '0.78rem' }}>
                  جميع الشحنات تخضع لشروط العقد القياسية. تُطبَّق Incoterms وفق أحدث قواعد
                  غرفة التجارة الدولية (ICC).
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ global reach */}
        <section className="ref-sec on-light" aria-labelledby="global-reach-heading">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">Global Presence</span>
              <h2 id="global-reach-heading">نورّد للصناعات حول العالم</h2>
              <p>
                من شمال سيناء إلى كل قارة — تصل منتجات ملح SinaiCore إلى عملاء في الأسواق
                العالمية.
              </p>
            </div>
            <div className="ref-globe">
              <Suspense fallback={null}>
                <ModelStage kind="globe" dark camera={{ position: [0, 0.35, 4.2], fov: 33 }} />
              </Suspense>
              <div className="ref-globe-dest mono">
                {destinations.map((d) => (
                  <span key={d.en} dir="ltr">
                    <b>EGY</b> · {d.en}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------- how it works */}
        <section className="ref-sec on-gray">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">How It Works</span>
              <h2>كن شريكًا لـ SinaiCore</h2>
              <p>عملية بسيطة وشفافة من الاستفسار إلى التسليم.</p>
            </div>
            <div className="ref-steps">
              {steps.map((s) => (
                <article className="ref-step" key={s.n}>
                  <span className="n">{s.n}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ quote */}
        <section className="ref-sec on-light" id="quote">
          <div className="ref-shell">
            <div className="ref-feature flip">
              <div className="ref-feature-copy">
                <span className="over mono" style={{ color: 'var(--ref-copper)', letterSpacing: '0.2em', fontSize: '0.62rem' }}>
                  REQUEST A QUOTE
                </span>
                <h3 style={{ marginBlockStart: '0.5rem' }}>عينتك جاهزة للمختبر</h3>
                <p>
                  نرسل العينة مع شهادة تحليل كاملة قبل أي التزام. اطلب عرض سعر أو عينة من
                  فريق التصدير مباشرة.
                </p>
                <ul className="ref-facts">
                  <li>
                    <span>EMAIL</span>
                    <b style={{ direction: 'ltr' }}>{contact.email}</b>
                  </li>
                  <li>
                    <span>PHONE</span>
                    <b style={{ direction: 'ltr' }}>{contact.phone}</b>
                  </li>
                </ul>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <a className="ref-btn" href={`mailto:${contact.email}`}>
                    <Icon name="mail" size={16} />
                    راسلنا
                  </a>
                  <a className="ref-btn ghost" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                    <Icon name="phone" size={16} />
                    اتصل الآن
                  </a>
                </div>
              </div>
              <Plate
                kind="jar"
                tag="LAB SAMPLE"
                hint="3D · sample-jar.glb"
                camera={{ position: [1.5, 1.1, 2.1], fov: 32 }}
                shadowsAt={-0.46}
              />
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------- footer */}
      <footer className="ref-foot" id="contact">
        <div className="ref-shell">
          <div className="ref-foot-grid">
            <div>
              <img className="ref-foot-logo" src="/brand/logo-header-reverse.png" alt="SinaiCore" />
              <p style={{ marginBlockStart: '0.9rem', maxWidth: '26rem' }}>
                SinaiCore for Salts &amp; Minerals — مُصدّر ملح مصري ينسّق التوريد المؤهل
                والتحقق من الجودة والتعبئة والتوثيق واللوجستيات للأسواق العالمية.
              </p>
              <div style={{ display: 'grid', gap: '0.4rem', marginBlockStart: '1rem' }}>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} style={{ direction: 'ltr' }}>
                  {contact.phone}
                </a>
              </div>
            </div>
            {offices.map((o) => (
              <div key={o.title}>
                <h5>{o.title}</h5>
                <p style={{ margin: 0 }}>
                  {o.lines.map((l) => (
                    <span key={l} style={{ display: 'block' }}>
                      {l}
                    </span>
                  ))}
                </p>
              </div>
            ))}
            <div>
              <h5>روابط سريعة</h5>
              <ul>
                <li>
                  <a href="#products">كتالوج المنتجات</a>
                </li>
                <li>
                  <a href="#company">ملف الشركة</a>
                </li>
                <li>
                  <a href="#quote">طلب عرض سعر</a>
                </li>
                <li>
                  <a href="#contact">تواصل معنا</a>
                </li>
                <li>
                  <a className="ref-switch" href="/notes.html" style={{ marginBlockStart: '0.6rem' }}>
                    ملاحظات الميدان · EDITORIAL CUT
                  </a>
                </li>
                <li>
                  <a className="ref-switch" href="/alt.html">
                    النسخة البديلة · CONTAINER CUT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ref-foot-bottom">
            <span>© 2026 SinaiCore for Salts &amp; Minerals. جميع الحقوق محفوظة.</span>
            <span style={{ direction: 'ltr' }}>{contact.site}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
