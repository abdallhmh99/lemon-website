import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, Zap, ArrowLeft, Code2, Phone, Instagram } from 'lucide-react';
import bowlImg from '../assets/images/bowl-fruits.png';

export const AboutPage = () => {
  return (
    <div className="container" style={{ padding: '50px 24px 80px 24px' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
        <span style={{
          display: 'inline-block',
          background: 'var(--color-yellow-light)',
          color: 'var(--color-green-dark)',
          fontWeight: 800,
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          marginBottom: '14px'
        }}>
          من نحن
        </span>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '16px' }}>
          قصة ليمون 🍋
        </h1>
        <p style={{ color: 'var(--color-text)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          مشروع رائد يختص في إنتاج وتوزيع الفواكه والأغذية المجففة بتقنية التجميد (طعام رواد الفضاء)، لنقدم لكم تجربة مقرمشة وصحية تحافظ على كامل الفوائد الطبيعية.
        </p>
      </div>

      {/* Story & Image Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'center',
        background: '#FFFDF5',
        border: '1px solid var(--border-color)',
        borderRadius: '24px',
        padding: '36px',
        marginBottom: '60px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-green-dark)', marginBottom: '16px' }}>
            ما هي تقنية التجفيف بالتبريد (Freeze-Drying)؟
          </h2>
          <p style={{ color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.95rem' }}>
            تقنية التجميد والتجفيف تحت ضغط منخفض هي نفس التقنية المعتمدة لإعداد طعام رواد فضاء وكالة ناسا. يتم خلالها سحب أكثر من 90% من الماء دون تعريض الفاكهة للحرارة العالية، مما يضمن الحفاظ على الفيتامينات والإنزيمات والنكهة الأصلية.
          </p>
          <p style={{ color: 'var(--color-text)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            النتيجة هي قطع فواكه خفيفة الوزن فائقة القرمشة، خالية تماماً من المواد الحافظة والسكر المضاف، وتذوب في الفم بنكهة مكثفة لا تقاوم.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img
            src={bowlImg}
            alt="فواكه ليمون المجففة"
            style={{ maxWidth: '100%', maxHeight: '320px', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.08))' }}
          />
        </div>
      </div>

      {/* Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        marginBottom: '50px'
      }}>
        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <Sparkles size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>طبيعي 100%</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            بدون أي سكر مضاف، وبدون زيوت أو مواد حافظة أو ملونات صناعية.
          </p>
        </div>

        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <ShieldCheck size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>95% قيمة غذائية</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            تحتفظ الفواكه بكامل الفيتامينات والمعادن ومضادات الأكسدة الأساسية.
          </p>
        </div>

        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <Zap size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>قرمشة خفيفة كالهواء</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            سناك صحي مثالي للعمل، التمارين، الأطفال، وبديل ذكي للحلويات والشيبس.
          </p>
        </div>

        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <Heart size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>جودة مضمونة</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            نختار ثمار الفاكهة الطازجة في ذروة نضجها لنضمن أفضل نكهة ومذاق.
          </p>
        </div>
      </div>

      {/* Technology Partner Section */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, var(--color-green-dark), #004d2a)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0, 104, 56, 0.25)'
          }}>
            <Code2 size={26} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-green-dark)', background: 'var(--color-green-soft)', padding: '2px 10px', borderRadius: '12px' }}>
                الشريك التقني والتطوير
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-text-dark)' }}>
              تم تصميم وتطوير المنصة بواسطة شركة AM Digital
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              حلول برمجية متقدمة وتصميم متاجر إلكترونية فائقة السرعة وتجربة مستخدم عصرية.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/963935073214"
            target="_blank"
            rel="noreferrer"
            className="btn-video-outline"
            style={{
              padding: '9px 18px',
              fontSize: '0.9rem',
              display: 'inline-flex',
              gap: '8px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <Phone size={16} style={{ color: 'var(--color-green-dark)' }} />
            <span dir="ltr">+963 935 073 214</span>
          </a>

          <a
            href="https://www.instagram.com/am_digital.sy?stkn=MWl2cG1uenl0bDcwaQ=="
            target="_blank"
            rel="noreferrer"
            className="btn-yellow-pill"
            style={{
              padding: '9px 20px',
              fontSize: '0.9rem',
              display: 'inline-flex',
              gap: '8px'
            }}
          >
            <Instagram size={16} />
            <span>حساب الإنستغرام</span>
          </a>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', paddingTop: '10px' }}>
        <Link to="/products" className="btn-yellow-pill" style={{ display: 'inline-flex', padding: '12px 32px' }}>
          <span>تصفح كافة منتجات ليمون</span>
          <ArrowLeft size={18} />
        </Link>
      </div>
    </div>
  );
};
