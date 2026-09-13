import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const STORE_PHONE = '0953420082';
const STORE_PHONE_INTL = '+963 953 420 082';
const STORE_EMAIL = 'lemon.official.sy@gmail.com';
const STORE_FACEBOOK = 'https://www.facebook.com/share/1DrTtcCPub/';
const STORE_INSTAGRAM = 'https://www.instagram.com/lemon.official.sy?igsh=MTNhZnM3eHR5a2xmeg==';

export const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        <div className="footer-grid-four">
          {/* Col 1: Brand */}
          <div className="footer-col-brand">
            <img src={logoImg} alt="ليمون Lemon" style={{ height: '64px', width: 'fit-content' }} />
            <span className="footer-tagline">المشروع الأول بدرعا للفواكه المجففة بالتبريد (طعام رواد الفضاء)</span>
            
            <div className="footer-social-icons">
              <a 
                href={STORE_INSTAGRAM} 
                target="_blank" 
                rel="noreferrer" 
                className="social-link-item" 
                title="إنستغرام ليمون" 
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a 
                href={STORE_FACEBOOK} 
                target="_blank" 
                rel="noreferrer" 
                className="social-link-item" 
                title="فيسبوك ليمون" 
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
              <a 
                href={`https://wa.me/963953420082`} 
                target="_blank" 
                rel="noreferrer" 
                className="social-link-item" 
                title="واتساب ليمون" 
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">روابط سريعة</h4>
            <ul className="footer-links-group">
              <li><Link to="/" className="footer-link">الرئيسية</Link></li>
              <li><Link to="/products" className="footer-link">جميع المنتجات</Link></li>
              <li><Link to="/about" className="footer-link">قصة ليمون والمشروع</Link></li>
            </ul>
          </div>

          {/* Col 3: Quality Guarantee */}
          <div>
            <h4 className="footer-col-title">مواصفات وجودة ليمون</h4>
            <ul className="footer-links-group" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              <li>✓ منشأ سوري 100% طبيعي بدون سكر</li>
              <li>✓ خالي تماماً من المواد الحافظة والملونات</li>
              <li>✓ يحتفظ بـ 95% من الفيتامينات الأصلية</li>
              <li>✓ العلبة تعادل 400 - 500 غ فريش</li>
              <li>✓ يؤكل مباشرة وبديل صحي للشيبس</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="footer-col-title">معلومات التواصل والطلب</h4>
            <div className="footer-contact-row">
              <Phone size={16} />
              <a href="tel:0953420082" style={{ color: 'inherit' }} dir="ltr">{STORE_PHONE_INTL}</a>
            </div>
            <div className="footer-contact-row">
              <Mail size={16} />
              <a href={`mailto:${STORE_EMAIL}`} style={{ color: 'inherit' }}>{STORE_EMAIL}</a>
            </div>
            <div className="footer-contact-row">
              <MapPin size={16} />
              <span>سوريا - درعا | توصيل وشحن للمحافظات</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-copyright">
          <div className="footer-bottom-flex">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <p>جميع الحقوق محفوظة © ليمون للفواكه المجففة بالتبريد 2026</p>
              <Link to="/admin" style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textDecoration: 'none', opacity: 0.7 }} title="لوحة تحكم المتجر">
                🔒 لوحة الإدارة
              </Link>
            </div>

            <div className="developer-credit">
              <span>تطوير وتصميم: </span>
              <span className="developer-brand">AM Digital</span>
              <div className="developer-links">
                <a
                  href="https://wa.me/963935073214"
                  target="_blank"
                  rel="noreferrer"
                  className="developer-action-btn"
                  title="تواصل عبر واتساب (+963 935 073 214)"
                >
                  <Phone size={13} />
                  <span dir="ltr">+963 935 073 214</span>
                </a>
                <a
                  href="https://www.instagram.com/am_digital.sy?stkn=MWl2cG1uenl0bDcwaQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="developer-action-btn developer-instagram-btn"
                  title="حساب إنستغرام AM Digital"
                >
                  <Instagram size={13} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
