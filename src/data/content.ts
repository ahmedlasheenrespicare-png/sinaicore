/**
 * All copy and figures for the experience.
 *
 * Sourced from the official SinaiCore site (sinaicore.com): product specs,
 * packaging formats, Incoterms, offices and contact details.
 */

export type Chapter = {
  id: string
  index: string
  label: string
  labelAr: string
  /** in-page target when the station lives outside the pinned act */
  anchor?: string
}

/**
 * Five stations. 01–04 live inside the pinned WebGL act; 05 is the quote
 * section, where the sample jar is parked beside the form.
 */
export const chapters: Chapter[] = [
  { id: 'crystal', index: '01', label: 'Hero · Halite', labelAr: 'بلورة الهاليت' },
  { id: 'purity', index: '02', label: 'Quality', labelAr: 'النقاء والمعالجة' },
  { id: 'packing', index: '03', label: 'Packaging', labelAr: 'التعبئة والمنتجات' },
  { id: 'export', index: '04', label: 'Ports', labelAr: 'الموانئ واللوجستيات' },
  { id: 'quote', index: '05', label: 'Quote', labelAr: 'طلب عرض سعر', anchor: 'contact' },
]

/** Chapter 02 — the specification rows that scroll past the 3D tablets. */
export const hotspots = [
  {
    id: 'nacl',
    value: '≥ 99.5%',
    label: 'نقاء كلوريد الصوديوم',
    sub: 'NaCl · dry basis',
    body: 'ملح مكرر بالتبخير الفراغي من مُنتجين مؤهّلين في سيناء الشمالية، يُدار وفق مواصفات العميل ومتطلبات التصدير.',
    metric: 99.5,
  },
  {
    id: 'insol',
    value: '2 ppm',
    label: 'مواد غير ذائبة',
    sub: 'Insolubles · typical',
    body: 'غسيل متعدد المراحل بمحلول مشبّع يزيل الطمي والجبس العالق قبل مرحلة التبلور والتجفيف.',
    metric: 92,
  },
  {
    id: 'moisture',
    value: '≤ 0.2%',
    label: 'الرطوبة',
    sub: 'Moisture · refined',
    body: 'تحكّم صارم في الرطوبة ومضادات التكتّل للحفاظ على ثبات المنتج أثناء التخزين والنقل البحري.',
    metric: 88,
  },
  {
    id: 'granulometry',
    value: '0.2–0.8',
    label: 'توزيع حبيبي مدروس',
    sub: 'Particle size · mm',
    body: 'تقارير تحليل شبكي (Sieve Analysis) تطابق التطبيق: منظفات المياه، الصناعة، أو إذابة الجليد.',
    metric: 84,
  },
  {
    id: 'intertek',
    value: 'Intertek',
    label: 'تحليل طرف ثالث',
    sub: 'Independent COA',
    body: 'كل تشغيلة يمكن دعمها بشهادة تحليل (COA) صادرة أو موثّقة من معمل مستقل، حسب الشروط التعاقدية.',
    metric: 96,
  },
  {
    id: 'standards',
    value: 'ISO · ASTM',
    label: 'معايير ومواصفات',
    sub: 'EN · BS where applicable',
    body: 'يُختار المنتج ويُختبر ويُوثّق وفق متطلبات العميل والمعايير الدولية المعنية، مع سجل تعقّب كامل للتشغيلة.',
    metric: 90,
  },
]

/** Full technical sheet (chapter 02 → data sheet section). */
export const specs = [
  { k: 'NaCl', v: '≥ 99.50%', note: 'refined' },
  { k: 'Moisture', v: '≤ 0.20%', note: 'max' },
  { k: 'NaCl', v: '≥ 98.50%', note: 'washed' },
  { k: 'Moisture', v: '≤ 3.0%', note: 'washed' },
  { k: 'NaCl', v: '≥ 98.00%', note: 'de-icing' },
  { k: 'NaCl', v: '≥ 97.00%', note: 'marine' },
  { k: 'Granulometry', v: 'per application', note: 'sieve' },
  { k: 'Anti-caking', v: 'monitored', note: 'batch' },
]

