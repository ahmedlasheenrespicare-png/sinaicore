/**
 * Reference cut — the published site's section order, in its own light palette,
 * with the 3D work we authored dropped into the places where the original uses
 * flat photography or a static logo plate.
 *
 * Every figure, grade, port, Incoterm, office and contact detail is the real
 * published SinaiCore content.
 */

export type Product = {
  id: string
  chip: string
  title: string
  body: string
  nacl: string
  moisture: string
  image: string
  scene?: 'sack' | 'crystal' | 'tablets' | 'fibc'
}

/* The reference's own four items, with the two buyer-facing additions the
   document now carries: the grade table (the question after the products)
   and the applications grid. Kept to six so the bar still reads as a bar. */
export const nav = [
  { label: 'الرئيسية', lat: 'Home', href: '#top' },
  { label: 'المنتجات', lat: 'Products', href: '#products' },
  { label: 'الدرجات', lat: 'Grades', href: '#grades' },
  { label: 'التطبيقات', lat: 'Applications', href: '#applications' },
  { label: 'ملف الشركة', lat: 'Company Profile', href: '#company' },
  { label: 'تواصل معنا', lat: 'Contact', href: '#contact' },
]

/** The pinned aerial act: pans → cut block → wash & grade → packed for export. */
export const panBeats = [
  {
    id: 'aerial',
    n: '01',
    tag: 'من السماء',
    kicker: 'AERIAL · NORTH SINAI',
    title: 'ملاحات شمال سيناء\nتحت شمس الصباح',
    body: 'أحواض التبخير الشمسي على ساحل العريش، تقطعها الجسور الترابية، وطبقة الملح المتبلور تلمع على سطح كل حوض. المشهد مأخوذ من الجو قبل الهبوط.',
    facts: [
      { k: 'ALTITUDE', v: '120 m' },
      { k: 'SOURCE', v: 'Solar evaporation' },
      { k: 'REGION', v: 'North Sinai' },
    ],
  },
  {
    id: 'cut',
    n: '02',
    tag: 'الاقتطاع',
    kicker: 'CRUST · CUT OUT',
    title: 'تهبط الكاميرا\nوتُقتطع كتلة من الملح',
    body: 'تنخفض الكاميرا إلى سطح الملاحة، فتنفصل كتلة من قشرة الملح المتبلور — نفس البلورة التي تبدأ منها سلسلة الإنتاج: هاليت بحري بتركيز يصل إلى ٩٩.٥٪.',
    facts: [
      { k: 'NaCl', v: '≥ 99.5%' },
      { k: 'WATER', v: 'Solar brine' },
      { k: 'MOISTURE', v: '≤ 0.2%' },
    ],
  },
  {
    id: 'wash',
    n: '03',
    tag: 'الغسل والفرز',
    kicker: 'WASH · SCREEN · GRADE',
    title: 'غسل في الهواء\nوفرز ثلاث درجات',
    body: 'تمر الكتلة عبر ستارة غسل، ثم تتفتّت إلى حبيبات تُفرز في الهواء إلى ثلاث درجات: خشن ومتوسط وناعم — كل درجة بنطاق حجم حبيبي يخصّ تطبيقها.',
    facts: [
      { k: 'COARSE', v: '1 – 3 mm' },
      { k: 'MEDIUM', v: '0.5 – 1 mm' },
      { k: 'FINE', v: '< 0.5 mm' },
    ],
  },
  {
    id: 'pack',
    n: '04',
    tag: 'التعبئة',
    kicker: 'PACKED · EXPORT READY',
    title: 'تستقر الحبيبات\nداخل عبوات التصدير',
    body: 'تتجمّع الدرجات الثلاث وتتساقط داخل شكارة ٢٥/٥٠ كجم المطبوعة، فتنتفخ وتستقيم — جاهزة للرصّ في الحاوية ولباقي الطريق حتى ميناء الوصول.',
    facts: [
      { k: 'PACK', v: '25 / 50 kg' },
      { k: 'FIBC', v: '1 – 1.5 MT' },
      { k: 'FOB', v: 'Arish · Suez' },
    ],
  },
]

export const pillars = [
  {
    n: '01',
    title: 'تنسيق التوريد البحري',
    body: 'تنسّق SinaiCore التوريد من منتجي الملح البحري المؤهلين في شمال سيناء، بما يوفّر للعملاء كميات موثوقة ومواصفات مرنة ومنتجات جاهزة للتصدير بثبات.',
    icon: 'mountain',
  },
  {
    n: '02',
    title: 'ضمان الجودة وضبط الدفعات',
    body: 'تنسّق SinaiCore اختيار المنتج واختبار الدفعات وضبط المواصفات، بدعم من تحقق مختبري مستقل من طرف ثالث عند الحاجة.',
    icon: 'lab',
  },
  {
    n: '03',
    title: 'لوجستيات وتوثيق التصدير',
    body: 'خدمات تصدير منسّقة من تأكيد الطلب حتى الشحن.',
    icon: 'truck',
    list: [
      'تنسيق التصدير FOB',
      'اختيار الميناء',
      'شحنات السفن السائبة والحاويات',
      'مستندات التصدير',
      'تنسيق الفحص والتفتيش',
      'إدارة جداول الشحن',
    ],
  },
]

