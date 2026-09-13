import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/productsData';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-title-header">
          <div>
            <span className="section-tag-small">آراء عملائنا</span>
            <h2 className="section-heading-with-leaf">
              <span>ثقة عملائنا هي مصدر إلهامنا</span>
            </h2>
          </div>
        </div>

        <div className="reviews-three-grid">
          {TESTIMONIALS_DATA.map(t => (
            <div key={t.id} className="review-box-card">
              <div className="review-user-row">
                <img src={t.avatar} alt={t.name} className="review-avatar-img" />
                <div>
                  <h4 className="review-name">{t.name}</h4>
                  <div className="review-stars-gold">★★★★★</div>
                </div>
              </div>
              <p className="review-quote-text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
