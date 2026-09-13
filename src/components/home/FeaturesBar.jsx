import React from 'react';
import { ShieldCheck, Leaf, Sparkles, Truck } from 'lucide-react';

export const FeaturesBar = () => {
  const features = [
    { title: 'جودة عالية', subtitle: 'معايير صارمة', icon: ShieldCheck },
    { title: 'طبيعي 100%', subtitle: 'بدون مواد حافظة', icon: Leaf },
    { title: 'غني بالعناصر الغذائية', subtitle: 'فيتامينات ومعادن طبيعية', icon: Sparkles },
    { title: 'توصيل سريع', subtitle: 'لجميع مناطق المملكة والمحافظات', icon: Truck },
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
