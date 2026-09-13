import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';
import realisticFruitImg from '../../assets/images/fruit-realistic-shapes.webp';

export const AboutStorySection = () => {
  return (
    <section className="about-story-section">
      <div className="container">
        <div className="about-story-card">
          {/* Right Column: Text Information (in RTL) */}
          <div className="about-story-text-col">
            <div className="about-story-badge">
              <Sparkles size={16} />
              <span>طبيعة لا تُقاوم</span>
            </div>

            <h2 className="about-story-heading">
              ليمون.. عندما يلتقي شغف الطبيعة بأحدث تقنيات التجفيف
            </h2>

            <p className="about-story-desc">
              في متجر ليمون، نبتكر مفهوماً جديداً للسناك الصحي الفاخر. ننتقي أفضل محاصيل الفواكه الطازجة في ذروة نضجها، ونعاملها بتقنية التجفيف بالتبريد المتطورة لنحبس بداخلها النكهة الغنية والقيمة الغذائية الكاملة بدون أي سكر مضاف أو مواد حافظة.
            </p>

            <div className="about-story-points">
              <div className="about-story-point">
                <CheckCircle2 size={20} className="point-icon" />
                <span>طبيعي وصحي 100% بدون أي إضافات صناعية</span>
              </div>
              <div className="about-story-point">
                <CheckCircle2 size={20} className="point-icon" />
                <span>قرمشة فريدة وخفيفة تذوب في الفم بنكهة مركزة</span>
              </div>
              <div className="about-story-point">
                <CheckCircle2 size={20} className="point-icon" />
                <span>احتفاظ بأكثر من 95% من الفيتامينات والمعادن الأصلية</span>
              </div>
            </div>

            <div style={{ marginTop: '10px' }}>
              <Link to="/about" className="btn-yellow-pill" style={{ display: 'inline-flex' }}>
                <span>اكتشف المزيد عن ليمون</span>
                <ArrowLeft size={18} />
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
