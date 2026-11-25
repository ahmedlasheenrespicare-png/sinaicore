export type Stat = { value: string; label: string }

export type Chapter = {
  id: string
  number: string
  nav: string
  eyebrow: string
  stageLabel: string
  title: string
  lead: string
  body: string
  note?: string
  stats: [Stat, Stat]
  plate: string
  caption: string
  spec?: boolean
}

export const chapters: Chapter[] = [
  {
    id: 'chapter-01',
    number: '01',
    nav: 'المياه',
    eyebrow: 'SEAWATER / NAVIGATION',
    stageLabel: 'SEA WATER · NaCl 26%',
    title: 'بدأت الحكاية ماءً',
    lead: 'على الساحل الشمالي لسيناء، يبدأ الملح قبل أن يظهر منه أي أثر.',
    body: 'تُضخّ مياه البحر إلى أحواض واسعة تفصلها جسور ترابية. تبدأ البلورات بالتكوّن في تيار بطيء، ويأخذ الماء لونه الفيروزي قبل أن تأخذ القشرة شكلها.',
    note: 'الملح ليس مادةً تُصنع بقدر ما هي مادةٌ تُستخرج من توقيت الشمس والريح.',
    stats: [
      { value: '32°', label: 'حرارة الماء عند الضخ' },
      { value: '1.025', label: 'الكثافة النوعية' },
    ],
    plate: '/plates/01-sea.jpg',
    caption: 'أحواض التبخير على الساحل الشمالي لسيناء. تصوير وثائقي.',
  },
  {
    id: 'chapter-02',
    number: '02',
    nav: 'التبخّر',
    eyebrow: 'EVAPORATION / CRYSTALLISATION',
    stageLabel: 'EVAPORATION · CRUST FORMING',
    title: 'الشمس تصنع أول بلورة',
    lead: 'لا آلة هنا؛ حرارة النهار وبرودة الليل تتولّيان تركيز المحلول.',
    body: 'يتبخّر الماء طبقةً بعد طبقة، وترتفع الملوحة حتى يتجاوز المحلول تشبّعه. عند حواف الحوض تظهر قشرة رقيقة تتوسّع يوماً بعد يوم.',
    stats: [
      { value: '40%', label: 'فقدان الماء في الأحواض' },
      { value: '24 ساعة', label: 'دورة التبلور' },
    ],
    plate: '/plates/02-evaporation.jpg',
    caption: 'بلورات تتكوّن على حافة حوض مالح مع أولى خيوط الفجر.',
  },
  {
    id: 'chapter-03',
    number: '03',
    nav: 'الحصاد',
    eyebrow: 'HARVEST / FRACTURE',
    stageLabel: 'FRACTURE · LINEAR CUT',
    title: 'القشرة تنكسر خطاً مستقيماً',
    lead: 'اللحظة التي يتحوّل فيها السطح المائي إلى لوحٍ ملحي قابل للحصاد.',
    body: 'يُجرى شقّ مستقيم في القشرة المتماسكة، فتنفصل الألواح عن قاع الحوض. تُرفع وتُترك لتجفّ قبل أن تبدأ رحلة التنقية.',
    note: 'الخط المستقيم ليس جمالياً؛ إنه أقلّ طرق الكسر فقداناً للحبيبات.',
    stats: [
      { value: '15 سم', label: 'متوسط سماكة القشرة' },
      { value: '12', label: 'خطوة للفرز اليدوي' },
    ],
    plate: '/plates/03-harvest.jpg',
    caption: 'عمّال الحصاد يفصلون القشرة الملحية عند أوائل النهار.',
  },
  {
    id: 'chapter-04',
    number: '04',
    nav: 'الغسيل',
    eyebrow: 'WASHING / SEPARATION',
    stageLabel: 'WASH · VORTEX SEPARATION',
    title: 'الشوائب تسقط، والملح يبقى',
    lead: 'داخل تيار مائي دوّار، تفترق الحبيبات عمّا علق بها من طين ومعادن.',
    body: 'يُغسل الملح بمحلول مشبع: الشوائب الخفيفة تطفو، والثقيلة تغرق، وتبقى البلورات البيضاء. تتكرّر العملية حتى يصبح اللون صافياً.',
    stats: [
      { value: '3', label: 'مراحل الغسيل المتتالية' },
      { value: '0.2%', label: 'الرطوبة بعد الغسيل' },
    ],
    plate: '/plates/04-wash.jpg',
    caption: 'غسل الحبيبات في تيار مائي دوّار داخل حوض الترسيب.',
  },
  {
    id: 'chapter-05',
    number: '05',
    nav: 'التكرير',
    eyebrow: 'REFINING / SINGLE CRYSTAL',
    stageLabel: 'NaCl 99.5% · SINGLE CRYSTAL',
    title: 'نقاء يُرى من الداخل',
    lead: 'تقترب الكاميرا من بلورة واحدة؛ مكعّب شفّاف حاد الحواف.',
    body: 'تُعاد بلورة الملح تحت ظروف مضبوطة، فيصبح مكعّبها قادراً على تمرير الضوء وانكساره. عند هذه النقطة يصل تركيز NaCl إلى 99.5%.',
    note: 'معامل انكسار الملح 1.544؛ قريب من الزجاج، لكنه ينمو طبقةً طبقة من محلول مالح.',
    stats: [
      { value: '99.5%', label: 'نقاء NaCl' },
      { value: '1.544', label: 'معامل الانكسار' },
    ],
    plate: '/plates/05-refine.jpg',
    caption: 'بلورة مكعّبة نقية تحت ضوء المختبر.',
  },
  {
    id: 'chapter-06',
    number: '06',
    nav: 'الفرز',
    eyebrow: 'SIEVING / THREE FRACTIONS',
    stageLabel: 'SIEVING · 3 FRACTIONS',
    title: 'ثلاث شبكات، ثلاثة أحجام',
    lead: 'كل حبيبة تجد مقاسها، ولا شيء يُهدر.',
    body: 'تمرّ الحبيبات عبر ثلاثة أغرابلة بفتائل متدرّجة: خشن للصناعة، ومتوسط للمائدة، وناعم للمنتجات الغذائية الدقيقة.',
    stats: [
      { value: '3', label: 'أحجام فرزية' },
      { value: '0 / 2', label: 'فجوات الغربال' },
    ],
    plate: '/plates/06-sort.jpg',
    caption: 'أغرابلة معدنية تفصل الحبيبات حسب الحجم.',
  },
  {
    id: 'chapter-07',
    number: '07',
    nav: 'التعبئة',
    eyebrow: 'PACKING / 50 KG',
    stageLabel: '50 KG · PRINTED SACK',
    title: 'خمسون كيلوغراماً تحمل الاسم',
    lead: 'من الحوض إلى شكارة مطبوعة، ثم إلى حاوية جاهزة للسفر.',
    body: 'تُوزَّن الشكارة وتُختم ببيانات الدفعة، ثم تُرصّ على منصات داخل الحاوية. يبقى الملح بعيداً عن الرطوبة حتى يصل إلى وجهته.',
    stats: [
      { value: '50 كجم', label: 'وزن الشكارة' },
      { value: '20', label: 'شكارة في الطن' },
    ],
    plate: '/plates/07-pack.jpg',
    caption: 'شكارات مرصوفة داخل حاوية الشحن قبل الإغلاق.',
  },
  {
    id: 'chapter-08',
    number: '08',
    nav: 'التحليل',
    eyebrow: 'ANALYSIS / CERTIFICATE',
    stageLabel: 'SEALED CONTAINER · COA',
    title: 'المواصفات تقول الكلمة الأخيرة',
    lead: 'تُغلق الحاوية، ويبقى جدول التحليل شاهداً على الرحلة كلها.',
    body: 'تُفحص عيّنة من كل دفعة ويُقارن تركيبها بالمواصفات المعتمدة. وحين تطابق الأرقام التوقّعات، يغادر الملح سيناء في طريقه إلى المائدة.',
    stats: [
      { value: '99.5%', label: 'NaCl معتمد' },
      { value: 'SC-08', label: 'رقم الدفعة' },
    ],
    plate: '/plates/08-analysis.jpg',
    caption: 'فحص العيّنة قبل اعتماد الدفعة النهائية.',
    spec: true,
  },
]

export const specRows: [string, string][] = [
  ['NaCl', '99.5 %'],
  ['H₂O', '0.18 %'],
  ['CaSO₄', '0.05 %'],
  ['MgCl₂', '0.02 %'],
  ['حجم الحبيبة', 'متوسط / ناعم'],
]
