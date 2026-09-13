import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import heroBgImg from '../../assets/images/hero-bg-fruits.webp';
import mobileHeroImg from '../../assets/images/mobile-fruit-hero.webp';

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="hero-section hero-with-bg"
      style={{ backgroundImage: `url(${heroBgImg})` }}
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

          {/* Dedicated mobile product visual so fruits shine vividly on phone screens */}
          <div className="hero-mobile-visual">
            <div className="hero-mobile-img-wrapper">
              <img 
                src={mobileHeroImg} 
                alt="فواكه ليمون المجففة المقرمشة" 
                className="hero-mobile-img" 
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
