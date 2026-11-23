/** Shared copy + figures for the container cut. */

export type Stop = {
  id: string
  index: string
  label: string
  labelLat: string
  title: string
  body: string
  facts: { k: string; v: string }[]
}

export const stops: Stop[] = [
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

export const seaPorts = [
  { id: 'arish', name: 'العريش', lat: 'EL ARISH', lon: 33.8, lat0: 31.13 },
  { id: 'suez', name: 'بورسعيد', lat: 'PORT SAID', lon: 32.3, lat0: 31.26 },
]

export const seaRoutes = [
  { id: 'gibraltar', name: 'أوروبا', nameLat: 'Europe · Rotterdam', lat: 36.0, lon: -5.4, note: '10–12 d' },
  { id: 'suez-bab', name: 'آسيا', nameLat: 'Asia · Shanghai', lat: 12.6, lon: 43.3, note: '22–26 d' },
  { id: 'gulf', name: 'الخليج', nameLat: 'Gulf · Jebel Ali', lat: 26.2, lon: 50.2, note: '4–6 d' },
  { id: 'eastafrica', name: 'شرق أفريقيا', nameLat: 'E. Africa · Mombasa', lat: -6.8, lon: 39.3, note: '8–10 d' },
]
