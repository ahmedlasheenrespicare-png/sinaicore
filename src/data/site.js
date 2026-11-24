/**
 * SinaiCore — the published facts.
 *
 * Product grades, packaging, ports, Incoterms, offices and contacts are the
 * real SinaiCore figures. Keep them in one place so the page can never drift.
 */

export const brand = {
  name: 'SinaiCore',
  arabic: 'سينا كور',
  tagline: 'At the Core of Quality and Purity',
  taglineAr: 'في قلب الجودة والنقاء',
  coordinates: '31.13° N · 33.80° E',
  region: 'العريش · شمال سيناء · مصر',
}

export const hero = {
  kicker: 'ملاحظات ميدانية · شمال سيناء · ٣١٫١٣° شمالاً ٣٣٫٨٠° شرقاً',
  title: ['من مياه البحر', 'إلى ملح المائدة'],
  lede:
    'ثمانية فصول من داخل ملّاحة واحدة على ساحل العريش — كيف يتبخّر البحر، وكيف تُكسر القشرة، وكيف يخرج الملح أبيضَ ناعماً في شكارة خمسين كيلو. القصة كلها هنا، ومعهد الصور ليس للزينة.',
  cta: 'ابدأ القراءة',
  ctaSub: 'أو مرّر لأسفل',
  meta: [
    ['الفصول', '٠٨'],
    ['الدرجات', '٠٥'],
    ['الموانئ', '٠٢'],
    ['القارات', '٠٦'],
  ],
}

export const grades = [
  {
    id: 'refined',
    name: 'المكرر الفاخر',
    latin: 'Refined · Premium',
    nacl: '≥ 99.5%',
    moisture: '≤ 0.2%',
    size: '0.2 – 0.8 mm',
    use: 'غذائي · معالجة مياه',
    pack: '25 / 50 kg · FIBC',
  },
  {
    id: 'washed',
    name: 'المغسول الصناعي',
    latin: 'Washed · Industrial',
    nacl: '≥ 98.5%',
    moisture: '≤ 3%',
    size: '0.5 – 3 mm',
    use: 'صناعي · تطرية',
    pack: '25 / 50 kg · FIBC',
  },
  {
    id: 'deicing',
    name: 'إذابة الجليد',
    latin: 'De-icing · Winter',
    nacl: '≥ 98.0%',
    moisture: '≤ 3%',
    size: '1 – 5 mm',
    use: 'طرق · صيانة شتاء',
    pack: 'FIBC · سائب',
  },
  {
    id: 'softening',
    name: 'أقراص التطرية',
    latin: 'Tablets · Softening',
    nacl: '≥ 99.5%',
    moisture: '≤ 0.2%',
    size: 'قرص مضغوط',
    use: 'تبادل أيوني',
    pack: '10 / 25 / 50 kg',
  },
  {
    id: 'marine',
    name: 'البحري الطبيعي',
    latin: 'Marine · Solar',
    nacl: '≥ 97.0%',
    moisture: '≤ 4%',
    size: 'coarse · unsorted',
    use: 'صناعي · تجاري',
    pack: 'FIBC · سائب',
  },
]

export const numbers = {
  title: 'الأرقام في صفحة واحدة',
  sub: 'كل ما سبق، مختصراً في جدول يُقرأ في دقيقة.',
  rows: [
    ['كلوريد الصوديوم — مكرّر', '≥ 99.5 %'],
    ['كلوريد الصوديوم — مغسول', '≥ 98.5 %'],
    ['كلوريد الصوديوم — خام', '96 – 97 %'],
    ['الرطوبة', '≤ 0.2 %'],
    ['الشوائب غير الذائبة', '≤ 0.05 %'],
    ['اليود', '20 – 40 ملغم/كجم'],
    ['الدرجات', '1–3 / 0.5–1 / < 0.5 مم'],
    ['العبوات', '25 / 50 كجم · FIBC 1–1.5 طن'],
    ['الموانئ', 'العريش · السويس'],
    ['شروط التسليم', 'FOB · CFI · CFR'],
  ],
}

export const ports = [
  {
    id: 'arish',
    title: 'ميناء العريش',
    sub: '(شمال سيناء)',
    tone: 'blue',
    rows: ['شرط الشحن: FOB ميناء العريش', 'للشحنات السائبة وسفن الاستئجار'],
    tags: ['BULK', 'JUMBO BAGS', '25 KG BAGS', '50 KG BAGS', 'SLING BAGS'],
  },
  {
    id: 'suez',
    title: 'ميناء السويس',
    sub: 'أو شرق بورسعيد — التفريعة',
    tone: 'copper',
    rows: ['شرط الشحن: FOB السويس أو شرق بورسعيد التفريعة', 'للشحنات بالحاويات (٢٠ قدم و٤٠ قدم)'],
    tags: ['20 FT', '40 FT'],
  },
]

export const destinations = [
  { ar: 'أوروبا', en: 'EUROPE' },
  { ar: 'آسيا', en: 'ASIA' },
  { ar: 'أفريقيا', en: 'AFRICA' },
  { ar: 'أمريكا الشمالية', en: 'N. AMERICA' },
  { ar: 'أمريكا الجنوبية', en: 'S. AMERICA' },
  { ar: 'أستراليا', en: 'AUSTRALIA' },
]

export const offices = [
  {
    title: 'مكتب العريش',
    sub: 'El Arish · North Sinai',
    lines: ['تقاطع شارع أسيوط', 'وشارع النفورة،', 'بجوار محطة كارجاز للغاز،', 'العريش، شمال سيناء، مصر'],
  },
  {
    title: 'مكتب القاهرة',
    sub: 'New Cairo · Egypt',
    lines: ['فيلا ١٦٧، شارع علي السباعي،', 'الياسمين ٤،', 'التجمع الأول،', 'القاهرة الجديدة، مصر'],
  },
]

export const contact = {
  email: 'info@sinaicore.com',
  phone: '+20 110 753 9914',
  phoneHref: 'tel:+201107539914',
  site: 'www.sinaicore.com',
  siteHref: 'https://www.sinaicore.com',
}

export const steps = [
  { n: '١', title: 'الاستفسار', body: 'شاركنا مواصفاتك وكمياتك. يراجع فريقنا متطلباتك ويقدّم إرشاداً فنياً.' },
  { n: '٢', title: 'العينات', body: 'نرسل عينات المنتج مع شهادة تحليل كاملة (COA) لتقييمك قبل أي التزام.' },
  { n: '٣', title: 'اللوجستيات', body: 'نتولّى التعبئة والتوثيق والشحن العالمي حتى بوليصة الشحن.' },
]

export const quote = {
  title: 'طلب عرض سعر',
  body: 'أرسل المقاس والكمية والميناء. نرد بمواصفة مكتوبة وسعر ثابت صالح لأسبوعين، مع شهادة تحليل للدفعة التي ستُشحن فعلاً.',
  cta: 'اطلب عرض سعر',
}

export const gradeOptions = grades.map((g) => ({ value: g.id, label: `${g.name} — ${g.nacl}` }))
export const packOptions = ['25 kg bag', '50 kg bag', 'FIBC 1 – 1.5 MT', 'Bulk vessel']
export const portOptions = ['FOB El Arish', 'FOB Suez', 'FOB Port Said East']