/** Product portfolio exactly as published. */
export const products = [
  {
    id: 'refined',
    tagAr: 'غذائي / صناعي',
    tagEn: 'Premium refined',
    title: 'ملح مكرر فاخر',
    nacl: '≥ 99.5%',
    moisture: '≤ 0.2%',
    body: 'تبخير فراغي متحكّم فيه، حبيبة فائقة النقاء للصناعات الغذائية والتطبيقات الصناعية الدقيقة.',
    img: '/brand/logo-mark.png',
    photo: '/img/refined-grades.png',
    grade: 'Fine · Coarse',
  },
  {
    id: 'washed',
    tagAr: 'صناعي',
    tagEn: 'Industrial washed',
    title: 'ملح مغسول صناعي',
    nacl: '≥ 98.5%',
    moisture: '≤ 3%',
    body: 'غسيل وفرز وتصنيف على أسس محدّدة، من مُنتجين مؤهّلين في سيناء الشمالية.',
    img: '/img/washed-salt.jpg',
    photo: '/img/washed-salt.jpg',
    grade: 'Washed · Graded',
  },
  {
    id: 'deicing',
    tagAr: 'صيانة شتوية',
    tagEn: 'De-icing',
    title: 'ملح إذابة الجليد',
    nacl: '≥ 98.0%',
    moisture: '≤ 3%',
    body: 'نطاقات حجمية مناسبة لصيانة الطرق والشتاء، بمواصفات تُعدّل حسب السوق والعميل.',
    img: '/img/raw-salt.jpg',
    photo: '/img/raw-salt.jpg',
    grade: 'Coarse · Rock',
  },
  {
    id: 'softening',
    tagAr: 'معالجة مياه',
    tagEn: 'Water softening',
    title: 'أقراص تطرية المياه',
    nacl: '≥ 99.5%',
    moisture: '≤ 0.2%',
    body: 'أقراص مضغوطة بدقة لعملية تجديد الراتنج في وحدات التطرية المنزلية والصناعية.',
    img: '/img/water-softener.png',
    photo: '/img/water-softener.png',
    grade: '10g · 25g · 50g',
  },
  {
    id: 'marine',
    tagAr: 'صناعي',
    tagEn: 'Marine salt',
    title: 'ملح بحري طبيعي',
    nacl: '≥ 97.0%',
    moisture: '≤ 4%',
    body: 'تبخير شمسي طبيعي للتطبيقات الصناعية والتجارية، بمواصفات تُدار حسب طلب العميل.',
    img: '/img/raw-salt.jpg',
    photo: '/img/raw-salt.jpg',
    grade: 'Solar · Natural',
  },
]

/** Packaging & logistics, straight from the published options. */
export const packaging = {
  title: 'شكارة جامبو ١ طن',
  titleLat: 'FIBC · 1 MT — 1.5 MT',
  rows: [
    { k: 'الخامة', v: 'PP / PE export grade' },
    { k: 'الحمولة', v: '1 MT – 1.5 MT' },
    { k: 'الأذرع', v: 'Reinforced loops' },
    { k: 'التفريغ', v: 'Bottom spout' },
    { k: 'العبوات', v: '25 kg · 50 kg · Sling' },
    { k: 'الشحن', v: 'Container · Bulk vessel' },
  ],
  features: [
    'أكياس PP/PE بمواصفات تصدير، متاحة بصيغ متعددة تشمل الشحن بالحاويات أو السفن.',
    'شكائر جامبو ١ إلى ١.٥ طن بأذرع رفع مقوّاة وفتحة تفريغ سفلية.',
    'تحميل سفن سائبة للكميات الكبيرة وفق اشتراطات الميناء والسفينة.',
    'كل شكارة تُرقّم وتُخاط قبل مغادرة خط التعبئة.',
  ],
}

/** Export gateways — exact Incoterms wording. */
export const ports = [
  {
    id: 'arish',
    name: 'ميناء العريش',
    nameLat: 'FOB ARISH PORT',
    coords: '31.13°N 33.80°E',
    lat: 31.13,
    lon: 33.8,
    role: 'سوائب وسفن مستأجرة',
    dist: 'BULK · JUMBO · SLING',
  },
  {
    id: 'suez',
    name: 'السويس / شرق بورسعيد التفريعة',
    nameLat: 'SUEZ · PORT SAID EAST',
    coords: '29.97°N 32.53°E',
    lat: 29.97,
    lon: 32.53,
    role: 'شحن بالحاويات ٢٠ و٤٠ قدم',
    dist: '20 ft · 40 ft',
  },
]

