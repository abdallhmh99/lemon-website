import React from 'react';
import { X, ShoppingCart, Sparkles, AlertCircle, ShieldCheck, SunDim } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSound } from '../../context/SoundContext';

export const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { playCrunchSound } = useSound();

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product);
    playCrunchSound();
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card" style={{ maxWidth: '680px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ background: '#FFFDF5', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center', position: 'relative' }}>
            <span style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'var(--color-green-dark)',
              color: '#FFF',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '3px 10px',
              borderRadius: '12px'
            }}>
              {product.origin || 'منشأ سوري'}
            </span>
            <img 
              src={product.image} 
              alt={product.nameAr} 
              style={{ maxHeight: '230px', margin: '0 auto', filter: 'drop-shadow(0 10px 20px rgba(108,84,96,0.15))' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-green-dark)', background: 'var(--color-green-soft)', padding: '2px 8px', borderRadius: '10px' }}>
                {product.categoryAr}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {product.nameEn}
              </span>
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 900 }}>{product.nameAr}</h2>

            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-green-dark)' }} className="num-font">
              {product.price} <span style={{ fontSize: '0.95rem', fontWeight: 800 }}>ل.س</span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--color-text)', lineHeight: 1.6 }}>{product.description}</p>
            
            {/* Key Space Food & Health Specs */}
            <div style={{ 
              background: 'var(--bg-cream)', 
              border: '1px solid var(--border-color)', 
              padding: '12px', 
              borderRadius: '10px', 
              fontSize: '0.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={15} style={{ color: 'var(--color-yellow-dark)', flexShrink: 0 }} />
                <span><strong>كمية الفاكهة الطازجة:</strong> تعادل 400 إلى 500 غرام فريش (وزن العلبة الصافي 70 - 90 غ بعد سحب {product.waterLoss} ماء).</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={15} style={{ color: 'var(--color-green-dark)', flexShrink: 0 }} />
                <span><strong>القيمة الغذائية:</strong> احتفاظ بـ {product.nutrientRetention} من الفيتامينات والمعادن الأصلية بدون سكر مضاف أو مواد حافظة.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertCircle size={15} style={{ color: '#d97706', flexShrink: 0 }} />
                <span><strong>إرشادات الحفظ والاستخدام:</strong> حساس للرطوبة، يُحفظ في مكان جاف وبارد وبعيد عن أشعة الشمس. يؤكل مباشرة ولا يحتاج تبريد.</span>
              </div>
            </div>

            <button onClick={handleAdd} className="btn-yellow-pill" style={{ justifyContent: 'center', marginTop: '4px' }}>
              <ShoppingCart size={18} />
              <span>أضف إلى السلة ({product.price} ل.س)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
