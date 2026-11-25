export type SpecSheet = {
  id: string
  marker: string
  kicker: string
  title: string
  lead: string
  rows: { label: string; value: string; hint?: string }[]
  footnote: string
}

/** The cards behind the 3D hotspots. All numbers are the product's own. */
export const specSheets: SpecSheet[] = [
  {
    id: 'purity',
    marker: '99.5',
    kicker: 'HOTSPOT 01 / PURITY',
    title: 'نقاء البلورة',
    lead: 'ما يتبقّى بعد التكرير والغسل: كلوريد صوديوم بنسبة 99.5% على أساس الوزن الجاف.',
    rows: [
      { label: 'NaCl', value: '99.5 %', hint: 'الحد الأدنى' },
      { label: 'الشوائب غير الذائبة', value: '0.04 %' },
      { label: 'كبريتات الكالسيوم', value: '0.05 %' },
      { label: 'كلوريد المغنيسيوم', value: '0.02 %' },
    ],
    footnote: 'تحليل معمل مستقل — لوط SC-08 · سيناء، مصر.',
  },
  {
    id: 'moisture',
    marker: '0.18%',
    kicker: 'HOTSPOT 02 / MOISTURE',
    title: 'الرطوبة عند التعبئة',
    lead: 'يُقاس الماء بالتجفيف في فرن 110° مئوية حتى ثبات الوزن، قبل الختم مباشرة.',
    rows: [
      { label: 'الرطوبة', value: '0.18 %', hint: 'الحد الأقصى 0.20%' },
      { label: 'درجة حرارة التعبئة', value: '24 °C' },
      { label: 'الرطوبة النسبية', value: '38 %' },
      { label: 'زمن التجفيف', value: '120 دقيقة' },
    ],
    footnote: 'كل شيكارة تحمل رقم لوط يربطها بهذا القياس.',
  },
  {
    id: 'layers',
    marker: '03',
    kicker: 'HOTSPOT 03 / PACKAGING',
    title: 'طبقات التغليف',
    lead: 'ثلاث طبقات تفصل الملح عن الهواء: بطانة، نسيج، وطبقة الطباعة الخارجية.',
    rows: [
      { label: '01 · بطانة PE', value: '60 µm', hint: 'حاجز رطوبة' },
      { label: '02 · نسيج PP', value: '110 g/m²', hint: 'قوّة شدّ' },
      { label: '03 · طباعة خارجية', value: '6 ألوان', hint: 'حبر مائي' },
      { label: 'الوزن الصافي', value: '50 kg' },
    ],
    footnote: 'خياطة مزدوجة أعلى الشيكارة مع شريط ختم حراري.',
  },
  {
    id: 'seal',
    marker: 'SC-08',
    kicker: 'HOTSPOT 04 / SHIPMENT',
    title: 'الحاوية المختومة',
    lead: 'من الشيكارة إلى الحاوية: سجلّ واحد يتابع الحرارة والرطوبة حتى نقطة الوصول.',
    rows: [
      { label: 'الحاوية', value: '40ft HC', hint: 'مبطّنة' },
      { label: 'الحمولة', value: '25 طن' },
      { label: 'رقم الختم', value: 'SC-08' },
      { label: 'سجل الحرارة', value: '18—26 °C' },
    ],
    footnote: 'كل حاوية تُفتح أمام المشتري بختم سليم وغير مكسور.',
  },
]
