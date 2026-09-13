import React from 'react';
import { ArrowLeft, Volume2, Sparkles } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import heroBgImg from '../../assets/images/hero-bg-fruits.webp';

export const HeroSection = () => {
  const { playCrunchSound } = useSound();

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

            <button
              className="btn-video-outline"
              onClick={playCrunchSound}
              title="استمع لصوت القرمشة الطبيعية"
              type="button"
            >
              <Volume2 size={18} style={{ color: 'var(--color-green-dark)' }} />
              <span>صوت القرمشة!</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
