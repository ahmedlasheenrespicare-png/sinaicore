/* ------------------------------------------------------------------ *
 * A SinaiCore page built on the reference's structure.
 *
 * What is borrowed from `brocksbushes.moonshiners.co.uk` is the *shape*:
 * a fixed canvas, a tall scroll track of pinned panels, huge serif display
 * type set letter by letter, one accent per product, and a frosted plate
 * under the copy. What is ours is everything else — the ground is warm sand
 * rather than rose, the ink is navy, the display face is Amiri because the
 * language is Arabic, and the products are our grades.
 *
 * The reference says "Field to Still" — a farm and a distillery. The
 * equivalent sentence for salt is "من السبخة إلى الشحنة": the pan and the
 * shipment. Same two ends of one process.
 * ------------------------------------------------------------------ */

export const tokens = {
  /* warm paper, not the reference's rose: the structure reads as a printed
     editorial either way, but this one belongs to a mineral company */
  bg: '#f7f1e7',
  ink: '#0e1a2b',
  card: '#fbf7f0',
  copper: '#c2712f',
  blue: '#1a6b9c',
  steel: '#4a6070',
  display: "'Amiri', 'Times New Roman', serif",
  body: "'Cairo Variable', 'Tahoma', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
}

export type Product = {
  id: string
  /* the scene reads this to pick which GLB to show */
  model: 'crystal' | 'jar' | 'bag' | 'sack' | 'globe'
  kicker: string
  title: string
  latin: string
  meta: string
  body: string
  specs: [string, string][]
  accent: string
  pill: { label: string; color: string } | null
}

export const products: Product[] = [
  {
    id: 'refined',
    model: 'crystal',
    kicker: 'المتوفر الآن',
    title: 'المكرر الفاخر',
    latin: 'Refined · Premium',
    meta: 'NaCl ≥ 99.5 % · 0.2 – 0.8 mm',
    body: 'ملح بلوري مكرر بالغسل والتبخير تحت فراغ، تبقى رطوبته دون 0.2 % فيبقى حرّ التدفق في خطوط التعبئة. يُستخدم في التصنيع الغذائي ومعالجة مياه الشرب.',
    specs: [
      ['النقاوة', 'NaCl ≥ 99.5%'],
      ['الرطوبة', '≤ 0.2%'],
      ['الحجم', '0.2 – 0.8 mm'],
      ['التعبئة', '25 / 50 kg · FIBC'],
    ],
    accent: '#1a6b9c',
    pill: { label: 'متوفر الآن', color: '#1a6b9c' },
  },
  {
    id: 'washed',
    model: 'bag',
    kicker: 'المتوفر الآن',
    title: 'المغسول الصناعي',
    latin: 'Washed · Industrial',
    meta: 'NaCl ≥ 98.5 % · 0.5 – 3 mm',
    body: 'ملح مغسول بمحلول مشبع يطرد الطين والشوائب العالقة دون إذابة الحبيبة نفسها، فيخرج متجانس الحجم جاهزًا للتطرية والصناعة الثقيلة.',
    specs: [
      ['النقاوة', 'NaCl ≥ 98.5%'],
      ['الرطوبة', '≤ 3%'],
      ['الحجم', '0.5 – 3 mm'],
      ['التعبئة', 'FIBC · 1 – 1.5 t'],
    ],
    accent: '#c2712f',
    pill: null,
  },
  {
    id: 'deicing',
    model: 'sack',
    kicker: 'شتاء ٢٠٢٦',
    title: 'إذابة الجليد',
    latin: 'De-icing · Winter',
    meta: 'NaCl ≥ 98.0 % · 1 – 5 mm',
    body: 'حبيبة خشنة تُذيب الجليد عند −7 °م، تُعبّأ في شكائر مطبوعة بأربع لغات وتُشحن من بورسعيد على منصات نقالة موحّدة.',
    specs: [
      ['النقاوة', 'NaCl ≥ 98.0%'],
      ['الرطوبة', '≤ 3%'],
      ['الحجم', '1 – 5 mm'],
      ['التعبئة', 'شكائر 25 / 50 kg'],
    ],
    accent: '#4a6070',
    pill: null,
  },
]

/* The analysis act — the reference's "botanical bill", which lists what is
   inside the bottle. Ours lists what is inside the certificate. */
export const analysis = {
  kicker: 'بطاقة التحليل',
  title: 'ما يقيسه المختبر',
  body: 'ثمانية فحوص لكل دفعة قبل التعبئة، والنتيجة تُرفق مع الشحنة لا تُطلب بعدها.',
  rows: [
    ['كلوريد الصوديوم', 'NaCl ≥ 99.5%'],
    ['الرطوبة', '≤ 0.2%'],
    ['الكالسيوم والمغنسيوم', 'Ca²⁺ · Mg²⁺'],
    ['الكبريتات', 'SO₄²⁻'],
    ['المواد غير الذائبة', 'Insolubles'],
    ['الحجم الحبيبي', '0.2 – 0.8 mm'],
    ['المظهر', 'أبيض حر التدفق'],
    ['الحد الثقيل', 'تحت حد المواصفة'],
  ],
}

export const hero = {
  brand: ['SinaiCore', 'شمال سيناء'],
  title: 'من السبخة إلى الشحنة',
  lead: 'خمس درجات من ملح واحد. من أحواض التبخير في شمال سيناء إلى المصانع في أربع قارات.',
  cta: 'استعرض الدرجات',
  cta2: 'اطلب عرض سعر',
  madeBy: 'اللوجستيات',
  madeValue: 'العريش · بورسعيد',
  passing:
    'الملح يتبلور ثلاث مرات على الطريق: في الأحواض، ثم في المغسلة، ثم في المصفاة. ولا تُشحن دفعة حتى تُختبر.',
}

export const close = {
  title: 'ملح واحد. خمس درجات.',
  body: 'المكرر الفاخر والمغسول الصناعي متوفران للمعاملة الفورية من العريش وبورسعيد. إذابة الجليد تُجدول من سبتمبر لكل موسم الشتاء.',
  cta: 'اطلب عرض سعر',
  cta2: 'تحدث إلى مكتب التصدير',
  credit: 'المجسّمات: خمسة نماذج منتج داخل الموقع، مضغوطة بـ Draco',
}

/* Section heights, from the reference's inline styles. The pacing is the
   design, so the ratios are kept exactly. */
export const track = [300, 150, 300, 200, 200, 150]