export const destinations = [
  { id: 'europe', name: 'أوروبا', nameLat: 'Europe', lat: 51.95, lon: 4.14, country: 'EU', line: 'غذائي · تطرية' },
  { id: 'asia', name: 'آسيا', nameLat: 'Asia', lat: 31.23, lon: 121.47, country: 'CN', line: 'صناعي · كيماوي' },
  { id: 'africa', name: 'أفريقيا', nameLat: 'Africa', lat: -29.86, lon: 31.02, country: 'ZA', line: 'تعدين · طرق' },
  { id: 'namerica', name: 'أمريكا الشمالية', nameLat: 'N. America', lat: 40.71, lon: -74.0, country: 'US', line: 'تطرية منزلية' },
  { id: 'samerica', name: 'أمريكا الجنوبية', nameLat: 'S. America', lat: -23.96, lon: -46.33, country: 'BR', line: 'غذائي' },
  { id: 'australia', name: 'أستراليا', nameLat: 'Australia', lat: -33.86, lon: 151.21, country: 'AU', line: 'صيانة شتوية' },
  { id: 'gulf', name: 'الخليج', nameLat: 'Gulf', lat: 21.49, lon: 39.17, country: 'SA', line: 'مياه · تكييف' },
  { id: 'turkiye', name: 'تركيا', nameLat: 'Türkiye', lat: 41.0, lon: 28.97, country: 'TR', line: 'تطرية مياه' },
]

export const pillars = [
  {
    n: '01',
    title: 'مصدر بحري استراتيجي',
    titleEn: 'Strategic marine sourcing',
    body: 'ننسّق التوريد من مُنتجي ملح بحري مؤهّلين في سيناء الشمالية، بما يمنح عملاءنا كميات موثوقة ومواصفات مرنة ومنتجات جاهزة للتصدير.',
  },
  {
    n: '02',
    title: 'ضبط الجودة والتشغيلات',
    titleEn: 'Quality & batch control',
    body: 'ننسّق اختيار المنتج واختبار التشغيلة وضبط المواصفات، بدعم من تحليل معامل مستقلة عند الحاجة.',
  },
  {
    n: '03',
    title: 'لوجستيات وتوثيق التصدير',
    titleEn: 'Export logistics',
    body: 'خدمات تصدير منظّمة من تأكيد الطلب حتى الشحن: اختيار الميناء، الشحن السائب والحاويات، التوثيق، التفتيش، وجداول الإبحار.',
  },
]

export const process = [
  { n: '01', t: 'الاستفسار', d: 'شاركنا المواصفات والكميات، ويراجع فريقنا متطلباتك ويقدّم الإرشاد.', tag: 'INQUIRY' },
  { n: '02', t: 'العيّنات والعرض', d: 'عرض سعر وعيّنات مع شهادة تحليل كاملة لتقييم المنتج.', tag: 'SAMPLING' },
  { n: '03', t: 'تأكيد الطلب', d: 'تثبيت المواصفة والتعبئة والشروط التعاقدية.', tag: 'CONFIRMATION' },
  { n: '04', t: 'التعبئة والتوثيق', d: 'تعبئة وترقيم وخياطة، ثم مستندات التصدير والتفتيش.', tag: 'PACKING' },
  { n: '05', t: 'الشحن', d: 'تحميل الحاويات أو السفن السائبة من العريش أو السويس.', tag: 'LOADING' },
  { n: '06', t: 'التسليم', d: 'متابعة الإبحار حتى وصول الشحنة وتوثيقها لدى العميل.', tag: 'DELIVERY' },
]

export const compliance = [
  { k: 'ISO', v: 'إجراءات متوافقة' },
  { k: 'ASTM', v: 'مواصفات مرجعية' },
  { k: 'EN', v: 'حيث ينطبق' },
  { k: 'BS', v: 'حيث ينطبق' },
]

export const contact = {
  email: 'info@sinaicore.com',
  phone: '+20 110 753 9914',
  site: 'sinaicore.com',
  offices: [
    {
      id: 'arish',
      name: 'مكتب العريش',
      nameEn: 'El Arish Office',
      lines: ['تقاطع شارع أسيوط', 'وشارع النافورة', 'بجوار محطة كارجاز', 'العريش — سيناء الشمالية'],
    },
    {
      id: 'cairo',
      name: 'مكتب القاهرة',
      nameEn: 'Cairo Office',
      lines: ['فيلا ١٦٧ — شارع علي السباعي', 'الياسمين ٤ — التجمع الأول', 'القاهرة الجديدة'],
    },
  ],
}

export const stats = [
  { v: '99.5', unit: '%', label: 'نقاء NaCl' },
  { v: '1.5', unit: 'MT', label: 'أقصى حمولة جامبو' },
  { v: '2', unit: '', label: 'ميناء تصدير' },
  { v: '6', unit: '', label: 'قارات مخدومة' },
]

export const nav = [
  { id: 'crystal', label: 'المصدر' },
  { id: 'purity', label: 'النقاء' },
  { id: 'packing', label: 'التعبئة' },
  { id: 'export', label: 'التصدير' },
  { id: 'products', label: 'المنتجات' },
  { id: 'contact', label: 'تواصل' },
]
