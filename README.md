# Sinaicore — The Salt Chronicles

صفحة سرد تفاعلية لرحلة الملح في سيناء عبر ثمانية فصول. الطبقة الحركية مبنية
على نفس معمارية مرجع `Field to Still`: كانفس ثابت، تمرير سلس Lenis، محطات
`BEATS` تحوّل موضع التمرير إلى قنوات حركة مستقلة، ثم تخميد مزدوج قبل وصول
القيم إلى الكاميرا والمجسّم.

## التشغيل

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run assets   # بلورة GLB/Draco + خرائط KTX2
npm run models   # البلورة فقط
npm run textures # خرائط السطح فقط
```

## تصميم الشيكارة (Bag artwork)

الملفات المسطحة القابلة للطباعة واللف على المجسم:

| الملف | المقاس | الاستخدام |
| --- | --- | --- |
| `deliverables/bag-artwork/sack-50kg-front.pdf` | 570×920 مم (ترim 550×900 + بليد 10) | طباعة 1:1 |
| `deliverables/bag-artwork/sack-50kg-front.png` | 144 dpi | معاينة / أرشيف |
| `deliverables/bag-artwork/sack-50kg-back.pdf` | نفس المقاس | الوجه الخلفي (شهادة التحليل والتداول) |
| `deliverables/bag-artwork/jumbo-1000kg.pdf` | 920×1120 مم | جانب شيكارة الجامبو 1000 كجم |
| `deliverables/bag-artwork/preview.png` | — | معاينة خاصة للعرض |
| `public/artwork/sack-50kg-texture.png` | 1080 px | خامة الشيكارة داخل المشهد ثلاثي الأبعاد |

المصدر القابل للتعديل هو `artwork/*.html` (بالتokens في `artwork/tokens.css`)،
والخطوط عربية محلية من `@fontsource` لا من Google Fonts. بعد أي تعديل:

```bash
npm run artwork     # يحتاج CHROMIUM_PATH (+ CHROMIUM_LIBS عند الحاجة)
```

السيناريو يطبع PDF متجهي (Chromium يحوّل الخطوط إلى رسوم متجهة ويشكّل العربية
صحيحاً) ويصدّر PNG عالي الدقة، ثم يعيد توليد خامة الشيكارة التي يستخدمها
`Sculpture.tsx` تلقائياً كلوحة أمامية للشيكارة في الفصل السابع.

Dieline: خط الخياطة عند 46 مم من الأعلى، وطيّتا الجانب عند 70 مم من كل حافة،
بالأزرق، وعلامات قصّ خارج منطقة القصّ.

## البنية

```text
src/motion/scene.ts       BEATS + sceneAt() + positionForPhase()
src/story.ts               حالة السرد + قنوات الحركة المُخمّدة + surge
src/components/Scene.tsx  كانفس ثابت، تخميد مزدوج، كاميرا متجاوبة، DOF وظلال
src/components/Sculpture  المجسّم المركزي ومراحله الثمانية
src/components/Particles  جسيمات/قطع InstancedMesh
src/components/Overlay    شريط علوي، قائمة 01–08، HUD
src/components/Preloader  يجمع useProgress من drei مع عدّاد تحريري
src/components/Cursor     مؤشر من طبقتين (نقطة + حلقة متأخرة)
src/components/Interaction  تدوير محدود للمجسّم بالسحب (ماوس/لمس)
src/components/Hotspots   نقاط 3D مثبّتة على المجسّم تفتح بطاقات المواصفات
src/components/SpecCard   بطاقة المواصفات (نقاء، رطوبة، تغليف، حاوية)
src/data/specs.ts         نصوص البطاقات وأرقامها
src/lib/quality.ts        قرار الجودة: هاتف/سطح مكتب، تفعيل الانكسار والإفكتات
src/lib/surfaces.ts       تحميل خرائط KTX2 مع بديل PNG
src/App.tsx               Lenis + ScrollTrigger + timeline السرد
```

### 1. كانفس ثابت + DOM قابل للتمرير

`.scene-shell` مثبّت بـ `position: fixed` تحت طبقة `.content`. النصوص واللوحات
عناصر DOM عادية تتمرّر فوقه، والعمود الوسيط في الشبكة متروك فارغ ليظهر المجسّم.

### 2. BEATS و sceneAt

بدل كاميرا/keyframes ثابتة، التمرير يُقاس بـ screens ثم يمرّ عبر:

```ts
sceneAt(position) → { water, evaporation, harvest, wash, refine, sort, pack,
                      analysis, explode, twist, fill, seal, camX/Y/Z, … }
```

كل قناة لها منحنى `smoothstep` خاص بها داخل beat الخاص بها. في `useFrame`
تُخمَّد القيم مرتين (`sceneAt → soft state → scene state`) بمعامل 8، تماماً
كالمرجع، فيبقى السحب ناعماً حتى مع قفزات التمرير.

### 3. سرعة التمرير (Surge) والكاميرا

مشتقة التمرير تُقاس داخل الحلقة، وتغيّرها الثاني يعطي `story.surge`، الذي
يُضيف إزاحة طفيفة للكاميرا واهتزازاً للقطع المفكّكة. الكاميرا تحسب مسافة
التركيز من نسبة أبعاد الشاشة وتستخدم `setViewOffset` لإعادة تأطير المشهد
على الشاشات العريضة والعمودية بدل بسّ إزاحة بسيطة.

### 4. التمرير السلس والتنقل

- `Lenis` بإعدادات المرجع: `lerp: 0.1`، `smoothWheel: true`، واحترام
  `prefers-reduced-motion`. حلقة `raf` الخاصة به تعمل على `gsap.ticker` نفسه.
- `ScrollTrigger` يحرّك مؤشر Timeline واحد، ويُقاس موضعه من مراكز الفصول
  الحقيقية في DOM حتى تظل القنوات متزامنة مع النص.
- القائمة الجانبية تضيء تلقائياً، وتستخدم `lenis.scrollTo` للقفز السلس.

### 5. طبقات التفاعل

| الطبقة | التنفيذ |
| --- | --- |
| تمرير | `ScrollTrigger` يحرّك مؤشراً واحداً، و`sceneAt` يوزّعه على القنوات، والكاميرا تسير على مسار مفاتيح لكل فصل. |
| مؤشر | ميل خفيف لكل المجسّم + `surge` من تسارع التمرير. |
| سحب | `Interaction.tsx` يعطي «مداراً محدوداً» (±33° أفقي، ±15° رأسي) في فصول البلورة والشيكارة والحاوية، ويعود تلقائياً بعد ثانيتين سكون. |
| نقاط 3D | `Hotspots.tsx` تثبّت النقاط في فضاء المجسّم، فتُسقطها الكاميرا على الشاشة عبر `drei/Html`، وتظهر فقط داخل نافذة فصلها. |

نقاط الفصل الخامس/السابع/الثامن تفتح بطاقة مواصفات عربية: النقاء 99.5%،
الرطوبة 0.18%، طبقات التغليف الثلاث، وختم الحاوية SC-08.

### 6. التحميل والأداء

- Preloader يدمج `useProgress` من drei (تقدّم تحميل Three الحقيقي) مع عدّاد
  تحريري، وينتظر الخطوط وأول لوحة وملف GLB، بحدّ أقصى 4.2 ثانية.
- البلورة `GLB` مضغوط **Draco** بحجم 1.5 كيلوبايت، والمفكّك محلي من
  `public/draco/` بلا CDN.
- `PerformanceMonitor` مع `flipflops: 2` يخفض الدقة إلى 1.25 ثم 1 عند الحاجة.
- الخرائط (حبيبات الملح ونسيج الشيكارة) تُولَّد إجرائياً ثم تُضغط **KTX2 / Basis
  ETC1S** عبر `npm run textures`؛ الحجم 64 و57 كيلوبايت بدل 270 كيلوبايت لكل
  صورة PNG، مع نسخة PNG كبديل عند غياب دعم KTX2.
- `src/lib/quality.ts` يقرّر مرة واحدة: على الهواتف تُلغى `transmission`
  والـ post-processing، وتنخفض الجسيمات والظلال إلى النصف. وعلى أي بطاقة
  برمجية (SwiftShader/llvmpipe) يُستبدل الانكسار بخامة زجاجية بديلة، لأن مسار
  الانكسار لا يعمل هناك ويعطي سطحاً مصمتاً.
- الجسيمات `InstancedMesh`؛ وهناك بديل ثابت إذا تعذّر WebGL.
- في وضع التطوير فقط: `window.__sinaicore` يعرض `{ story, motion, scene }`
  لتشخيص الحالة أثناء ضبط المشاهد.
