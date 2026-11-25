/* -------------------------------------------------------------------------- */
/*  The salt flats — eight editorial chapters                                 */
/* -------------------------------------------------------------------------- */
/*  Magazine pages, not 3D: one plate per chapter, one idea per chapter, and    */
/*  the numbers that belong to the step. English and Arabic travel together.    */
/* -------------------------------------------------------------------------- */

const L = (en, ar) => ({ en, ar })

export const CHAPTERS = [
  {
    n: '01',
    nav: L('Water', 'المياه'),
    eyebrow: L('Seawater', 'مياه البحر'),
    plate: 'plates/01-sea.jpg',
    title: L('It begins as water', 'بدأت الحكاية ماءً'),
    lead: L(
      'On the north coast of Sinai, salt exists long before you can see it.',
      'على الساحل الشمالي لسيناء، يبدأ الملح قبل أن يظهر منه أي أثر.',
    ),
    body: L(
      'Seawater is pumped into wide shallow pans divided by earth bunds. Crystals begin to form in a slow current, and the water turns turquoise before the crust takes its shape.',
      'تُضخّ مياه البحر إلى أحواض واسعة تفصلها جسور ترابية. تبدأ البلورات بالتكوّن في تيار بطيء، ويأخذ الماء لونه الفيروزي قبل أن تأخذ القشرة شكلها.',
    ),
    note: L(
      'Salt is not made so much as harvested from the timing of sun and wind.',
      'الملح ليس مادةً تُصنع بقدر ما هي مادةٌ تُستخرج من توقيت الشمس والريح.',
    ),
    stats: [
      { value: '32°', label: L('water at the pumps', 'حرارة الماء عند الضخ') },
      { value: '1.025', label: L('specific gravity', 'الكثافة النوعية') },
    ],
    caption: L(
      'Evaporation pans on the north Sinai coast.',
      'أحواض التبخير على الساحل الشمالي لسيناء.',
    ),
  },
  {
    n: '02',
    nav: L('Evaporation', 'التبخّر'),
    eyebrow: L('Evaporation', 'التبخّر'),
    plate: 'plates/02-evaporation.jpg',
    title: L('The sun makes the first crystal', 'الشمس تصنع أول بلورة'),
    lead: L(
      'No machine here — warm days and cold nights do the concentrating.',
      'لا آلة هنا؛ حرارة النهار وبرودة الليل تتولّيان تركيز المحلول.',
    ),
    body: L(
      'Water leaves layer by layer until the brine passes saturation. Along the pan edge a thin crust appears, then widens day after day.',
      'يتبخّر الماء طبقةً بعد طبقة، وترتفع الملوحة حتى يتجاوز المحلول تشبّعه. عند حواف الحوض تظهر قشرة رقيقة تتوسّع يوماً بعد يوم.',
    ),
    stats: [
      { value: '40 %', label: L('water lost in the pans', 'فقدان الماء في الأحواض') },
      { value: '24 h', label: L('one crystallising cycle', 'دورة التبلور') },
    ],
    caption: L(
      'Crystals forming at the edge of a brine pan at first light.',
      'بلورات تتكوّن على حافة حوض مالح مع أولى خيوط الفجر.',
    ),
  },
  {
    n: '03',
    nav: L('Harvest', 'الحصاد'),
    eyebrow: L('Harvest', 'الحصاد'),
    plate: 'plates/03-harvest.jpg',
    title: L('The crust breaks in a straight line', 'القشرة تنكسر خطاً مستقيماً'),
    lead: L(
      'The moment the water surface becomes a slab of salt you can lift.',
      'اللحظة التي يتحوّل فيها السطح المائي إلى لوحٍ ملحي قابل للحصاد.',
    ),
    body: L(
      'A straight cut is drawn through the set crust, and the slabs separate from the pan floor. They are lifted and left to dry before refining begins.',
      'يُجرى شقّ مستقيم في القشرة المتماسكة، فتنفصل الألواح عن قاع الحوض. تُرفع وتُترك لتجفّ قبل أن تبدأ رحلة التنقية.',
    ),
    note: L(
      'The straight line is not decoration: it is the cheapest break in lost grains.',
      'الخط المستقيم ليس جمالياً؛ إنه أقلّ طرق الكسر فقداناً للحبيبات.',
    ),
    stats: [
      { value: '15 cm', label: L('average crust', 'متوسط سماكة القشرة') },
      { value: '12', label: L('hands in the sort', 'خطوة للفرز اليدوي') },
    ],
    caption: L(
      'Harvest hands separating the salt crust at first light.',
      'عمّال الحصاد يفصلون القشرة الملحية عند أوائل النهار.',
    ),
  },
  {
    n: '04',
    nav: L('Washing', 'الغسيل'),
    eyebrow: L('Washing', 'الغسيل'),
    plate: 'plates/04-wash.jpg',
    title: L('Impurities sink, salt stays', 'الشوائب تسقط، والملح يبقى'),
    lead: L(
      'In a turning current, crystals part company with the clay and minerals.',
      'داخل تيار مائي دوّار، تفترق الحبيبات عمّا علق بها من طين ومعادن.',
    ),
    body: L(
      'The salt is washed in saturated brine: light impurities float, heavy ones sink, and white crystals stay behind. The wash repeats until the colour is clean.',
      'يُغسل الملح بمحلول مشبع: الشوائب الخفيفة تطفو، والثقيلة تغرق، وتبقى البلورات البيضاء. تتكرّر العملية حتى يصبح اللون صافياً.',
    ),
    stats: [
      { value: '3', label: L('washes in series', 'مراحل الغسيل المتتالية') },
      { value: '0.2 %', label: L('moisture after washing', 'الرطوبة بعد الغسيل') },
    ],
    caption: L(
      'Grains washed in a turning current inside the settling tank.',
      'غسل الحبيبات في تيار مائي دوّار داخل حوض الترسيب.',
    ),
  },
  {
    n: '05',
    nav: L('Refining', 'التكرير'),
    eyebrow: L('Refining', 'التكرير'),
    plate: 'plates/05-refine.jpg',
    title: L('Purity you can see inside', 'نقاء يُرى من الداخل'),
    lead: L(
      'One crystal, close up: a hard-edged transparent cube.',
      'بلورة واحدة عن قرب؛ مكعّب شفّاف حاد الحواف.',
    ),
    body: L(
      'The salt is recrystallised under controlled conditions, so the cube passes and bends light. At this point the NaCl content reaches 99.5 %.',
      'تُعاد بلورة الملح تحت ظروف مضبوطة، فيصبح مكعّبها قادراً على تمرير الضوء وانكساره. عند هذه النقطة يصل تركيز NaCl إلى 99.5%.',
    ),
    note: L(
      'Salt bends light at 1.544 — close to glass, but grown layer by layer from brine.',
      'معامل انكسار الملح 1.544؛ قريب من الزجاج، لكنه ينمو طبقةً طبقة من محلول مالح.',
    ),
    stats: [
      { value: '99.5 %', label: L('NaCl purity', 'نقاء NaCl') },
      { value: '1.544', label: L('refractive index', 'معامل الانكسار') },
    ],
    caption: L('A clean cubic crystal under lab light.', 'بلورة مكعّبة نقية تحت ضوء المختبر.'),
  },
  {
    n: '06',
    nav: L('Sieving', 'الفرز'),
    eyebrow: L('Sieving', 'الفرز'),
    plate: 'plates/06-sort.jpg',
    title: L('Three screens, three sizes', 'ثلاث شبكات، ثلاثة أحجام'),
    lead: L('Every grain finds its size, and nothing is thrown away.', 'كل حبيبة تجد مقاسها، ولا شيء يُهدر.'),
    body: L(
      'Grains pass three screens with graded openings: coarse for industry, medium for the table, fine for delicate food work.',
      'تمرّ الحبيبات عبر ثلاثة أغرابلة بفتحات متدرّجة: خشن للصناعة، ومتوسط للمائدة، وناعم للمنتجات الغذائية الدقيقة.',
    ),
    stats: [
      { value: '3', label: L('screened fractions', 'أحجام فرزية') },
      { value: '0 / 2', label: L('screen gaps', 'فجوات الغربال') },
    ],
    caption: L(
      'Steel screens separating grains by size.',
      'أغرابلة معدنية تفصل الحبيبات حسب الحجم.',
    ),
  },
  {
    n: '07',
    nav: L('Packing', 'التعبئة'),
    eyebrow: L('Packing', 'التعبئة'),
    plate: 'plates/07-pack.jpg',
    title: L('Fifty kilos that carry the name', 'خمسون كيلوغراماً تحمل الاسم'),
    lead: L(
      'From the pan to a printed sack, then into a container ready to travel.',
      'من الحوض إلى شكارة مطبوعة، ثم إلى حاوية جاهزة للسفر.',
    ),
    body: L(
      'The sack is weighed and sealed with the batch data, then stacked on pallets inside the container. The salt stays away from moisture until it arrives.',
      'تُوزَّن الشكارة وتُختم ببيانات الدفعة، ثم تُرصّ على منصات داخل الحاوية. يبقى الملح بعيداً عن الرطوبة حتى يصل إلى وجهته.',
    ),
    stats: [
      { value: '50 kg', label: L('per sack', 'وزن الشيكارة') },
      { value: '20', label: L('sacks to the tonne', 'شكارة في الطن') },
    ],
    caption: L(
      'Sacks stacked inside the container before it is closed.',
      'شكارات مرصوفة داخل حاوية الشحن قبل الإغلاق.',
    ),
  },
  {
    n: '08',
    nav: L('Analysis', 'التحليل'),
    eyebrow: L('Analysis', 'التحليل'),
    plate: 'plates/08-analysis.jpg',
    title: L('The spec sheet has the last word', 'المواصفات تقول الكلمة الأخيرة'),
    lead: L(
      'The container is sealed, and the analysis stays as a witness to the whole journey.',
      'تُغلق الحاوية، ويبقى جدول التحليل شاهداً على الرحلة كلها.',
    ),
    body: L(
      'A sample from every batch is tested against the agreed specification. When the numbers match, the salt leaves Sinai for the table.',
      'تُفحص عيّنة من كل دفعة ويُقارن تركيبها بالمواصفات المعتمدة. وحين تطابق الأرقام التوقّعات، يغادر الملح سيناء في طريقه إلى المائدة.',
    ),
    stats: [
      { value: '99.5 %', label: L('certified NaCl', 'NaCl معتمد') },
      { value: 'SC-08', label: L('batch number', 'رقم الدفعة') },
    ],
    caption: L(
      'A sample tested before the batch is released.',
      'فحص العيّنة قبل اعتماد الدفعة النهائية.',
    ),
  },
]
