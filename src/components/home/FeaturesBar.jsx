import React from 'react';
import { Award, Leaf, Sparkles, Truck } from 'lucide-react';

export const FeaturesBar = () => {
  const features = [
    { title: 'المشروع الأول بدرعا', subtitle: 'طعام رواد الفضاء الصحي', icon: Award },
    { title: 'طبيعي 100%', subtitle: 'بدون سكر أو مواد حافظة', icon: Leaf },
    { title: '95% قيمة غذائية', subtitle: 'تحتفظ بكامل الفيتامينات', icon: Sparkles },
    { title: 'شحن للمحافظات', subtitle: 'خدمة توصيل سريعة وموثوقة', icon: Truck },
  ];

  return (
    <section className="features-bar-section">
      <div className="container">
        <div className="features-bar-card">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="feature-bar-item">
                <div className="feature-icon-wrapper">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-subtitle">{f.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
