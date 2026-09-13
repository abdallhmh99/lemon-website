import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import heroBgDesktop from '../../assets/images/hero-bg-fruits.webp';
import heroBgMobile from '../../assets/images/hero-bg-mobile.webp';

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="hero-section hero-with-bg"
      style={{
        '--hero-bg-desktop': `url(${heroBgDesktop})`,
        '--hero-bg-mobile': `url(${heroBgMobile})`
      }}
    >
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container-rel">
        <div className="hero-content-wrapper">
          <div className="hero-badge-pill">
            <Sparkles size={16} />
            <span>طعم الطبيعة.. في كل قطعة</span>
          </div>
          
          <h1 className="hero-main-heading">
            فواكه مجففة
            <br />
            <span className="heading-yellow">طبيعية <span className="highlight-percent">%100</span></span>
          </h1>

          <p className="hero-desc-text">
            مذاق غني وفوائد طبيعية، نختار لك أفضل الفواكه ونحافظ على قيمتها الغذائية في كل قطعة بتقنية التجفيف بالتبريد المتطورة (طعام رواد الفضاء المقرمش).
          </p>

          <div className="hero-buttons-row">
            <a href="#featured-products" className="btn-yellow-pill">
              <span>تسوق الآن</span>
              <ArrowLeft size={18} />
            </a>

            <Link
              to="/about"
              className="btn-video-outline"
              title="تعرف على قصة مشروع ليمون"
            >
              <span>تعرف على ليمون</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
