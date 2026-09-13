import React, { useState } from 'react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-organic-banner">
          <div className="newsletter-text-group">
            <h3 className="newsletter-title">انضم إلى نشرتنا</h3>
            <p className="newsletter-subtitle">احصل على خصومات حصرية ومعلومات عن منتجاتنا الجديدة</p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-submit-btn">
              {subscribed ? 'تم الاشتراك ✓' : 'اشتراك'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
