import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Twitter, Video, Ghost } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const STORE_PHONE = import.meta.env.VITE_STORE_PHONE || '+966 50 123 4567 / 0953420082';
const STORE_EMAIL = import.meta.env.VITE_STORE_EMAIL || 'lemon.official.sy@gmail.com';

export const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        <div className="footer-grid-four">
          {/* Col 1: Brand */}
          <div className="footer-col-brand">
            <img src={logoImg} alt="ليمون Lemon" style={{ height: '44px', width: 'fit-content' }} />
            <span className="footer-tagline">طبيعية ، صحية ، لذيذة</span>
            
            <div className="footer-social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link-item" title="إنستغرام" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link-item" title="X / تويتر" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-link-item" title="تيك توك" aria-label="TikTok">
                <Video size={16} />
              </a>
              <a href="https://snapchat.com" target="_blank" rel="noreferrer" className="social-link-item" title="سناب شات" aria-label="Snapchat">
                <Ghost size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">روابط سريعة</h4>
            <ul className="footer-links-group">
              <li><Link to="/" className="footer-link">الرئيسية</Link></li>
              <li><Link to="/products" className="footer-link">المنتجات</Link></li>
              <li><Link to="/about" className="footer-link">من نحن</Link></li>
            </ul>
          </div>

          {/* Col 3: Quality Guarantee */}
          <div>
            <h4 className="footer-col-title">جودة وضمان</h4>
            <ul className="footer-links-group" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              <li>✓ طبيعي 100% بدون سكر مضاف</li>
              <li>✓ تقنية التجفيف بالتبريد المتطورة</li>
              <li>✓ احتفاظ بـ 95% من الفيتامينات</li>
              <li>✓ تغليف محكم يحفظ القرمشة</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="footer-col-title">معلومات التواصل</h4>
            <div className="footer-contact-row">
              <Phone size={16} />
              <span dir="ltr">{STORE_PHONE}</span>
            </div>
            <div className="footer-contact-row">
              <Mail size={16} />
              <span>{STORE_EMAIL}</span>
            </div>
            <div className="footer-contact-row">
              <MapPin size={16} />
              <span>المملكة العربية السعودية / سوريا</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-copyright">
          <div className="footer-bottom-flex">
            <p>جميع الحقوق محفوظة © ليمون 2026</p>

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
