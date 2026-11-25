# viewer/story — صفحة القصة

مرحلة واحدة ثابتة ثلاثية الأبعاد + سبعة فصول تمرير. دي الصفحة الرسمية للمستودع.

```bash
npm run story     # http://localhost:5175
```

## خريطة سريعة

| الملف | الدور |
| --- | --- |
| `index.html` | الفصول، الكوبي، وكل الـCSS في `<style>` واحد |
| `main.js` | المشهد والحركة: كاميرا، شيكارة، صبّ، قياسات، hotspots |

## إيقاع التمرير

`computeProgress()` بيحوّل مسافة التمرير الكلية إلى `0..1`، و`buildStory()`
بيعمل timeline واحد طوله `1` بالظبط (آخر سطر `.set({}, {}, 1)`) — لو شلت السطر
ده، الفصول الأخيرة بتتشبع ومش بتوصل لحالتها.

| النطاق | اللي بيحصل |
| --- | --- |
| 0.02 | دوران خفيف للشيكارة |
| 0.09–0.16 | فتح الفم + ميل + كاميرا k2 |
| 0.21–0.40 | الصبّ (`state.pour.u`) |
| 0.39–0.44 | كاميرا اللقطة القريبة k3، إغلاق الفم، الشيكارة تتحرك جانبًا |
| 0.42–0.56 | ظهور علامات القياس والـhotspots |
| 0.58–0.72 | كاميرا واسعة k4 |

## تعديل الكوبي

كل فصل:

```html
<section class="panel" id="panel-4" data-step="2">
  <div class="sticky">
    <div class="panel-inner">
      <span class="fade" aria-hidden="true"></span>
      <p class="kicker" data-reveal>03 · One tablet, dimensioned</p>
      <h2 class="display" data-letters>To the millimetre</h2>
      ...
```

- `data-letters` = العنوان بيتقسم حروف ويتحرّك واحد واحد.
- `data-reveal` = العناصر بتطلع من تحت لما الفصل يدخل الشاشة.
- `.fade` = طبقة الزجاج الضبابي اللي ورا الكوبي — لازم تفضل أول عنصر جوّه
  `.panel-inner`.
- أي محتوى أطول من `100svh` لازم يتقسم لفصل جديد (زي ما حصل في where/supply).

## المعاينة السريعة

في الـconsole:

```js
window.__viewer.lock(0.5)   // يثبّت أي حالة من 0 لـ1
window.__viewer.state       // { bag, pour, cam, annot }
window.__viewer.unlock()    // يرجع للتمرير
```

## النشر

- `PAGES_BASE=/sinaicore/ npm run story:build` → `dist-story/` لصفحة GitHub Pages.
- `PAGES_BASE=./ npm run story:build` → `story-build/` (مسارات نسبية، بتفتح من أي CDN).

كل مسارات الأصول في `main.js` مبنية على `import.meta.env.BASE_URL` — لو ضفت
أصل جديد، استخدم `` `${BASE}...` `` مش `/...`.
