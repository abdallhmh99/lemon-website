import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Award, ShoppingBag } from 'lucide-react';
import realisticFruitImg from '../../assets/images/fruit-realistic-shapes.webp';

export const AboutStorySection = () => {
  return (
    <section className="about-story-section">
      <div className="container">
        <div className="about-story-card">
          {/* Right Column: Text Information (in RTL) */}
          <div className="about-story-text-col">
            <div className="about-story-badge">
              <Award size={16} />
              <span>المشروع الأول في درعا</span>
            </div>

            <h2 className="about-story-heading">
              ننقل ثقافة أطعمة رواد الفضاء الصحية إلى موائدكم
            </h2>

            <p className="about-story-desc">
              انطلق مشروع <strong>"ليمون"</strong> ليكون الرائد والأول من نوعه في محافظة درعا وسوريا، حيث نعمل بشغف على إدخال ثقافة الفاكهة والأغذية المجففة بتقنية التجميد (Freeze-Drying) المتطورة—وهي نفس التقنية العلمية المعتمدة لغذاء رواد الفضاء.
            </p>

            <p className="about-story-desc" style={{ marginTop: '-8px' }}>
              نبتكر حلاً غذائياً ثورياً يحفظ الفاكهة الطازجة بكامل نضارتها وطعمها وقيمتها حتى في <strong>عكس مواسمها</strong>، لنقدم لكم سناكاً خفيفاً، فائق القرمشة، وطبيعياً 100% بدون أي سكر مضاف أو مواد حافظة، ليكون البديل الأمثل والآمن للشيبس والمسليات المصنعة للأطفال والعائلة.
            </p>

            <div className="about-story-points">
              <div className="about-story-point">
                <CheckCircle2 size={20} className="point-icon" />
                <span><strong>تركيز فائق:</strong> كل علبة (70 - 90 غ) تحتوي على ما يقارب 400 إلى 500 غرام فاكهة طازجة.</span>
              </div>
              <div className="about-story-point">
                <CheckCircle2 size={20} className="point-icon" />
                <span><strong>قيمة غذائية كاملة:</strong> يفقد 90% من وزنه (الماء فقط) ويحتفظ بأكثر من 95% من الفيتامينات والمعادن.</span>
              </div>
              <div className="about-story-point">
                <CheckCircle2 size={20} className="point-icon" />
                <span><strong>طبيعي وسوري 100%:</strong> خالي من المواد الحافظة، يؤكل مباشرة ولا يحتاج تبريد، مع شحن لكافة المحافظات.</span>
              </div>
            </div>

            <div className="about-story-actions">
              <Link to="/about" className="btn-yellow-pill" style={{ display: 'inline-flex' }}>
                <span>اقرأ قصة ليمون بالتفصيل</span>
                <ArrowLeft size={18} />
              </Link>
              <Link to="/products" className="about-story-btn-secondary">
                <ShoppingBag size={18} />
                <span>تصفح المنتجات</span>
              </Link>
            </div>
          </div>

          {/* Left Column: Realistic Fruits Image (in RTL) */}
          <div className="about-story-image-col">
            <div className="about-story-img-wrapper">
              <img 
                src={realisticFruitImg} 
                alt="فواكه مجففة طبيعية ليمون" 
                className="about-story-img"
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
