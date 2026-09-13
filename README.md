# 🍋 متجر ليمون | Lemon Freeze-Dried Superfoods (React + Vite)

> **المتجر الإلكتروني الرسمي لبراند "ليمون | Lemon"** — أول مشروع متخصص في أطعمة وفواكه رواد الفضاء المجففة بالتبريد (Freeze-Drying Technology) بدون سكر مضاف أو مواد حافظة، مع احتفاظ بنسبة 95% من القيمة الغذائية وسحب 90% من الماء للقرمشة الفائقة.

---

## 🌟 نظرة عامة على المشروع (Project Overview)

تم بناء المشروع باستخدام **React 18 + Vite** بنظام معماري تركيبي (Modular Architecture) يجمع بين السرعة الفائقة، والتنقل الانسيابي، وإدارة الحالة الموزعة (Context API)، مع تجهيز البنية التحتية الكاملة لإضافة صفحات جديدة ولوحة تحكم إدارية (Admin Dashboard) للمستقبل.

---

## 📁 هيكلية ملفات المشروع (Project Structure)

```text
lemon-freeze-dried/
├── package.json                 # تعريف المشروع والتبعيات (React, React Router, Lucide)
├── vite.config.js               # إعدادات بيئة التطوير والبناء السريع
├── index.html                   # نقطة الدخول الرئيسية لـ Vite
├── dist/                        # حزمة الإنتاج النهائية الجاهزة للنشر المباشر
│
└── src/
    ├── main.jsx                 # نقطة تشغيل React ومزودات السياق (Providers)
    ├── App.jsx                  # المكون الرئيسي وتخطيط الواجهة العامة
    │
    ├── assets/                  # الأصول الرقمية والصور عالية الدقة
    │   ├── logo.png             # الشعار الرسمي لبراند ليمون
    │   ├── images/              # صور الهيرو، الوعاء الطبيعي، وشخصيات المراجعات
    │   │   ├── hero-pouch-clean.png
    │   │   ├── bowl-fruits.png
    │   │   ├── avatar-reem.png
    │   │   ├── avatar-mohammed.png
    │   │   └── avatar-sara.png
    │   └── products/            # صور الفواكه المجففة الحقيقية بالتبريد
    │       ├── mango-crunch.jpg
    │       ├── strawberry-whole.jpg
    │       ├── mandarin-crisps.jpg
    │       ├── apple-crisps.jpg
    │       ├── blackberry-antioxidant.jpg
    │       ├── strawberry-milk-chocolate.jpg
    │       ├── strawberry-white-chocolate.jpg
    │       ├── banana-slices.jpg
    │       └── strawberry-halves.jpg
    │
    ├── data/                    # طبقة البيانات وقائمة المنتجات والمراجعات
    │   └── productsData.js
    │
    ├── context/                 # إدارة الحالة المركزية (State Management)
    │   ├── CartContext.jsx      # إدارة السلة، الحفظ التلقائي، والطلب بالواتساب
    │   ├── WishlistContext.jsx  # إدارة قائمة المفضلة
    │   └── SoundContext.jsx     # محاكي صوت القرمشة الحقيقي (Web Audio API)
    │
    ├── routes/                  # شجرة التوجيه وإدارة المسارات
    │   └── AppRoutes.jsx
    │
    ├── components/              # المكونات التركيبية (Modular Components)
    │   ├── common/              # المكونات المشتركة
    │   │   ├── TopAnnouncementBar.jsx  # شريط الإعلانات العلوي
    │   │   ├── Header.jsx              # شريط التنقل واللوغو والقائمة
    │   │   └── Footer.jsx              # التذييل ومعلومات التواصل
    │   │
    │   ├── home/                # مكونات الصفحة الرئيسية
    │   │   ├── HeroSection.jsx         # الواجهة الترحيبية وصورة الباوتش
    │   │   ├── FeaturesBar.jsx         # شريط المزايا الـ 4
    │   │   ├── FeaturedProducts.jsx    # قسم المنتجات الـ 5 الأكثر مبيعاً
    │   │   ├── WhyLemonSection.jsx     # قسم "لماذا ليمون؟" مع الوعاء الطبيعي
    │   │   ├── TestimonialsSection.jsx # آراء وتقييمات العملاء
    │   │   └── NewsletterSection.jsx   # بانر النشرة البريدية العضوي
    │   │
    │   ├── products/            # بطاقات ونوافذ المنتجات
    │   │   ├── ProductCard.jsx         # بطاقة المنتج التفاعلية مع زر المفضلة
    │   │   └── QuickViewModal.jsx      # نافذة المعاينة السريعة والمواصفات
    │   │
    │   └── cart/                # سلة المشتريات
    │       └── CartDrawer.jsx          # درج السلة المنزلق وشريط الشحن المجاني
    │
    ├── pages/                   # صفحات المتجر العام
    │   ├── HomePage.jsx                # الصفحة الرئيسية
    │   └── placeholders/               # صفحات المتجر للتنقل المستقبلي
    │       ├── ProductsPage.jsx        # صفحة كافة المنتجات مع التصنيفات
    │       ├── AboutPage.jsx           # صفحة من نحن
    │       ├── WhyLemonPage.jsx        # صفحة سر التجفيف بالتبريد
    │       ├── BlogPage.jsx            # صفحة المدونة
    │       └── ContactPage.jsx         # صفحة تواصل معنا
    │
    ├── admin/                   # هيكلية لوحة التحكم الإدارية المستقبلية
    │   ├── layouts/
    │   │   └── AdminLayout.jsx         # القالب والشريط الجانبي للمدير
    │   └── pages/
    │       ├── AdminDashboard.jsx      # لوحة الإحصائيات العامة
    │       ├── AdminProducts.jsx       # إدارة وتعديل المنتجات
    │       └── AdminOrders.jsx         # إدارة وتتبع الطلبات
    │
    └── styles/                  # نظام التصميم والأنماط
        └── index.css                   # المتغيرات اللونية والتنسيقات الشاملة
```