export const products: Product[] = [
  {
    id: 'refined',
    chip: 'صناعي',
    title: 'محلول الملح المكرر الفاخر',
    body: 'كلوريد الصوديوم (NaCl) ≥ 99.5%. تورّد SinaiCore الملح المكرر الفاخر من شركاء تكرير مؤهلين، ويُدار وفق المواصفات ومتطلبات الجودة وإجراءات التصدير المتفق عليها مع العميل.',
    nacl: '≥ 99.5%',
    moisture: '≤ 0.2%',
    image: '/img/ref/refined.jpg',
    scene: 'crystal',
  },
  {
    id: 'washed',
    chip: 'صناعي',
    title: 'محلول الملح المغسول الصناعي',
    body: 'كلوريد الصوديوم (NaCl على أساس جاف) ≥ 98.5%. يُستمد من منتجين مؤهلين في شمال سيناء ويُعالج عبر عمليات غسل وفرز وتدريج مضبوطة.',
    nacl: '≥ 98.5%',
    moisture: '≤ 3%',
    image: '/img/ref/washed.jpg',
    scene: 'fibc',
  },
  {
    id: 'deicing',
    chip: 'إذابة الجليد',
    title: 'محلول صيانة الشتاء وإذابة الجليد',
    body: 'كلوريد الصوديوم ≥ 98.0%. يُورّد في نطاقات حجم حبيبي مناسبة لإذابة جليد الطرق وصيانة الشتاء، بمواصفات تُكيّف حسب السوق والعميل.',
    nacl: '≥ 98.0%',
    moisture: '≤ 3%',
    image: '/img/ref/roadsalt.jpg',
  },
  {
    id: 'softening',
    chip: 'معالجة المياه',
    title: 'أقراص تطرية المياه',
    body: 'كلوريد صوديوم ≥ 99.5%، مضغوط بدقة لأداء تبادل أيوني فعّال. أقراص بحرية فائقة النقاء مصمّمة لتجديد الراتنج في أنظمة تطرية المياه، من شركاء تصنيع مؤهلين وضغط وجودة مضبوطَين.',
    nacl: '≥ 99.5%',
    moisture: '≤ 0.2%',
    image: '/img/water-softener.png',
    scene: 'tablets',
  },
  {
    id: 'marine',
    chip: 'صناعي',
    title: 'محلول الملح البحري',
    body: 'كلوريد الصوديوم (أساس جاف) ≥ 97.0%. ملح بحري طبيعي من منتجين مؤهلين في شمال سيناء للتطبيقات الصناعية والتجارية، بمواصفات تُدار حسب متطلبات العميل.',
    nacl: '≥ 97.0%',
    moisture: '≤ 4%',
    image: '/img/raw-salt.jpg',
    scene: 'sack',
  },
]

export const qualityTiles = [
  {
    title: 'ضبط النقاء الكيميائي',
    body: 'تحليل دقيق لنسبة كلوريد الصوديوم (NaCl) يضمن التوافق مع المواصفات الصناعية ومواصفات التصدير الدولية.',
    icon: 'flask',
  },
  {
    title: 'تحليل الحجم الحبيبي والمناخل',
    body: 'تقارير توزيع حجم حبيبي مضبوطة لتلائم متطلبات كل تطبيق — الصناعي، ومعالجة المياه، وإذابة الجليد.',
    icon: 'sieve',
  },
  {
    title: 'مراقبة الرطوبة ومضادات التكتل',
    body: 'ضبط صارم للرطوبة لضمان ثبات المنتج خلال التخزين والنقل البحري.',
    icon: 'drop',
  },
  {
    title: 'تتبّع كامل للدفعة',
    body: 'تتبّع منظم من مصدر المورّد المؤهل عبر المعالجة والتعبئة والتوثيق وتحميل السفينة أو الحاوية.',
    icon: 'trace',
  },
]

export const standards = [
  { k: 'ISO', v: 'إجراءات متوافقة' },
  { k: 'BS', v: 'المعايير البريطانية (حيث ينطبق)' },
  { k: 'ASTM', v: 'مواصفات ASTM' },
  { k: 'EN', v: 'المعايير الأوروبية (حيث ينطبق)' },
]

export const labReports = [
  'محلول الملح المكرر الفاخر',
  'محلول الملح المغسول الصناعي',
  'محلول صيانة الشتاء',
]

export const logistics = [
  {
    title: 'شكائر ٢٥ كجم / ٥٠ كجم',
    body: 'شكائر تصدير من PP/PE شديدة التحمل. متاحة بصيغ تصدير متعددة، تشمل شحنات الحاويات وتحميل سفن الاستئجار باستخدام شكائر الرافعة (Sling Bags)، بحلول لوجستية مرنة لكل عميل.',
    icon: 'bag',
    image: '/img/ref/bag50.jpg',
    scene: 'sack' as const,
  },
  {
    title: 'شكائر الجامبو FIBC — ١ طن إلى ١.٥ طن',
    body: 'شكائر صناعية كبيرة بحلقات رفع مقوّاة وفوهات تفريغ سفلية.',
    icon: 'jumbo',
    image: '/img/ref/bulk.jpg',
    scene: 'fibc' as const,
  },
  {
    title: 'تحميل السفن السائبة',
    body: 'متاح للطلبات ذات الكميات الكبيرة، وفق ترتيبات الميناء والسفينة والتحميل والتعاقد.',
    icon: 'ship',
    image: '/img/ref/pans.jpg',
    scene: 'container' as const,
  },
]

