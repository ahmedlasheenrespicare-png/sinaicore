/* -------------------------------------------------------------------------- */
/*  The product line                                                          */
/* -------------------------------------------------------------------------- */
/*  One scene, five products. Everything that changes when the reader picks    */
/*  another product lives here — the sack, the falling particles, and every    */
/*  number the story prints. Nothing in this file knows about three.js;         */
/*  main.js reads it and rebuilds only what has to change.                     */
/*                                                                            */
/*  Numbers are the product's own: edit them here and the page follows.        */
/* -------------------------------------------------------------------------- */

const L = (en, ar) => ({ en, ar })

export const PRODUCT_ORDER = ['tablets', 'refined', 'washed', 'rock', 'road']

export const PRODUCTS = {
  /* 01 — the flagship: compressed tablets in a 50 kg sack ------------------ */
  tablets: {
    id: 'tablets',
    short: L('Tablets', 'أقراص'),
    name: L('Compressed tablets', 'أقراص مضغوطة'),
    sack: { texture: null, scale: 1, back: 1 },
    particle: { kind: 'tablet', count: 64, size: 1, tint: '#f7f5ee', rough: 0.86 },
    hero: {
      title: L('Salt, pressed.', 'ملح، مضغوط.'),
      line: L(
        'Fifty kilos of compressed tablets, sealed in a laminated sack.',
        'خمسون كيلو من الأقراص المضغوطة، محكمة في شيكارة مبطّنة.',
      ),
    },
    purity: { value: '≥ 99.5 %', label: L('sodium chloride', 'كلوريد الصوديوم') },
    pack: {
      title: L('Fifty kilos', 'خمسون كيلو'),
      tags: [L('Vacuum refined', 'مكرّر بالتفريغ'), L('Food grade', 'درجة غذائية'), L('UV print', 'طباعة UV')],
    },
    pour: {
      title: L('One arc', 'قوس واحد'),
      line: L(
        'Tip the sack and the tablets leave it one by one.',
        'أمِل الشيكارة، فتخرج الأقراص واحدة واحدة.',
      ),
      countLabel: L('tablets poured', 'قرص مصبوب'),
    },
    close: {
      eyebrow: L('03 · one tablet', '03 · قرص واحد'),
      nav: L('Tablet', 'قرص'),
      title: L('25 · 11 · 15', '25 · 11 · 15'),
      line: L(
        'Millimetres across, millimetres deep, grams of salt.',
        'مليمترات عرضًا، ومليمترات عمقًا، وجرامات ملح.',
      ),
      standard: { value: 'EN 973', label: 'ASTM E534' },
    },
    why: {
      title: L('Slow by design', 'البطء مقصود'),
      line: L(
        'Pressed dense, it gives the brine a steady face — weeks, not hours.',
        'مضغوط بكثافة، يمنح المحلول سطحًا ثابتًا — أسابيع، لا ساعات.',
      ),
    },
    dissolve: {
      from: 25,
      to: 6,
      unit: L('mm', 'مم'),
      label: L('left after six weeks', 'المتبقي بعد ستة أسابيع'),
    },
    where: {
      title: L('Every brine tank', 'في كل خزان محلول'),
      places: [
        L('Water softening', 'تنعيم المياه'),
        L('Steam and power', 'البخار والطاقة'),
        L('Hotels and hospitals', 'فنادق ومستشفيات'),
        L('Industrial resin beds', 'أسرّة راتنج صناعية'),
      ],
    },
    specs: [
      { label: L('Form', 'الشكل'), value: L('Compressed tablet', 'قرص مضغوط') },
      { label: L('Diameter', 'القطر'), value: L('25 mm', '25 مم') },
      { label: L('Thickness', 'السماكة'), value: L('11 mm', '11 مم') },
      { label: L('Net mass', 'الوزن الصافي'), value: L('~15 g', '~15 جم') },
      { label: L('NaCl', 'كلوريد الصوديوم'), value: L('≥ 99.50 %', '≥ 99.50 %') },
      { label: L('Moisture', 'الرطوبة'), value: L('≤ 0.20 %', '≤ 0.20 %') },
    ],
  },

  /* 02 — refined fine salt, also in a 50 kg sack --------------------------- */
  refined: {
    id: 'refined',
    short: L('Refined', 'مكرّر'),
    name: L('Refined fine salt', 'ملح مكرّر ناعم'),
    sack: { texture: 'sack-refined-50kg.png', scale: 1, back: 1 },
    particle: { kind: 'grain', count: 260, size: 1, tint: '#fbfaf6', rough: 0.7, heap: { count: 16, scale: 1.25 } },
    hero: {
      title: L('Salt, refined.', 'ملح، مكرّر.'),
      line: L(
        'Fifty kilos of refined crystals — dry, free-flowing, food grade.',
        'خمسون كيلو من البلورات المكرّرة — جافة، سائبة، بدرجة غذائية.',
      ),
    },
    purity: { value: '≥ 99.4 %', label: L('sodium chloride', 'كلوريد الصوديوم') },
    pack: {
      title: L('Fifty kilos', 'خمسون كيلو'),
      tags: [L('Refined', 'مكرّر'), L('Free-flowing', 'سائب'), L('Food grade', 'درجة غذائية')],
    },
    pour: {
      title: L('A steady stream', 'سيل ثابت'),
      line: L(
        'The sack tips and the crystals run free.',
        'تميل الشيكارة فتنساب البلورات بحرّية.',
      ),
      countLabel: L('crystals poured', 'بلورة مصبوبة'),
    },
    close: {
      eyebrow: L('03 · one grain', '03 · حبيبة واحدة'),
      nav: L('Grain', 'حبيبة'),
      title: L('0.2 · 0.8', '0.2 · 0.8'),
      line: L(
        'Millimetres across — dry enough to flow, fine enough to dissolve fast.',
        'مليمترات عرضًا — جاف بقدر ما ينساب، وناعم بقدر ما يذوب سريعًا.',
      ),
      standard: { value: 'EN 973', label: 'CODEX' },
    },
    why: {
      title: L('Dried to the gram', 'مجفَّف بالجرام'),
      line: L(
        'Moisture held at 0.10 %, so the crystal never cakes in the silo.',
        'الرطوبة مثبّتة عند 0.10 %، فالبلورة لا تتكتّل في الصومعة.',
      ),
    },
    dissolve: {
      from: 0.1,
      to: 0.1,
      unit: L('%', '%'),
      label: L('moisture at packing', 'رطوبة عند التعبئة'),
      fixed: true,
    },
    where: {
      title: L('Where fine salt goes', 'أين يذهب الملح الناعم'),
      places: [
        L('Food and dairy', 'الأغذية والألبان'),
        L('Chlor-alkali plants', 'مصانع الكلور القلوي'),
        L('Textile dyeing', 'صباغة المنسوجات'),
        L('Detergents', 'المنظفات'),
      ],
    },
    specs: [
      { label: L('Form', 'الشكل'), value: L('Refined crystal', 'بلورة مكرّرة') },
      { label: L('Grain size', 'مقاس الحبيبة'), value: L('0.2 – 0.8 mm', '0.2 – 0.8 مم') },
      { label: L('NaCl', 'كلوريد الصوديوم'), value: L('≥ 99.40 %', '≥ 99.40 %') },
      { label: L('Moisture', 'الرطوبة'), value: L('≤ 0.10 %', '≤ 0.10 %') },
      { label: L('Insolubles', 'غير الذائب'), value: L('≤ 0.05 %', '≤ 0.05 %') },
      { label: L('Packing', 'التعبئة'), value: L('50 kg bag', 'شيكارة 50 كجم') },
    ],
  },

  /* 03 — washed salt, shipped by the tonne -------------------------------- */
  washed: {
    id: 'washed',
    short: L('Washed', 'مغسول'),
    name: L('Washed salt', 'ملح مغسول'),
    sack: { texture: 'sack-washed-1t.png', scale: 1.22, back: 1.16 },
    particle: { kind: 'crystal', count: 110, size: 1, tint: '#f4f1e7', rough: 0.92, heap: { count: 11, scale: 1.45 } },
    hero: {
      title: L('Salt, washed.', 'ملح، مغسول.'),
      line: L(
        'One tonne of washed crystals in a jumbo bag, ready for the plant.',
        'طن من البلورات المغسولة في شيكارة جامبو، جاهز للمصنع.',
      ),
    },
    purity: { value: '≥ 98.5 %', label: L('sodium chloride', 'كلوريد الصوديوم') },
    pack: {
      title: L('One tonne', 'طن واحد'),
      tags: [L('Washed', 'مغسول'), L('Jumbo bag', 'شيكارة جامبو'), L('Lifting loops', 'حِمالات رفع')],
    },
    pour: {
      title: L('A wide band', 'شريط عريض'),
      line: L(
        'Washed crystals pour in an even band.',
        'تنسكب البلورات المغسولة في شريط متساوٍ.',
      ),
      countLabel: L('crystals poured', 'بلورة مصبوبة'),
    },
    close: {
      eyebrow: L('03 · the crystal', '03 · البلورة'),
      nav: L('Crystal', 'بلورة'),
      title: L('1 – 4', '1 – 4'),
      line: L(
        'Millimetres of washed crystal, graded for the brine plant.',
        'مليمترات من البلورة المغسولة، مصنّفة لمحطة المحلول.',
      ),
      standard: { value: 'ISO 2479', label: 'EN 973' },
    },
    why: {
      title: L('Washed clean', 'مغسول حتى النقاء'),
      line: L(
        'The wash water lifts clay and gypsum off the crystal before drying.',
        'ماء الغسيل يرفع الطفلة والجبس عن البلورة قبل التجفيف.',
      ),
    },
    dissolve: {
      from: 98.5,
      to: 98.5,
      unit: L('%', '%'),
      label: L('NaCl after washing', 'كلوريد صوديوم بعد الغسيل'),
      fixed: true,
    },
    where: {
      title: L('Where industrial salt goes', 'أين يذهب الملح الصناعي'),
      places: [
        L('Brine regeneration', 'تجديد المحاليل'),
        L('Chemical feed', 'تغذية كيميائية'),
        L('Water authorities', 'هيئات المياه'),
        L('Export bulk', 'تصدير سائب'),
      ],
    },
    specs: [
      { label: L('Form', 'الشكل'), value: L('Washed crystal', 'بلورة مغسولة') },
      { label: L('Grain size', 'مقاس الحبيبة'), value: L('1 – 4 mm', '1 – 4 مم') },
      { label: L('NaCl', 'كلوريد الصوديوم'), value: L('≥ 98.50 %', '≥ 98.50 %') },
      { label: L('Moisture', 'الرطوبة'), value: L('≤ 2.00 %', '≤ 2.00 %') },
      { label: L('Insolubles', 'غير الذائب'), value: L('≤ 0.30 %', '≤ 0.30 %') },
      { label: L('Packing', 'التعبئة'), value: L('1 MT jumbo', 'جامبو 1 طن') },
    ],
  },

  /* 04 — rock salt, screened ------------------------------------------------ */
  rock: {
    id: 'rock',
    short: L('Rock', 'صخري'),
    name: L('Rock salt', 'ملح صخري'),
    sack: { texture: 'sack-rock-1t.png', scale: 1.22, back: 1.16 },
    particle: { kind: 'crystal', count: 80, size: 1.7, tint: '#e6e2d6', rough: 0.95, heap: { count: 8, scale: 1.7 } },
    hero: {
      title: L('Salt, mined.', 'ملح، مستخرج.'),
      line: L(
        'One tonne of rock salt, screened and graded for industry.',
        'طن من الملح الصخري، منخول ومصنّف للصناعة.',
      ),
    },
    purity: { value: '≥ 96.0 %', label: L('sodium chloride', 'كلوريد الصوديوم') },
    pack: {
      title: L('One tonne', 'طن واحد'),
      tags: [L('Screened', 'منخول'), L('Industrial', 'صناعي'), L('Jumbo bag', 'شيكارة جامبو')],
    },
    pour: {
      title: L('A slow slide', 'انزلاق بطيء'),
      line: L(
        'Screened rock salt tumbles out in chunks.',
        'يتدحرج الملح الصخري المنخول كتلًا.',
      ),
      countLabel: L('crystals poured', 'بلورة مصبوبة'),
    },
    close: {
      eyebrow: L('03 · the crystal', '03 · البلورة'),
      nav: L('Crystal', 'بلورة'),
      title: L('3 – 10', '3 – 10'),
      line: L(
        'Millimetres of screened rock salt, hard and slow to melt.',
        'مليمترات من الملح الصخري المنخول، صلب وبطيء الذوبان.',
      ),
      standard: { value: 'ISO 2479', label: 'EN 973' },
    },
    why: {
      title: L('As it comes out', 'كما يخرج'),
      line: L(
        'Mined, crushed and screened — no wash, no waiting.',
        'يُستخرج ويُكسّر ويُنخل — بلا غسيل ولا انتظار.',
      ),
    },
    dissolve: {
      from: 96,
      to: 96,
      unit: L('%', '%'),
      label: L('NaCl as mined', 'كلوريد صوديوم كما يُستخرج'),
      fixed: true,
    },
    where: {
      title: L('Where rock salt goes', 'أين يذهب الملح الصخري'),
      places: [
        L('Chlor-alkali', 'الكلور القلوي'),
        L('Leather and dye', 'الجلود والصباغة'),
        L('Concrete admixtures', 'إضافات الخرسانة'),
        L('Export bulk', 'تصدير سائب'),
      ],
    },
    specs: [
      { label: L('Form', 'الشكل'), value: L('Rock crystal', 'بلورة صخرية') },
      { label: L('Grain size', 'مقاس الحبيبة'), value: L('3 – 10 mm', '3 – 10 مم') },
      { label: L('NaCl', 'كلوريد الصوديوم'), value: L('≥ 96.00 %', '≥ 96.00 %') },
      { label: L('Moisture', 'الرطوبة'), value: L('≤ 3.00 %', '≤ 3.00 %') },
      { label: L('Insolubles', 'غير الذائب'), value: L('≤ 1.50 %', '≤ 1.50 %') },
      { label: L('Packing', 'التعبئة'), value: L('1 MT jumbo', 'جامبو 1 طن') },
    ],
  },

  /* 05 — road salt, for de-icing ------------------------------------------- */
  road: {
    id: 'road',
    short: L('Road', 'طرق'),
    name: L('Road salt', 'ملح طرق'),
    sack: { texture: 'sack-road-1t.png', scale: 1.22, back: 1.16 },
    particle: { kind: 'crystal', count: 95, size: 1.35, tint: '#e9e6dc', rough: 0.94, heap: { count: 10, scale: 1.5 } },
    hero: {
      title: L('Salt, on the road.', 'ملح، للطرق.'),
      line: L(
        'One tonne of de-icing crystals for roads and runways.',
        'طن من بلورات إذابة الجليد للطرق والمدارج.',
      ),
    },
    purity: { value: '≥ 95.0 %', label: L('sodium chloride', 'كلوريد صوديوم') },
    pack: {
      title: L('One tonne', 'طن واحد'),
      tags: [L('De-icing', 'إذابة جليد'), L('Screened', 'منخول'), L('Jumbo bag', 'شيكارة جامبو')],
    },
    pour: {
      title: L('A hard fall', 'سقوط ثقيل'),
      line: L(
        'Coarse de-icing salt leaves the bag in a heavy fall.',
        'الملح الخشن يخرج من الشيكارة في سقوط ثقيل.',
      ),
      countLabel: L('crystals poured', 'بلورة مصبوبة'),
    },
    close: {
      eyebrow: L('03 · the crystal', '03 · البلورة'),
      nav: L('Crystal', 'بلورة'),
      title: L('2 – 8', '2 – 8'),
      line: L(
        'Millimetres of de-icing crystal, spread thin on the ice.',
        'مليمترات من بلورة إذابة الجليد، تُفرش رقيقة على الجليد.',
      ),
      standard: { value: 'EN 16811', label: 'ISO 2479' },
    },
    why: {
      title: L('Works at once', 'يعمل فورًا'),
      line: L(
        'Coarse crystal, spread thin, keeps melting down to −7 °C.',
        'بلورة خشنة، تُفرش رقيقة، تظل تعمل حتى −7 °م.',
      ),
    },
    dissolve: {
      from: -7,
      to: -7,
      unit: L('°C', '°م'),
      label: L('still working', 'ما زال يعمل'),
      fixed: true,
    },
    where: {
      title: L('Where road salt goes', 'أين يذهب ملح الطرق'),
      places: [
        L('Highways', 'الطرق السريعة'),
        L('Airport runways', 'مدارج المطارات'),
        L('Municipal depots', 'مخازن البلديات'),
        L('Industrial yards', 'أفنية المصانع'),
      ],
    },
    specs: [
      { label: L('Form', 'الشكل'), value: L('De-icing crystal', 'بلورة إذابة جليد') },
      { label: L('Grain size', 'مقاس الحبيبة'), value: L('2 – 8 mm', '2 – 8 مم') },
      { label: L('NaCl', 'كلوريد الصوديوم'), value: L('≥ 95.00 %', '≥ 95.00 %') },
      { label: L('Moisture', 'الرطوبة'), value: L('≤ 3.50 %', '≤ 3.50 %') },
      { label: L('Melting point', 'حرارة العمل'), value: L('to −7 °C', 'حتى −7 °م') },
      { label: L('Packing', 'التعبئة'), value: L('1 MT jumbo', 'جامبو 1 طن') },
    ],
  },
}

export const productList = () => PRODUCT_ORDER.map((id) => PRODUCTS[id])
