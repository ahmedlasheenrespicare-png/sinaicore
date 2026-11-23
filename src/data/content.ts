/** All copy and figures for the experience, kept separate from markup. */

export type Chapter = {
  id: string
  index: string
  label: string
  labelAr: string
}

export const chapters: Chapter[] = [
  { id: 'crystal', index: '01', label: 'Halite', labelAr: 'البلورة الخام' },
  { id: 'purity', index: '02', label: 'Purity', labelAr: 'النقاء والمعالجة' },
  { id: 'packing', index: '03', label: 'Packing', labelAr: 'التعبئة' },
  { id: 'export', index: '04', label: 'Export', labelAr: 'خطوط التصدير' },
]

export const hotspots = [
  {
    id: 'nacl',
    value: '99.5%',
    label: 'نقاء كلوريد الصوديوم',
    sub: 'NaCl · dry basis',
    body: 'تحليل معملي لكل شحنة: الفقد بالحرق عند ٥٥٠°م، ورطوبة أقل من ٠٫١٪، ولا تلوث معدني.',
    metric: 99.5,
  },
  {
    id: 'insol',
    value: '0.08%',
    label: 'مواد غير ذائبة',
    sub: 'Insolubles · max',
    body: 'شطف متعدد المراحل بمحلول محلّى مشبّع يزيل الطمي والجبس العالق قبل التجفيف.',
    metric: 100 - 92,
  },
  {
    id: 'moisture',
    value: '≤0.1%',
    label: 'الرطوبة',
    sub: 'Moisture · at 110°C',
    body: 'تجفيف هواء ساخن مضبوط الحرارة يحافظ على حرّية التدفّق ويمنع التكتّل داخل الشكارة.',
    metric: 90,
  },
  {
    id: 'grain',
    value: '0.3–1.2 mm',
    label: 'تحبّب مدروس',
    sub: 'Particle size · D50',
    body: 'غربلة دقيقة تنتج مقاساً متجانساً يناسب أقراص تطرية المياه وخلطات الصناعة الغذائية.',
    metric: 84,
  },
  {
    id: 'iso',
    value: 'ISO 22000',
    label: 'سلامة الغذاء',
    sub: 'FSSC 22000 · HACCP',
    body: 'خط إنتاج مراقب بنظام HACCP، مع سجلات تعقّب من المحجر حتى الحاوية.',
    metric: 96,
  },
  {
    id: 'halal',
    value: 'Halal · Kosher',
    label: 'اعتمادات الشحن',
    sub: 'Halal · Kosher · SGS',
    body: 'شهادات معتمدة تصاحب كل حاوية، مع تحليل طرف ثالث من معامل مستقلة.',
    metric: 88,
  },
]

export const specs = [
  { k: 'NaCl', v: '99.50%', note: 'min' },
  { k: 'Ca²⁺', v: '0.05%', note: 'max' },
  { k: 'Mg²⁺', v: '0.02%', note: 'max' },
  { k: 'SO₄²⁻', v: '0.12%', note: 'max' },
  { k: 'Insolubles', v: '0.08%', note: 'max' },
  { k: 'Moisture', v: '0.10%', note: 'max' },
  { k: 'Whiteness', v: '88°', note: 'ISO' },
  { k: 'Bulk density', v: '1.12 g/cm³', note: 'loose' },
]

export const packaging = {
  title: 'شكارة جامبو ١ طن',
  titleLat: 'FIBC · 1 MT',
  rows: [
    { k: 'الحمولة', v: '1000 kg ± 1%' },
    { k: 'الخامة', v: 'بولي بروبيلين منسوج' },
    { k: 'الوزن الذاتي', v: '2.4 kg' },
    { k: 'الأبعاد', v: '90 × 90 × 110 cm' },
    { k: 'الحمل الآمن', v: '5:1 · SWL' },
    { k: 'البطانة', v: 'LDPE 80 µm' },
  ],
  features: [
    'أربع أذرع رفع مقوّاة بخياطة مزدوجة تتحمل ٥ أضعاف الحمل الآمن.',
    'بطانة داخلية عازلة للرطوبة تمنع التكتّل أثناء العبور البحري.',
    'طباعة شعار SinaiCore ورقم التشغيلة وباركود التتبع على الوجهين.',
    'فتحة تعبئة علوية وفتحة تفريغ سفلية بمشبك أمان.',
  ],
}

export const ports = [
  {
    id: 'arish',
    name: 'ميناء العريش',
    nameLat: 'El Arish',
    coords: '31.13°N 33.80°E',
    lat: 31.13,
    lon: 33.8,
    role: 'منشأ الشحن — البحر المتوسط',
    dist: 'لا يوجد',
  },
  {
    id: 'suez',
    name: 'ميناء السويس',
    nameLat: 'Suez',
    coords: '29.97°N 32.53°E',
    lat: 29.97,
    lon: 32.53,
    role: 'محور العبور — قناة السويس',
    dist: '320 nautical mi',
  },
]

export const destinations = [
  { id: 'rotterdam', name: 'روتردام', nameLat: 'Rotterdam', lat: 51.95, lon: 4.14, country: 'هولندا', line: 'المياه والصرف الصحي' },
  { id: 'hamburg', name: 'هامبورغ', nameLat: 'Hamburg', lat: 53.55, lon: 9.99, country: 'ألمانيا', line: 'الصناعة الكيميائية' },
  { id: 'istanbul', name: 'إستانبول', nameLat: 'Istanbul', lat: 41.0, lon: 28.97, country: 'تركيا', line: 'أنظمة تطرية المياه' },
  { id: 'jeddah', name: 'جدة', nameLat: 'Jeddah', lat: 21.49, lon: 39.17, country: 'السعودية', line: 'المياه والتكييف' },
  { id: 'mumbai', name: 'مومباي', nameLat: 'Mumbai', lat: 19.07, lon: 72.87, country: 'الهند', line: 'الغذاء والنسيج' },
  { id: 'singapore', name: 'سنغافورة', nameLat: 'Singapore', lat: 1.29, lon: 103.85, country: 'سنغافورة', line: 'التبادل التجاري' },
  { id: 'shanghai', name: 'شنغهاي', nameLat: 'Shanghai', lat: 31.23, lon: 121.47, country: 'الصين', line: 'الكلور والقلويات' },
  { id: 'newyork', name: 'نيويورك', nameLat: 'New York', lat: 40.71, lon: -74.0, country: 'الولايات المتحدة', line: 'التطرية المنزلية' },
  { id: 'santos', name: 'سانتوس', nameLat: 'Santos', lat: -23.96, lon: -46.33, country: 'البرازيل', line: 'الصناعة الغذائية' },
  { id: 'durban', name: 'ديربان', nameLat: 'Durban', lat: -29.86, lon: 31.02, country: 'جنوب أفريقيا', line: 'التعدين' },
]

export const stats = [
  { v: '99.5', unit: '%', label: 'نقاء NaCl' },
  { v: '1', unit: 'MT', label: 'شكارة جامبو' },
  { v: '2', unit: '', label: 'ميناء تصدير' },
  { v: '10', unit: '+', label: 'أسواق مستهدفة' },
]

export const nav = [
  { id: 'crystal', label: 'السلسلة' },
  { id: 'purity', label: 'النقاء' },
  { id: 'packing', label: 'التعبئة' },
  { id: 'export', label: 'التصدير' },
]