export const ports = [
  {
    id: 'arish',
    title: 'ميناء العريش',
    sub: '(شمال سيناء)',
    tone: 'blue' as const,
    rows: ['شرط الشحن: FOB ميناء العريش', 'للشحنات السائبة وسفن الاستئجار'],
    tagsLabel: 'خيارات البضاعة المتاحة:',
    tags: ['BULK', 'JUMBO BAGS', '25 KG BAGS', '50 KG BAGS', 'SLING BAGS'],
  },
  {
    id: 'suez',
    title: 'ميناء السويس',
    sub: 'أو شرق بورسعيد — التفريعة',
    tone: 'copper' as const,
    rows: ['شرط الشحن: FOB السويس أو شرق بورسعيد التفريعة', 'للشحنات بالحاويات (٢٠ قدم و٤٠ قدم)'],
    tagsLabel: '',
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

export const steps = [
  {
    n: '1',
    title: 'الاستفسار',
    body: 'شاركنا مواصفاتك وكمياتك. يراجع فريقنا متطلباتك ويقدّم إرشادًا فنيًا.',
  },
  {
    n: '2',
    title: 'العينات',
    body: 'عرض سعر وعينات: نرسل عينات المنتج مع شهادة تحليل كاملة (COA) لتقييمك.',
  },
  {
    n: '3',
    title: 'اللوجستيات',
    body: 'تأكيد الطلب والتسليم: نتولّى التعبئة والتوثيق والشحن العالمي.',
  },
]

export const offices = [
  {
    title: 'مكتب العريش',
    lines: ['تقاطع شارع أسيوط', 'وشارع النفورة،', 'بجوار محطة كارجاز للغاز،', 'العريش، شمال سيناء، مصر'],
  },
  {
    title: 'مكتب القاهرة',
    lines: ['فيلا ١٦٧، شارع علي السباعي،', 'الياسمين ٤،', 'التجمع الأول،', 'القاهرة الجديدة، مصر'],
  },
]

export const contact = {
  email: 'info@sinaicore.com',
  phone: '+20 110 753 9914',
  site: 'www.sinaicore.com',
}

/* ------------------------------------------------------------------ *
 * Grade comparison — the five portfolio grades side by side.
 *
 * A buyer comparing salt suppliers wants one table, not five product
 * cards repeated. Every value here is the same figure already published
 * on that grade's own card, so the table can never drift out of sync
 * with the copy above it.
 * ------------------------------------------------------------------ */
export type Grade = {
  id: string
  name: string
  latin: string
  nacl: string
  moisture: string
  size: string
  use: string
  pack: string
  /** the 3D specimen that stands for this grade: picking a row in the
   *  comparison table swaps the plate beside it. Two grades share the sack
   *  because both ship as one; the tablet grade has its own model. */
  scene: 'crystal' | 'tablets' | 'fibc' | 'sack'
  /** the plate caption under the model, in the reference's mono tag style */
  sceneTag: string
  /** camera framing that suits each specimen */
  camera: { position: [number, number, number]; fov: number }
}

export const grades: Grade[] = [
  {
    id: 'refined',
    name: 'المكرر الفاخر',
    latin: 'Refined · Premium',
    nacl: '≥ 99.5%',
    moisture: '≤ 0.2%',
    size: '0.2 – 0.8 mm',
    use: 'غذائي · معالجة مياه',
    pack: '25 / 50 kg · FIBC',
    scene: 'crystal',
    sceneTag: 'HALITE · REFINED',
    camera: { position: [2.6, 1.5, 3.7], fov: 30 },
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
    scene: 'fibc',
    sceneTag: 'FIBC · WASHED',
    camera: { position: [4.1, 2.5, 5.2], fov: 32 },
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
    scene: 'sack',
    sceneTag: 'SACK · DE-ICING',
    camera: { position: [2.0, 1.25, 3.0], fov: 30 },
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
    scene: 'tablets',
    sceneTag: 'TABLETS · SOFTENING',
    camera: { position: [3.4, 2.3, 4.1], fov: 30 },
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
    scene: 'fibc',
    sceneTag: 'FIBC · MARINE',
    camera: { position: [4.1, 2.5, 5.2], fov: 32 },
  },
]

/* ------------------------------------------------------------------ *
 * Applications — where the portfolio actually goes. Grounded in the
 * published positioning: food, industry, water treatment, winter
 * maintenance and commercial use.
 * ------------------------------------------------------------------ */
export const applications = [
  {
    n: '01',
    icon: 'flask',
    title: 'الصناعات الغذائية',
    body: 'ملح غذائي مكرر بدرجة نقاوة 99.5% ونسبة رطوبة لا تتجاوز 0.2%، للاستخدام في التصنيع الغذائي والتعبئة.',
    grade: 'المكرر الفاخر',
  },
  {
    n: '02',
    icon: 'lab',
    title: 'الصناعة الكيميائية',
    body: 'كلوريد صوديوم بنسب نقاوة متدرّجة يُورَّد للمصانع التي تحتاج توريدًا ثابتًا على مدار العام.',
    grade: 'المغسول · البحري',
  },
  {
    n: '03',
    icon: 'drop',
    title: 'معالجة المياه',
    body: 'أقراص تطرية مضغوطة بدقة لتجديد الراتنج في وحدات التطرية، بتوزيع حجم مضبوط وأداء تبادل أيوني فعّال.',
    grade: 'أقراص التطرية',
  },
  {
    n: '04',
    icon: 'mountain',
    title: 'صيانة الشتاء وإذابة الجليد',
    body: 'درجات بنطاقات حجم حبيبي مناسبة لإذابة جليد الطرق وصيانة الشتاء، بمواصفات تُكيّف حسب السوق.',
    grade: 'إذابة الجليد',
  },
  {
    n: '05',
    icon: 'box',
    title: 'التجارة والتوزيع',
    body: 'ملح بحري طبيعي في شكائر جامبو وسائب، للموزّعين والمشترين التجاريين ولإعادة التعبئة عند الوصول.',
    grade: 'البحري · المغسول',
  },
  {
    n: '06',
    icon: 'globe',
    title: 'أسواق التصدير',
    body: 'شحنات FOB من العريش والسويس إلى أوروبا وآسيا وأفريقيا والأمريكتين وأستراليا، بتوثيق تصدير كامل.',
    grade: 'جميع الدرجات',
  },
]

/* ------------------------------------------------------------------ *
 * Buyer questions. Each answer restates a fact already on the page —
 * ports, packaging, Incoterms, third-party reports — rather than
 * introducing a new claim.
 * ------------------------------------------------------------------ */
export const faqs = [
  {
    q: 'كيف أحصل على عينات قبل الشراء؟',
    a: 'نرسل عينة من الدرجة المطلوبة مع شهادة تحليل كاملة (COA) لتقييمك قبل أي التزام. تُنسَّق العينة من خلال فريق التصدير مباشرة.',
  },
  {
    q: 'ما الحد الأدنى للطلب؟',
    a: 'يُتفق على الحد الأدنى حسب الدرجة ونوع التعبئة وشروط الشحن، ويُثبَّت في العرض المقدّم قبل تأكيد الطلب. الشحنات بالحاويات والسوائب لها حدود مختلفة.',
  },
  {
    q: 'هل التحليل المختبري مستقل؟',
    a: 'يمكن دعم كل دفعة بشهادة تحليل صادرة أو موثّقة من مختبر مستقل من طرف ثالث، وفق المتطلبات التعاقدية. تقارير Intertek المستقلة متاحة للمراجعة.',
  },
  {
    q: 'ما أنواع التعبئة المتاحة؟',
    a: 'شكائر ٢٥ كجم و٥٠ كجم مطبوعة، وشكائر جامبو FIBC من ١ إلى ١.٥ طن بحلقات رفع وفوهات تفريغ، إضافة إلى الشحن السائب للكميات الكبيرة.',
  },
  {
    q: 'من أي موانئ يتم الشحن؟',
    a: 'FOB ميناء العريش للشحنات السائبة وسفن الاستئجار، وFOB السويس أو شرق بورسعيد التفريعة لشحنات الحاويات مقاس ٢٠ و٤٠ قدمًا.',
  },
  {
    q: 'كيف يتم تتبّع الدفعة؟',
    a: 'تتبّع منظم من مصدر المورّد المؤهل عبر المعالجة والتعبئة والتوثيق وتحميل السفينة أو الحاوية، مع تقارير توزيع حجم حبيبي لكل دفعة.',
  },
]

/* bidi-safe measurements, carried over with the prose: an Arabic reader
   needs "99.5 % ≥", not "≥ 99.5 %", or the relation reorders to nonsense */
const GE = '\u2265'
const LE = '\u2264'
const min = (v: string) => `${v} ${GE}`
const max = (v: string) => `${v} ${LE}`

/* ------------------------------------------------------------------ *
 * The field notes — the documentary spine.
 *
 * The reference cut argued the way a brochure argues: products, grades,
 * quality, logistics. It never said *how* any of it works. This is the
 * part of the site that answers the first real question a buyer has —
 * how do you get salt out of a tidal flat — in the order it happens:
 * sea water, the pan, the harvest, the wash, refining, grading,
 * packing, the lab.
 *
 * Merged from the editorial cut, which was the only one of the four
 * built to carry prose. The design around it is the reference's; the
 * words are the field notebook's.
 * ------------------------------------------------------------------ */
export type Block =
  | { kind: 'p'; text: string; drop?: boolean }
  | { kind: 'note'; n: string; title: string; text: string }
  | {
      kind: 'fig'
      src: string
      alt: string
      caption: string
      tag: string
      bare?: boolean
      ratio?: string
    }
  | { kind: 'quote'; text: string; cite: string }
  | { kind: 'rows'; title: string; rows: [string, string][] }

export type Chapter = {
  id: string
  n: string
  title: string
  sub: string
  lead: string
  blocks: Block[]
}

export const chapters: Chapter[] = [
  {
    id: 'water',
    n: '01',
    title: 'المياه',
    sub: 'البحر يترك ملحه',
    lead: 'لا يبدأ الملح في الملّاحة. يبدأ في خليج العريش، حيث يُسحب الماء عبر قناة بطول أربعة كيلومترات، فيفقد نصف ثقله من الماء قبل أن يصل.',
    blocks: [
      {
        kind: 'p',
        drop: true,
        text: 'مياه البحر عند مدخل المحطة تحمل نحو ٣٫٨٪ أملاحاً مذابة. لا نفعل بها شيئاً غير أن نتركها تحت الشمس؛ فالتبخّر هو المصنع الوحيد هنا، ووقوده مجّاني. القناة المصمّمة بعناية هي التي تحوّل ماءً عادياً إلى محلول مركّز قبل أن يدخل أول حوض.',
      },
      {
        kind: 'rows',
        title: 'عند المدخل',
        rows: [
          ['الملوحة', '3.8 %'],
          ['حرارة الماء صيفاً', '29 °م'],
          ['معدّل التبخّر اليومي', '6.4 مم'],
          ['طول القناة', '4.2 كم'],
        ],
      },
      {
        kind: 'p',
        text: 'على طول الطريق يترسّب الجبس أولاً، ثم كربونات الكالسيوم، ثم يبدأ كلوريد الصوديوم في التبلور. هذا الترتيب ليس اختياراً هندسياً؛ إنه سلوك المحلول نفسه، ونحن نبني أحواضنا حوله لا ضدّه.',
      },
      {
        kind: 'fig',
        src: '/img/ref/pans.jpg',
        alt: 'أحواض التبخّر عند الفجر',
        bare: true,
        ratio: '3 / 2',
        tag: 'لوحة ٠١',
        caption:
          'الأحواض عند السادسة صباحاً. لون كل حوض يقيس تركيزه: الفاتح محلول شابّ، والأزرق الداكن محلول على وشك أن يعطي ملحه.',
      },
      {
        kind: 'note',
        n: '1',
        title: 'لماذا لا نضخّ من البحر مباشرة؟',
        text: 'لأن ملوحة الخليج تتغيّر مع الموسم. القناة تعمل كمنظّم: تخلط وتستقرّ، فتصل الملوحة إلى الحوض الأول ثابتة تقريباً كل يوم من أيام التشغيل.',
      },
    ],
  },
  {
    id: 'pan',
    n: '02',
    title: 'الملاحة',
    sub: 'التبخّر بالشمس',
    lead: 'الملّاحة ليست بحيرة واحدة. إنها سلسلة من الأسرّة الضحلة يفصلها جسر ترابي يمكن لعربة أن تمشي عليه، ويعمل فيها أربعة رجال في الوردية.',
    blocks: [
      {
        kind: 'p',
        text: 'عمق الماء في الحوض لا يتجاوز عشرين سنتيمتراً. عند هذا العمق يعمل الريح والشمس بسرعة: طبقة سطحية دافئة، ودوران بطيء للماء، وتبلور يبدأ من الحافة حيث يبرد المحلول أولاً.',
      },
      {
        kind: 'p',
        text: 'نتحرّك بالماء من حوض إلى آخر كلما ارتفعت كثافته. الرقم الذي نراقبه ليس الملوحة فقط، بل الكثافة النوعية: عند ١٫٢٥ يبدأ ملح الطعام في التبلور، وهذا هو موعد الحصاد.',
      },
      {
        kind: 'quote',
        text: 'الملّاحة ساعة شمسية كبيرة. من يقرأها جيداً يحصل على ملح نقي؛ ومن يستعجلها يحصل على طين.',
        cite: 'مشرف تشغيل — الوردية الصباحية',
      },
      {
        kind: 'fig',
        src: '/img/ref/washed.jpg',
        alt: 'أكوام الملح بعد الحصاد',
        bare: true,
        ratio: '4 / 5',
        tag: 'لوحة ٠٢',
        caption:
          'أكوام الحصاد الأول. لون الكومة يخبرك بمصدرها: الأبيض المائل للرمادي من الحوض العميق، والأنقى من الحوض الضحل حيث لا تصل الطحالب.',
      },
      {
        kind: 'rows',
        title: 'الحوض الواحد',
        rows: [
          ['المساحة', '2.4 فدان'],
          ['عمق الماء', '18–22 سم'],
          ['دورة الحصاد', '21 يوماً'],
          ['الكثافة عند الحصاد', '1.25'],
        ],
      },
    ],
  },
  {
    id: 'harvest',
    n: '03',
    title: 'الحصاد',
    sub: 'القشرة تتكسّر',
    lead: 'عندما تجفّ القشرة تصبح لوحاً واحداً سميكاً. الرجل يقف على حافته بالمجرفة الطويلة ويكسرها في خط مستقيم، كما تُكسر قطعة شوكولاتة.',
    blocks: [
      {
        kind: 'p',
        drop: true,
        text: 'الحصاد يبدأ قبل شروق الشمس، حين تكون القشرة أصلب وأقلّ لزوجة. تُرفع الألواح على حافة الحوض لتجفّ في الهواء يوماً كاملاً، ثم تُجمع في أكوام صغيرة وتُغطّى — لا لتحميها من المطر، فالمطر نادر، بل لتحميها من الغبار الذي يحمل الطين.',
      },
      {
        kind: 'note',
        n: '2',
        title: 'لماذا الفجر؟',
        text: 'الفرق بين الغسيل والطين هو التوقيت. الملح الذي يُرفع في الظهيرة يكون قد امتصّ محلولاً مركّزاً من الحوض، ويحتاج غسيلاً أطول ليعود إلى النقاء المطلوب.',
      },
      {
        kind: 'fig',
        src: '/img/ref/hero.jpg',
        alt: 'شمس الصباح على الملاحة',
        bare: true,
        ratio: '5 / 4',
        tag: 'لوحة ٠٣',
        caption: 'الساعة 06:40. آخر صفّ من الألواح يُرفع، وأول كومة تُغطّى.',
      },
      {
        kind: 'p',
        text: 'كل لوح يُقلَّب مرتين على الأقل قبل أن يُغسل. القلبة الأولى تُسقط الملح الرخو والغبار، والثانية تكشف السطح النظيف. الملح الخام في هذه المرحلة يحتوي 96–97٪ كلوريد صوديوم؛ والباقي طين وماء وجبس. ومن هنا يبدأ الطريق إلى 99.5٪.',
      },
    ],
  },
  {
    id: 'wash',
    n: '04',
    title: 'الغسيل',
    sub: 'الطين يرحل',
    lead: 'الغسيل ليس عملية واحدة. إنه سلسلة من المحاليل المشبعة: يذيب الشوائب ولا يذيب الملح، لأن الماء مشبع بالملح أصلاً.',
    blocks: [
      {
        kind: 'p',
        text: 'في الغسّالة الأسطوانية يُدفع الملح الخام عكس تيار محلول مشبع. الطين والجبس يطفوان ويُصرّفان، والبلورات النظيفة تترسّب. الماء نفسه لا يُطرح: يعود إلى الأحواض ليتبخّر من جديد، فيُستعاد منه الملح الذي حمله.',
      },
      {
        kind: 'rows',
        title: 'بعد الغسيل',
        rows: [
          ['كلوريد الصوديوم', '99.2 %'],
          ['الرطوبة', '4.1 %'],
          ['الشوائب غير الذائبة', '0.18 %'],
          ['استهلاك الماء لكل طن', '0.6 م³'],
        ],
      },
      {
        kind: 'fig',
        src: '/img/ref/washed.jpg',
        alt: 'ملح مغسول في المخزن',
        bare: true,
        ratio: '3 / 4',
        tag: 'لوحة ٠٤',
        caption: 'الملح المغسول قبل التكرير. الحبيبات متماثلة الحجم تقريباً، وهذا هو شرط الفرز الدقيق لاحقاً.',
      },
      {
        kind: 'quote',
        text: 'لا يوجد ملح «قذر» في الطبيعة؛ يوجد ملح لم يُغسل بما يكفي.',
        cite: 'مسؤول الجودة — معمل العريش',
      },
    ],
  },
  {
    id: 'refine',
    n: '05',
    title: 'التكرير',
    sub: 'الغلاية والفراغ',
    lead: 'لغذاءٍ يُعبّأ في أكياس المائدة، الغسيل لا يكفي. نذيب الملح في ماء نقي، نرشّحه، ثم نعيد تبلوره تحت فراغ — فيخرج الملح أجمل وأنقى مما كان.',
    blocks: [
      {
        kind: 'p',
        drop: true,
        text: 'في المِبخّر الفراغي يغلي المحلول عند حرارة أقل بكثير من 100 °م، ونتحكّم في حجم البلورة بالزمن وبسرعة التبريد. الملح الناتج حبيبات صغيرة متساوية، تُسمّى «ملح فراغ»، وهي التي تذوب أسرع في الماء ولا تترك أثراً.',
      },
      {
        kind: 'note',
        n: '3',
        title: 'اليود، والحديد',
        text: 'نضيف يوديد البوتاسيوم بنسبة 20–40 ملغم لكل كيلوغرام، بعد التبخّر لا قبله، حتى لا يتطاير اليود. ونمنع التكتّل بملح الحديدوز، الذي يعطي المنتج لوناً أبيض ثابتاً بعد التعبئة.',
      },
      {
        kind: 'fig',
        src: '/img/ref/refined.jpg',
        alt: 'ملح مكرّر فاخر',
        ratio: '5 / 4',
        tag: 'لوحة ٠٥',
        caption: 'ملح مائدة مكرّر، 99.5٪ كلوريد صوديوم. البلورة في الصورة عمرها ست ثوانٍ فقط من لحظة التكوين.',
      },
      {
        kind: 'rows',
        title: 'خط التكرير',
        rows: [
          ['الغلايات', '3 × 12 طن/ساعة'],
          ['درجة الغليان', '68 °م عند فراغ 0.3 بار'],
          ['كلوريد الصوديوم', min('99.5 %')],
          ['الرطوبة النهائية', max('0.2 %')],
        ],
      },
    ],
  },
  {
    id: 'grade',
    n: '06',
    title: 'الفرز',
    sub: 'ثلاث درجات',
    lead: 'الحبيبة التي لا يمكن وصفها برقم لا يمكن بيعها بثقة. لذلك نملك ثلاث شاشات، وثلاث درجات، ومواصفة مكتوبة لكل درجة.',
    blocks: [
      {
        kind: 'p',
        text: 'الملح يمرّ على ثلاث شبكات متتالية. الأولى تحتفظ بالحصى الكبير، والثانية تفصل الخشن عن المتوسط، والثالثة تفصل المتوسط عن الناعم. ما يخرج من كل شبكة يُوزَن في صومعة مستقلة لها شهادة تحليل.',
      },
      {
        kind: 'fig',
        src: '/img/ref/refined.jpg',
        alt: 'ثلاث درجات من الملح',
        ratio: '4 / 3',
        tag: 'لوحة ٠٦',
        caption: 'الدرجات الثلاث على طبق واحد: خشن 1–3 مم، متوسط 0.5–1 مم، ناعم أقل من 0.5 مم.',
      },
      {
        kind: 'rows',
        title: 'التصنيف',
        rows: [
          ['خشن', '1 – 3 مم'],
          ['متوسط', '0.5 – 1 مم'],
          ['ناعم', '< 0.5 مم'],
          ['المقاس المخصّص', 'متاح من 200 طن'],
        ],
      },
      {
        kind: 'note',
        n: '4',
        title: 'لماذا ثلاث درجات لا درجة واحدة؟',
        text: 'لأن الاستخدام يحدّد المقاس: منشآت تطرية المياه تريد أقراصاً متساوية، ومصانع المواد الغذائية تريد ناعماً يذوب فوراً، ومقاولو الطرق يريدون خشناً لا يتطاير.',
      },
    ],
  },
  {
    id: 'pack',
    n: '07',
    title: 'التعبئة',
    sub: 'الشكارة والحاوية',
    lead: 'الملح الذي لا يصل سالماً لا قيمة له. أكياس PP مطبوعة، شكائر جامبو لطن ونصف، وحاوية تُرصّ على شبكة محسوبة قبل أن تُغلق.',
    blocks: [
      {
        kind: 'p',
        drop: true,
        text: 'كل شكارة 50 كجم تُخاط بأربع طبقات ومبطّنة لمنع الرطوبة، وتُطبع عليها المواصفة كاملة: النقاء، الوزن، وبلد المنشأ. الشبكة داخل الحاوية ليست اختياراً جمالياً — أربع شكائر جامبو في صفّين، وطبقة من أكياس 50 كجم تسدّ الفراغ أعلاها حتى لا تتحرك أثناء الإبحار.',
      },
      {
        kind: 'fig',
        src: '/img/ref/bag50.jpg',
        alt: 'شكارة 50 كجم مطبوعة',
        ratio: '4 / 5',
        tag: 'لوحة ٠٧',
        caption:
          'الشكارة المطبوعة كما تُخرج من الخط: طبعة زرقاء كاملة، أربع شارات ضمان، ووزن صريح على الوجه.',
      },
      {
        kind: 'rows',
        title: 'الشحن',
        rows: [
          ['عبوة التجزئة', '25 / 50 كجم'],
          ['شكارة جامبو', '1 – 1.5 طن'],
          ['حاوية 20 قدم', '20 طن'],
          ['حاوية 40 قدم', '27 طن'],
        ],
      },
      {
        kind: 'quote',
        text: 'أغلب الشكاوى التي وصلتنا في عشر سنوات لم تكن عن الملح. كانت عن الرطوبة التي دخلت أثناء التخزين.',
        cite: 'مسؤول التعبئة والتغليف',
      },
    ],
  },
  {
    id: 'lab',
    n: '08',
    title: 'التحليل',
    sub: 'ما نقيسه',
    lead: 'لا نرسل شيئاً لا نعرف رقمه. كل دفعة تُختبر قبل التعبئة، والنتيجة تُرفق مع الشحنة — لا تُطلب.',
    blocks: [
      {
        kind: 'p',
        text: 'في معمل العريش نقيس ثمانية أشياء لكل دفعة: كلوريد الصوديوم، الرطوبة، الشوائب غير الذائبة، الكالسيوم والمغنيسيوم، الكبريتات، اليود، الحجم الحبيبي، والمعادن الثقيلة. نتائج الشحنة تُحفظ سبع سنوات.',
      },
      {
        kind: 'fig',
        src: '/img/ref/bulk.jpg',
        alt: 'تحميل سائب في الميناء',
        bare: true,
        ratio: '6 / 5',
        tag: 'لوحة ٠٨',
        caption: 'المرحلة الأخيرة: التحميل السائب في ميناء العريش، حيث يُختم الوزن على بوليصة الشحن.',
      },
      {
        kind: 'note',
        n: '5',
        title: 'ماذا يعني «food grade» عملياً؟',
        text: 'يعني أن الملح اجتاز تحليل المعادن الثقيلة (رصاص، زرنيخ، زئبق) بحدود أقل من 1 ملغم/كجم، وأنه يُعبّأ في خط معتمد لا يشاركه أي منتج صناعي.',
      },
    ],
  },
]

export const numbers = {
  title: 'الأرقام في صفحة واحدة',
  sub: 'كل ما سبق، مختصراً في جدول يُقرأ في دقيقة.',
  rows: [
    ['كلوريد الصوديوم — مكرّر', min('99.5 %')],
    ['كلوريد الصوديوم — مغسول', min('98.5 %')],
    ['كلوريد الصوديوم — خام', '96 – 97 %'],
    ['الرطوبة', max('0.2 %')],
    ['الشوائب غير الذائبة', max('0.05 %')],
    ['اليود', '20 – 40 ملغم/كجم'],
    ['الدرجات', '1–3 / 0.5–1 / < 0.5 مم'],
    ['العبوات', '25 / 50 كجم · FIBC 1–1.5 طن'],
    ['الموانئ', 'العريش · السويس'],
    ['شروط التسليم', 'FOB · CFI · CFR'],
  ],
}

export const quote = {
  title: 'طلب عرض سعر',
  body: 'أرسل المقاس والكمية والميناء. نرد بمواصفة مكتوبة وسعر ثابت صالح لأسبوعين، مع شهادة تحليل للدفعة التي ستُشحن فعلاً.',
  cta: 'اطلب عرض سعر',
  meta: [
    ['هاتف', '+20 110 753 9914'],
    ['بريد', 'info@sinaicore.com'],
    ['عنوان', 'العريش — شمال سيناء، مصر'],
  ],
}

export const colophon = {
  line1: 'ملاحظات الميدان',
  line2: 'SinaiCore · At the Core of Quality and Purity',
  note: 'موقع واحد. الملاحظات الميدانية وتحميل الحاويات أقسام داخل هذه الصفحة.',
  links: [
    ['الصفحة الرئيسية', '/'],
    ['ملاحظات الميدان', '#process'],
    ['تحميل الحاويات', '#logistics'],
  ],
}

/* ------------------------------------------------------------------ *
 * The container act — four stops, opening the doors to clearing the
 * berth. Merged from the container cut, which was the only one of the
 * four that answered "how does it physically leave".
 *
 * It runs inside the logistics section, after the sack plate: the sack
 * is what goes in, this is what it goes in to.
 * ------------------------------------------------------------------ */
export type LoadStop = {
  id: string
  index: string
  label: string
  labelLat: string
  title: string
  body: string
  facts: { k: string; v: string }[]
}

export const loadStops: LoadStop[] = [
  {
    id: 'open',
    index: '01',
    label: 'الحاوية فارغة',
    labelLat: 'DOORS OPEN',
    title: 'حاوية فارغة،\nمساحة مكشوفة',
    body: 'حاوية ٢٠ أو ٤٠ قدم بحالة تصدير، أبواب مفتوحة على أرضية خشبية وأربعة أعمدة زاوية. من هنا نبدأ حساب السعة قبل أي شكارة تدخل.',
    facts: [
      { k: '20 FT', v: '33.2 m³' },
      { k: '40 FT', v: '67.7 m³' },
      { k: 'GW', v: '30,480 kg' },
    ],
  },
  {
    id: 'load',
    index: '02',
    label: 'التعبئة الهندسية',
    labelLat: 'ENGINEERED LOADING',
    title: 'شكائر الجامبو\nبنظام هندسي',
    body: 'شكائر جامبو ١.٥ طن تُرتّب في صفوف محسوبة على عرض الحاوية، وفوقها طبقة من شكائر ٥٠ كجم لسدّ الفراغات. كل شكارة تُخاط وتُرقّم قبل التحميل.',
    facts: [
      { k: 'FIBC', v: '1.5 MT' },
      { k: 'ROWS', v: '4 × 2' },
      { k: 'TOP-UP', v: '50 kg × 10' },
    ],
  },
  {
    id: 'seal',
    index: '03',
    label: 'الغلق والختم',
    labelLat: 'SEALED & STAMPED',
    title: 'تُغلق الأبواب\nوتُختم للتصدير',
    body: 'أبواب الحاوية تُغلق على أربع قوائم إحكام، ويُركّب الختم الرصاصي برقم الشحنة. من هذه اللحظة تصبح الشحنة مغلقة وموثّقة حتى ميناء الوصول.',
    facts: [
      { k: 'SEAL', v: 'Bolt · numbered' },
      { k: 'DOORS', v: '4 locking bars' },
      { k: 'DOCS', v: 'COA · Packing list' },
    ],
  },
  {
    id: 'sail',
    index: '04',
    label: 'الإبحار',
    labelLat: 'FOB ARISH / SUEZ',
    title: 'من العريش وبورسعيد\nإلى العالم',
    body: 'تُرفع الحاوية على متن السفينة وتتحرك على خطوط الملاحة من ميناء العريش للسوائب أو من السويس وشرق بورسعيد التفريعة للحاويات، نحو وجهات التصدير.',
    facts: [
      { k: 'FOB', v: 'Arish · Suez' },
      { k: 'MODES', v: '20 ft · 40 ft' },
      { k: 'MARKETS', v: 'EU · Asia · Gulf' },
    ],
  },
]

/* Sailing lines out of Sinai, with the transit times the container cut
   carried. These are the only transit figures anywhere in the document,
   so they belong next to the ports rather than in a separate page. */
export const seaRoutes = [
  { id: 'gibraltar', name: 'أوروبا', nameLat: 'Europe · Rotterdam', note: '10–12 d' },
  { id: 'suez-bab', name: 'آسيا', nameLat: 'Asia · Shanghai', note: '22–26 d' },
  { id: 'gulf', name: 'الخليج', nameLat: 'Gulf · Jebel Ali', note: '4–6 d' },
  { id: 'eastafrica', name: 'شرق أفريقيا', nameLat: 'E. Africa · Mombasa', note: '8–10 d' },
]

/** The packing formats the published page actually offers, as one list so
 *  the quote builder and the FAQ cannot drift apart. */
export const packings = [
  'شكائر 25 كجم',
  'شكائر 50 كجم',
  'شكائر جامبو FIBC — 1 طن',
  'شكائر جامبو FIBC — 1.5 طن',
  'سائب (Bulk)',
]
