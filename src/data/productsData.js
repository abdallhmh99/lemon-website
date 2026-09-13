import mangoImg from '../assets/products/mango-crunch.webp';
import strawberryImg from '../assets/products/strawberry-whole.webp';
import mandarinImg from '../assets/products/mandarin-crisps.webp';
import appleImg from '../assets/products/apple-crisps.webp';
import mixedImg from '../assets/products/blackberry-antioxidant.webp';
import milkChocImg from '../assets/products/strawberry-milk-chocolate.webp';
import whiteChocImg from '../assets/products/strawberry-white-chocolate.webp';
import bananaImg from '../assets/products/banana-slices.webp';

import avatarReem from '../assets/images/avatar-reem.png';
import avatarMohammed from '../assets/images/avatar-mohammed.png';
import avatarSara from '../assets/images/avatar-sara.png';

export const PRODUCTS_DATA = [
  {
    id: "mango-crunch",
    nameAr: "مانجو مجفف",
    nameEn: "Dried Mango",
    category: "fruits",
    categoryAr: "فواكه مجففة",
    price: 29,
    priceSy: 350,
    rating: 4.9,
    reviewsCount: 128,
    image: mangoImg,
    badge: "الأكثر مبيعاً 🔥",
    badgeType: "hot",
    weightFresh: "480 غرام",
    weightDry: "85 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "شرائح مانجو طبيعية 100% مجففة بالتبريد (طعام رواد الفضاء). طعم غني ومقرمش يحتفظ بكافة الفيتامينات والمعادن الطبيعية بدون أي سكر مضاف أو مواد حافظة.",
    isFeatured: true
  },
  {
    id: "strawberry-whole",
    nameAr: "فراولة مجففة",
    nameEn: "Dried Strawberry",
    category: "fruits",
    categoryAr: "فواكه مجففة",
    price: 25,
    priceSy: 350,
    rating: 4.8,
    reviewsCount: 96,
    image: strawberryImg,
    badge: "طبيعي 100% 🍓",
    badgeType: "featured",
    weightFresh: "450 غرام",
    weightDry: "80 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "حبات فراولة حمراء كاملة مقرمشة وخفيفة كالهواء. تذوب في الفم بنكهة فراولة مركزة تفوق الطازجة وبدون قطرة سكر إضافية.",
    isFeatured: true
  },
  {
    id: "mandarin-crisps",
    nameAr: "يوسفي وبرتقال مجفف",
    nameEn: "Dried Mandarin & Orange",
    category: "fruits",
    categoryAr: "فواكه مجففة",
    price: 27,
    priceSy: 350,
    rating: 4.7,
    reviewsCount: 74,
    image: mandarinImg,
    badge: "انتعاش الحمضيات 🍊",
    badgeType: "fresh",
    weightFresh: "460 غرام",
    weightDry: "75 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "فصوص يوسفي وبرتقال مقشرة ومجففة بالتبريد لحبس فيتامين C والنكهة المنعشة. قرمشة فريدة وخفيفة تبهج الحواس.",
    isFeatured: true
  },
  {
    id: "apple-crisps",
    nameAr: "تفاح مقرمش مجفف",
    nameEn: "Dried Crisp Apple",
    category: "fruits",
    categoryAr: "فواكه مجففة",
    price: 24,
    priceSy: 350,
    rating: 4.8,
    reviewsCount: 83,
    image: appleImg,
    badge: "خفيف وصحي 🍏",
    badgeType: "healthy",
    weightFresh: "470 غرام",
    weightDry: "80 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "شرائح تفاح طبيعي فائق القرمشة بدون قلي أو زيوت. سناك خفيف جداً وصحي ومثالي كبديل للرقائق والشيبس.",
    isFeatured: true
  },
  {
    id: "mixed-fruits",
    nameAr: "مشكلة فواكه مجففة",
    nameEn: "Mixed Dried Fruits",
    category: "fruits",
    categoryAr: "فواكه مجففة",
    price: 32,
    priceSy: 380,
    rating: 4.9,
    reviewsCount: 112,
    image: mixedImg,
    badge: "تشكيلة سوبر فود 🫐",
    badgeType: "superfood",
    weightFresh: "500 غرام",
    weightDry: "90 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "مزيج فاخر يجمع بين التوت الأسود، الفراولة، المانجو، والموز المجفف بالتبريد. كنز من مضادات الأكسدة والطاقة الطبيعية.",
    isFeatured: true
  },
  {
    id: "strawberry-milk-chocolate",
    nameAr: "فراولة بالشوكولاتة البلجيكية",
    nameEn: "Belgian Chocolate Strawberry",
    category: "candy",
    categoryAr: "شوكولاتة وكاندي",
    price: 35,
    priceSy: 380,
    rating: 5.0,
    reviewsCount: 165,
    image: milkChocImg,
    badge: "إدمان المذاق 🍫",
    badgeType: "premium",
    weightFresh: "400 غرام",
    weightDry: "90 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "حبات فراولة كاملة مقرمشة مغلفة بطبقة سميكة من شوكولاتة الحليب البلجيكية الفاخرة. توازن ساحر بين القرمشة والنعومة.",
    isFeatured: false
  },
  {
    id: "strawberry-white-chocolate",
    nameAr: "فراولة بالشوكولاتة البيضاء",
    nameEn: "White Chocolate Strawberry",
    category: "candy",
    categoryAr: "شوكولاتة وكاندي",
    price: 35,
    priceSy: 380,
    rating: 4.9,
    reviewsCount: 112,
    image: whiteChocImg,
    badge: "فخامة مخملية 🤍",
    badgeType: "premium",
    weightFresh: "400 غرام",
    weightDry: "90 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "فراولة مجففة بالتبريد مكسوة بالشوكولاتة البيضاء الحريرية. مظهر أنيق وطعم كريمي مميز للضيافة والمناسبات.",
    isFeatured: false
  },
  {
    id: "banana-slices",
    nameAr: "موز ذهبي مجفف بالتبريد",
    nameEn: "Golden Dried Banana",
    category: "fruits",
    categoryAr: "فواكه مجففة",
    price: 24,
    priceSy: 350,
    rating: 4.9,
    reviewsCount: 104,
    image: bananaImg,
    badge: "طاقة البوتاسيوم 🍌",
    badgeType: "energy",
    weightFresh: "480 غرام",
    weightDry: "85 غرام",
    waterLoss: "90%",
    nutrientRetention: "95%",
    description: "دوائر موز مقرمشة غنية بالبوتاسيوم والطاقة النظيفة. ممتازة للرياضيين وسناك خفيف وسريع في العمل.",
    isFeatured: false
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "t1",
    name: "ريم الحربي",
    city: "الرياض",
    rating: 5,
    text: "تغليف مميز وتوصيل سريع، منتج يستحق التجربة!",
    avatar: avatarReem
  },
  {
    id: "t2",
    name: "محمد الشهري",
    city: "جدة",
    rating: 5,
    text: "أفضل فواكه مجففة جربتها، طبيعية 100% وطعمها لذيذ!",
    avatar: avatarMohammed
  },
  {
    id: "t3",
    name: "سارة العتيبي",
    city: "الدمام",
    rating: 5,
    text: "نكهة رائعة وجودة عالية، بالتأكيد سأشتري مرة أخرى.",
    avatar: avatarSara
  }
];
