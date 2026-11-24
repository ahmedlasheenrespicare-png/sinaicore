import { Suspense, lazy, useEffect, useRef, useState } from 'react'
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
  grades,
  applications,
  faqs,
  chapters,
  loadStops,
  seaRoutes,
  packings,
  contact,
} from './content'

const ModelStage = lazy(() => import('./Stage'))

/* Cells that are pure Latin/number need an explicit LTR run, otherwise the
   RTL paragraph reorders "25 / 50 kg · FIBC" into nonsense. Cells that are
   already Arabic must keep the Arabic face — and the serif-numeral treatment
   must not be applied to them. Deciding per string beats a per-row flag that
   would silently rot as the table is edited. */
const isLatin = (t: string) => !/[\u0600-\u06FF]/.test(t)

/* One prose block. The chapter copy was written for a reading column with
   figures and margin notes; it is rendered here in the reference's own
   type, not by importing the other cut's stylesheet — the words travel,
   the design does not. */
function NoteBlock({ b }: { b: (typeof chapters)[number]['blocks'][number] }) {
  switch (b.kind) {
    case 'p':
      /* no drop capital: ::first-letter on Arabic takes the first two
         glyphs (the letter plus its initial form) and floats them out of
         the line, which reads as a stray mark. Latin lets you set an
         initial; Arabic does not work that way. */
      return <p>{b.text}</p>
    case 'note':
      return (
        <aside className="nt-note">
          <span className="n mono">{b.n}</span>
          <b>{b.title}</b>
          <span>{b.text}</span>
        </aside>
      )
    case 'quote':
      return (
        <blockquote className="nt-quote">
          <p>{b.text}</p>
          <cite>{b.cite}</cite>
        </blockquote>
      )
    case 'rows':
      return (
        <dl className="nt-rows">
          <dt>{b.title}</dt>
          {b.rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      )
    case 'fig':
      return (
        <figure className="nt-fig">
          <div className="frame" style={b.ratio ? { aspectRatio: b.ratio } : undefined}>
            <img src={b.src} alt={b.alt} loading="lazy" decoding="async" />
          </div>
          <figcaption>
            <span className="tag mono">{b.tag}</span>
            {b.caption}
          </figcaption>
        </figure>
      )
    default:
      return null
  }
}

function Plate({
  kind,
  dark,
  camera,
  tag,
  hint,
  className = '',
}: {
  kind: 'container' | 'crystal' | 'tablets' | 'fibc' | 'sack' | 'globe' | 'jar'
  dark?: boolean
  camera?: { position: [number, number, number]; fov?: number }
  tag?: string
  hint?: string
  className?: string
}) {
  return (
    <div className={`ref-feature-stage ${dark ? 'dark' : ''} ${className}`}>
      {tag && <span className="tag mono">{tag}</span>}
      {hint && <span className="hint mono">{hint}</span>}
      <Suspense fallback={null}>
        <ModelStage kind={kind} dark={dark} camera={camera} />
      </Suspense>
    </div>
  )
}

/* ---------------------------------------------------------------- *
 * The grade table drives a live specimen.
 *
 * A comparison table answers "which grade" in the abstract; the plate
 * answers it in the concrete. Selecting a row swaps the model, the tag and
 * the camera, so the buyer sees the thing they just read the spec of.
 * A radio group rather than buttons, because that is what it is — one of
 * five, always exactly one chosen.
 * ---------------------------------------------------------------- */
function GradesBand() {
  const [pick, setPick] = useState(0)
  const g = grades[pick]
  return (
    <div className="ref-grade-band">
      <div className="ref-grade-col">
        <div className="ref-table-wrap">
          <table className="ref-table">
            <caption className="sr-only">
              مقارنة درجات ملح SinaiCore — اختر صفًا لعرض عيّنة الدرجة
            </caption>
            <thead>
              <tr>
                <th scope="col">الدرجة</th>
                <th scope="col" className="formula" dir="ltr">
                  NaCl
                </th>
                <th scope="col">الرطوبة</th>
                <th scope="col">حجم الحبيبات</th>
                <th scope="col">التعبئة</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((row, i) => (
                <tr key={row.id} className={i === pick ? 'is-picked' : undefined}>
                  <th scope="row" style={{ textAlign: 'start', fontWeight: 400 }}>
                    <button
                      type="button"
                      className="ref-grade-pick"
                      // a radio-semantics group driven by a button is simpler
                      // to style than a table of real inputs, and still
                      // announces the selected state
                      aria-pressed={i === pick}
                      onClick={() => setPick(i)}
                    >
                      <span className="g-name">{row.name}</span>
                      <span className="g-latin">{row.latin}</span>
                      <span className="g-use">{row.use}</span>
                    </button>
                  </th>
                  <td>
                    <span className="g-num">{row.nacl}</span>
                  </td>
                  <td>
                    <span className="g-num">{row.moisture}</span>
                  </td>
                  <td>
                    {isLatin(row.size) ? (
                      <span className="g-num">{row.size}</span>
                    ) : (
                      <span className="g-ar">{row.size}</span>
                    )}
                  </td>
                  <td className="g-use">
                    {isLatin(row.pack) ? <span dir="ltr">{row.pack}</span> : row.pack}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="ref-grade-plate">
        {/* keyed on the scene so React remounts the canvas per specimen
            rather than re-using one rig across four different models */}
        <Plate
          key={g.scene}
          kind={g.scene}
          tag={g.sceneTag}
          hint={`3D · ${g.scene}`}
          camera={{ position: g.camera.position, fov: g.camera.fov }}
        />
      </div>
    </div>
  )
}


/* ---------------------------------------------------------------- *
 * The quote builder.
 *
 * The page ends in a mailto, which asks a buyer to compose a message from
 * nothing — the hardest possible action after reading 25,000 pixels of
 * spec. This asks only the three things the export team actually needs to
 * price a shipment (grade, packing, port) and writes the email for them.
 *
 * No backend, no form service, no network: the button is a mailto with a
 * fully composed body. That keeps the promise that nothing here calls a
 * third party, and it still works with JavaScript loading late.
 * ---------------------------------------------------------------- */
function QuoteBuilder() {
  const [grade, setGrade] = useState(grades[0].id)
  const [packing, setPacking] = useState(packings[0])
  const [port, setPort] = useState(ports[0].id)

  const g = grades.find((x) => x.id === grade) ?? grades[0]
  const p = ports.find((x) => x.id === port) ?? ports[0]

  const subject = `طلب عرض سعر — ${g.name} · ${packing} · FOB ${p.title}`
  const body = [
    'السادة SinaiCore،',
    '',
    'نرجو عرض سعر للطلب التالي:',
    '',
    `• الدرجة: ${g.name} (${g.latin})`,
    `• النقاوة: ${g.nacl} · الرطوبة: ${g.moisture}`,
    `• التعبئة: ${packing}`,
    `• ميناء الشحن: ${p.title} — FOB`,
    `• الكمية المطلوبة: `,
    '',
    'نرجو إرفاق شهادة التحليل (COA) وورقة المواصفات (TDS) مع العرض.',
    '',
    'مع الشكر،',
  ].join('\n')

  return (
    <div className="ref-quote">
      <div className="ref-quote-row">
        <label htmlFor="q-grade">الدرجة</label>
        <select id="q-grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
          {grades.map((x) => (
            <option key={x.id} value={x.id}>
              {x.name} — {x.nacl}
            </option>
          ))}
        </select>
      </div>
      <div className="ref-quote-row">
        <label htmlFor="q-pack">التعبئة</label>
        <select id="q-pack" value={packing} onChange={(e) => setPacking(e.target.value)}>
          {packings.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
      <div className="ref-quote-row">
        <label htmlFor="q-port">ميناء الشحن</label>
        <select id="q-port" value={port} onChange={(e) => setPort(e.target.value)}>
          {ports.map((x) => (
            <option key={x.id} value={x.id}>
              {x.title} — {x.sub}
            </option>
          ))}
        </select>
      </div>
      <p className="ref-quote-sum">
        <span className="mono">SUMMARY</span>
        {g.name} · {packing} · FOB {p.title}
      </p>
      <a
        className="ref-btn"
        href={`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
      >
        <Icon name="mail" size={16} />
        أرسل الطلب — معبّأ مسبقًا
      </a>
    </div>
  )
}

/* the reading rail: progress across the document, and the number of the
   section you are inside. RAF-throttled so a long scroll never queues more
   than one update per frame. */
function useReadingRail() {
  const bar = useRef<HTMLElement>(null)
  const [here, setHere] = useState<{ n: string; label: string } | null>(null)
  useEffect(() => {
    let raf = 0
    const read = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${p})`

      // which counted section are we inside
      const secs = Array.from(document.querySelectorAll<HTMLElement>('.ref-sec'))
      const mid = window.innerHeight * 0.35
      let found: HTMLElement | null = null
      for (const el of secs) {
        const r = el.getBoundingClientRect()
        if (r.top <= mid && r.bottom > mid) found = el
      }
      if (!found) {
        setHere(null)
        return
      }
      const over = found.querySelector('.over')?.textContent?.trim() ?? ''
      // the CSS counter is not readable from JS, so count position instead
      const idx = String(secs.indexOf(found) + 1).padStart(2, '0')
      setHere({ n: idx, label: over.split('·')[0].trim() })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return { bar, here }
}

export default function RefApp() {
  const [on, setOn] = useState(false)
  const rail = useReadingRail()
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
      <div className="ref-rail" aria-hidden="true">
        <span ref={rail.bar} />
      </div>
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
            <span className={`ref-nav-here ${rail.here ? 'on' : ''}`} aria-hidden="true">
              {rail.here && (
                <>
                  <b>{rail.here.n}</b>
                  {rail.here.label}
                </>
              )}
            </span>
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
                />
              </Suspense>
              <span className="ref-hero-plate mono">20 / 40 FT · FOB ARISH / SUEZ</span>
            </div>
          </div>
        </section>

        {/* ---------------------------------------- the aerial salt-pan act */}
        <PanAct />

        {/* ------------------------------------------------ field notes
         The aerial act shows the pans from above; this is the prose that
         explains what is happening in them, chapter by chapter, from sea
         water to the lab. It sits directly after the aerial act because it
         is the same subject one level down: the ground truth behind the
         three-second flyover. */}
        <section className="ref-sec on-light" id="process">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">Field Notes · Eight Chapters</span>
              <h2>كيف يخرج الملح من الماء</h2>
              <p>
                من مياه البحر في خليج العريش إلى شهادة التحليل — ثمانية فصول تتبع الملح
                خطوة بخطوة: التبخّر، والحصاد، والغسيل، والتكرير، والفرز، والتعبئة.
              </p>
            </div>
            <nav className="nt-index" aria-label="فصول العملية">
              {chapters.map((c) => (
                <a key={c.id} href={`#ch-${c.id}`}>
                  <span className="n mono">{c.n}</span>
                  <span className="t">{c.title}</span>
                  <span className="s">{c.sub}</span>
                </a>
              ))}
            </nav>
            <div className="nt-chapters">
              {chapters.map((c) => (
                <article className="nt-chapter" id={`ch-${c.id}`} key={c.id}>
                  <header className="nt-chapter-head">
                    <span className="n mono">{c.n}</span>
                    <h3>{c.title}</h3>
                    <p className="sub">{c.sub}</p>
                  </header>
                  <div className="nt-body">
                    <p className="lead">{c.lead}</p>
                    {c.blocks.map((b, i) => (
                      <NoteBlock key={i} b={b} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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

        {/* ------------------------------------------- grade comparison
         The product cards answer "what do you sell"; this answers "which
         grade do I order". A buyer coming from the cards needs the five
         grades in one place, on one axis, before the quality argument. */}
        <section className="ref-sec on-light" id="grades">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">Grades · Side by Side</span>
              <h2>الدرجات الخمس في جدول واحد</h2>
              <p>
                كل درجة بنطاق نقاوة ورطوبة وحجم حبيبي وتعبئة خاصة بتطبيقها. الأرقام هي
                نفسها المنشورة على بطاقة كل منتج، مجموعة هنا للمقارنة المباشرة.
              </p>
            </div>
            <GradesBand />
          </div>
        </section>

        {/* ---------------------------------------------- applications
         The portfolio is described by grade; this section describes where
         each grade actually goes, which is the question a purchasing
         manager asks after the spec table. */}
        <section className="ref-sec on-gray" id="applications">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">Applications</span>
              <h2>أين يذهب كل نوع</h2>
              <p>
                من التصنيع الغذائي إلى إذابة الجليد على الطرق — ستة قطاعات تُورَّد لها
                درجات المحفظة، كل قطاع بالدرجة التي تلائم مواصفاته.
              </p>
            </div>
            <div className="ref-apps">
              {applications.map((a) => (
                <article className="ref-app" key={a.n}>
                  <span className="n">{a.n}</span>
                  <span className="ref-icon">
                    <Icon name={a.icon} size={20} />
                  </span>
                  <div>
                    <h4>{a.title}</h4>
                    <p>{a.body}</p>
                    <span className="grade">{a.grade}</span>
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
                camera={{ position: [2.0, 1.15, 2.9], fov: 30 }}
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
                camera={{ position: [1.55, 0.95, 2.35], fov: 30 }}
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

            {/* the sack is what goes in; this is what it goes in to */}
            <div className="ref-load-head">
              <span className="over">Container Loading</span>
              <h3>من الشكارة إلى الحاوية المختومة</h3>
            </div>
            <ol className="nt-load">
              {loadStops.map((st) => (
                <li key={st.id} className="nt-stop">
                  <span className="n mono">{st.index}</span>
                  <span className="k mono">{st.labelLat}</span>
                  <h4>{st.title}</h4>
                  <p>{st.body}</p>
                  <dl>
                    {st.facts.map((f) => (
                      <div key={f.k}>
                        <dt>{f.k}</dt>
                        <dd>{f.v}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ol>

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
                {/* ports and sailing lines answer the same question — where
                    does it leave from — so they sit side by side on one
                    level row rather than stacked, which is what left two
                    empty columns and a card twice its neighbours' height */}
                <div className="ref-port-pair">
                <div className="ref-port-col">
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
                <div className="nt-routes">
                  <p className="sub">خطوط الإبحار وأيام العبور</p>
                  <dl>
                    {seaRoutes.map((r) => (
                      <div key={r.id}>
                        <dt>
                          {r.name}
                          <span className="lat mono">{r.nameLat}</span>
                        </dt>
                        <dd className="mono" dir="ltr">
                          {r.note}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
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
                <ModelStage kind="globe" dark camera={{ position: [0, 1.1, 8.4], fov: 30 }} />
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

        {/* ----------------------------------------------- buyer questions
         Placed last, immediately before the quote block: every question
         that would otherwise stop someone short of asking for a price is
         settled here, and the code fence below is the next action. */}
        <section className="ref-sec on-light" id="faq">
          <div className="ref-shell">
            <div className="ref-sec-head">
              <span className="over">Before You Ask</span>
              <h2>أسئلة المشترين</h2>
              <p>كل ما يُسأل عادة قبل أول شحنة — العينات، الحد الأدنى، التحليل، والتعبئة والشحن.</p>
            </div>
            <div className="ref-faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="a">{f.a}</p>
                </details>
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
                <QuoteBuilder />
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBlockStart: '0.7rem' }}>
                  <a className="ref-btn ghost" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                    <Icon name="phone" size={16} />
                    اتصل الآن
                  </a>
                  <a className="ref-btn ghost" href={`mailto:${contact.email}`}>
                    <Icon name="mail" size={16} />
                    راسلنا مباشرة
                  </a>
                </div>
              </div>
              <Plate
                kind="jar"
                tag="LAB SAMPLE"
                hint="3D · sample-jar.glb"
                camera={{ position: [2.6, 1.5, 4.0], fov: 28 }}
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
                {/* these pointed at two pages that were merged in and
                    deleted — the content now lives on this page under
                    #process and #logistics, so the links follow it */}
                <li>
                  <a className="ref-switch" href="#process" style={{ marginBlockStart: '0.6rem' }}>
                    ملاحظات الميدان · FIELD NOTES
                  </a>
                </li>
                <li>
                  <a className="ref-switch" href="#logistics">
                    تحميل الحاويات · CONTAINER LOADING
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
