import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: '5rem', marginBottom: '16px' }}>🍋</div>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '12px' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '16px' }}>
        عذراً! الصفحة التي تبحث عنها غير موجودة
      </h2>
      <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto 30px auto', lineHeight: 1.7 }}>
        ربما تم نقل الصفحة أو أن الرابط غير صحيح. يمكنك العودة للصفحة الرئيسية أو استعراض منتجاتنا اللذيذة.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Link to="/" className="btn-yellow-pill" style={{ display: 'inline-flex' }}>
          <Home size={18} />
          <span>العودة للرئيسية</span>
        </Link>
        <Link to="/products" className="btn-video-outline" style={{ display: 'inline-flex' }}>
          <span>تصفح المنتجات</span>
          <ArrowLeft size={18} />
        </Link>
      </div>
    </div>
  );
};
