# story-build

نسخة مبنية من صفحة القصة (`viewer/story`) بمسارات نسبية (`base: './'`)، عشان تفتح من أي مسار على CDN
من غير سيرفر ولا إعدادات.

اتبنيت بـ:

```
PAGES_BASE=./ npx vite build --config viewer/story/vite.config.ts --outDir story-build --emptyOutDir
```

وبعد البناء اتحذف اللي الصفحة مش بتستخدمه (`basis/`, `plates/`, ومجسّمات الصفحات التانية).
مش المفروض تتعدّل بإيد — عيد البناء بدل التعديل.
