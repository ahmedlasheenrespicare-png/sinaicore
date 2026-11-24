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