---

## 🎨 لوحة الألوان المعتمدة (Design Tokens)

| اللون | القيمة (HEX) | الاستخدام |
| :--- | :--- | :--- |
| **الخلفية الكريمية** | `#FFFBEB` | لون الخلفية الرئيسي المريح للنظر |
| **الأصفر الأساسي** | `#FFDB43` | أزرار الإضافة للسلة وشارات الجذب |
| **لون النص والطباعة** | `#6C5460` | تباين بصري دافئ وعناوين مريحة |
| **الأخضر الداكن** | `#006838` | العناوين الرئيسية، الشارات الصحية، وبانر النشرة |
| **الأخضر الفاتح** | `#87BD42` | شريط تقدم الشحن المجاني والنسب |
| **الذهبي الملكي** | `#BC9B48` | تقييمات النجوم وحدود البطاقات المميزة |

---

## 🧭 خريطة المسارات والتوجيه (Routing Map)

### 🛍️ مسارات المتجر العام (Storefront):
- `/` ➔ الصفحة الرئيسية (مطابقة للتصميم المرجعي 100%).
- `/products` ➔ صفحة تصفح جميع المنتجات مع فلترة الفواكه والشوكولاتة.
- `/about` ➔ قصة انطلاق مشروع ليمون من درعا لكافة المحافظات.
- `/why-lemon` ➔ تفاصيل تقنية طعام رواد الفضاء واحتفاظ 95% من الفوائد.
- `/blog` ➔ مقالات التغذية والبديل الصحي لرقائق الشيبس.
- `/contact` ➔ وسائل التواصل وخدمة العملاء.

### 🛡️ مسارات لوحة التحكم (Admin Dashboard):
- `/admin` ➔ نظرة عامة على المبيعات وأعداد المنتجات.
- `/admin/products` ➔ إضافة وتعديل أسعار وصور المنتجات.
- `/admin/orders` ➔ متابعة الطلبات وتحديث حالات التوصيل.

---

## 🚀 تشغيل وبناء المشروع (Commands)

### 1. تشغيل خادم التطوير المباشر:
```bash
npm run dev
```
يفتح المتجر على الرابط: `http://localhost:3000/`

### 2. بناء حزمة الإنتاج (Production Build):
```bash
npm run build
```
يقوم بفحص الكود وإنتاج مجلد `dist/` جاهز للنشر السحابي الفوري.

---

## 🔒 معايير الأمان (Security & Architecture)
- **XSS Protection:** حماية كاملة عبر معالجة نصوص React التلقائية وتجنب إدخال أي HTML غير آمن.
- **Tabnabbing Protection:** استخدام `rel="noreferrer"` في كافة الروابط الخارجية.
- **Safe State:** عزل تخزين `localStorage` داخل معالجات أخطاء لمنع تعطل المتصفح.
- **Scalable Auth Guard:** مسار `/admin` معزول بالكامل ومجهز لاستقبال نظام المصادقة (JWT / Supabase Auth).
