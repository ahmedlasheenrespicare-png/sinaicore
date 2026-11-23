import { specs } from '../data/content'

/** Below the act — the lab sheet: full specification, then the process line. */
export function Quality() {
  return (
    <section className="quality" id="quality">
      <div className="shell">
        <header className="sec-head">
          <div>
            <span className="kicker">TECHNICAL DATA SHEET</span>
            <h2 className="h-scene">
              ورقة المواصفات
              <br />
              لكل تشغيلة
            </h2>
          </div>
          <p className="lead">
            كل شحنة تُرفق بتحليل معملي مستقل. الأرقام أدناه هي الحدود التي نلتزم بها في كل
            حاوية تغادر سيناء، لا متوسطات تسويقية.
          </p>
        </header>

        <div className="spec-grid">
          <div className="spec-sheet">
            <div className="sheet-head">
              <span className="mono">LOT AR-2411-0087</span>
              <span className="mono">ISSUED 2026-11</span>
            </div>
            <div className="sheet-body">
              {specs.map((s, i) => (
                <div className="sheet-row" key={s.k} data-reveal style={{ '--d': `${i * 45}ms` } as React.CSSProperties}>
                  <span className="sr-key mono">{s.k}</span>
                  <i className="sr-dots" aria-hidden="true" />
                  <b className="ar-num">{s.v}</b>
                  <em className="mono">{s.note}</em>
                </div>
              ))}
            </div>
            <div className="sheet-foot">
              <span>طريقة الاختبار: ASTM E534 · ISO 2483</span>
              <span className="mono">SGS · INTERTEK</span>
            </div>
          </div>

          <aside className="lab-note">
            <div className="lab-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120" width="120" height="120" fill="none">
                <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="0.6" opacity=".3" />
                <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 5" opacity=".5" />
                <path d="M60 18v84M18 60h84" stroke="currentColor" strokeWidth="0.4" opacity=".25" />
                <text x="60" y="56" textAnchor="middle" fill="currentColor" fontFamily="Archivo" fontSize="20" fontWeight="600">
                  99.5
                </text>
                <text x="60" y="72" textAnchor="middle" fill="currentColor" fontFamily="monospace" fontSize="8" letterSpacing="2">
                  NaCl %
                </text>
              </svg>
            </div>
            <h3>لماذا نقاء البلورة يهم؟</h3>
            <p>
              في وحدات التطرية، كل ٠٫١٪ شوائب تعني راتنجاً يُستهلك أسرع ورسوبيات أكثر في
              الأنابيب. وفي الصناعة الغذائية، تحدد الشوائب طعم المنتج ولونه. لذلك نبيع
              الرقم، لا الكمية فقط.
            </p>
            <ul>
              <li>تحليل معمل مستقل لكل تشغيلة</li>
              <li>سجل تعقّب من المحجر إلى الحاوية</li>
              <li>عينة محفوظة ٢٤ شهراً لكل LOT</li>
            </ul>
          </aside>
        </div>

        <div className="process">
          <h3 className="process-title">
            <span className="kicker">FROM DEPOSIT TO DECK</span>
            خط المعالجة
          </h3>
          <ol className="process-line">
            {[
              { n: '01', t: 'الاستخراج', d: 'تفجير وحفر انتقائي في طبقات الهاليت بوسط سيناء.', tag: 'MINING' },
              { n: '02', t: 'الغسل والترسيب', d: 'محلول مشبّع يذيب الشوائب ويعيد بلورة الملح النقي.', tag: 'REFINING' },
              { n: '03', t: 'التجفيف والغربلة', d: 'هواء ساخن مضبوط ثم غرابيل متعددة المقاسات.', tag: 'DRYING' },
              { n: '04', t: 'الضغط والتشكيل', d: 'كبس الأقراص أو تعبئة الحبيبات حسب طلب المصنع.', tag: 'FORMING' },
              { n: '05', t: 'التعبئة والفحص', d: 'شكائر ١ طن، خياطة، ترقيم، وفحص وزن آلي.', tag: 'PACKING' },
              { n: '06', t: 'الشحن', d: 'نقل بري إلى العريش أو السويس، ثم حاويات ٢٠/٤٠ قدم.', tag: 'LOGISTICS' },
            ].map((p, i) => (
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
            أرسل المقاس المطلوب والكمية الشهرية وميناء الوصول، ونرد بعرض سعر ومواصفة خلال
            يوم عمل واحد.
          </p>
          <div className="contact-meta">
            <div>
              <span className="mono">EMAIL</span>
              <a href="mailto:export@sinaicore.com">export@sinaicore.com</a>
            </div>
            <div>
              <span className="mono">OFFICE</span>
              <p>العريش · سيناء الشمالية · مصر</p>
            </div>
            <div>
              <span className="mono">PORT</span>
              <p>العريش — السويس</p>
            </div>
          </div>
        </div>

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
              <select name="product" defaultValue="tablets">
                <option value="raw">ملح خام — Halite</option>
                <option value="tablets">أقراص تطرية المياه</option>
                <option value="granules">حبيبات معالجة</option>
              </select>
            </label>
            <label>
              <span>الكمية الشهرية (طن)</span>
              <input type="text" name="qty" placeholder="500" inputMode="numeric" dir="ltr" />
            </label>
          </div>
          <label>
            <span>تفاصيل إضافية</span>
            <textarea name="notes" rows={3} placeholder="ميناء الوصول، المقاس المطلوب، شروط التعبئة…" />
          </label>
          <button type="submit" className="cf-submit">
            <span>إرسال الطلب</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
            </svg>
          </button>
          <p className="cf-note mono">NO SPAM · RESPONSE WITHIN 1 BUSINESS DAY</p>
        </form>
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
            <b>SINAI<span>CORE</span></b>
            <p>ملح سيناء الخام، معالج ومعبّأ للتصدير.</p>
          </div>
          <nav className="footer-nav" aria-label="روابط التذييل">
            <a href="#crystal">السلسلة</a>
            <a href="#purity">النقاء</a>
            <a href="#packing">التعبئة</a>
            <a href="#export">التصدير</a>
            <a href="#quality">المواصفات</a>
            <a href="#contact">تواصل</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="mono">© 2026 SINAI CORE · NORTH SINAI, EGYPT</span>
          <span className="mono">31.13°N 33.80°E · UTC+2</span>
        </div>
      </div>
    </footer>
  )
}
