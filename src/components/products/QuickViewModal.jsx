import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
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
      <div className="modal-card">
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ background: '#FFFDF5', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '20px', textAlign: 'center' }}>
            <img src={product.image} alt={product.nameAr} style={{ maxHeight: '220px', margin: '0 auto', filter: 'drop-shadow(0 10px 20px rgba(108,84,96,0.15))' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'right' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-green-dark)' }}>{product.categoryAr} • {product.nameEn}</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>{product.nameAr}</h2>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-green-dark)' }} className="num-font">
              {product.price} ر.س <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>/ {product.priceSy} ل.س</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text)', lineHeight: 1.7 }}>{product.description}</p>
            
            <div style={{ background: 'var(--bg-cream)', padding: '10px', borderRadius: '6px', fontSize: '0.82rem' }}>
              <div>⚖️ <strong>كمية الفاكهة الطازجة:</strong> {product.weightFresh} أصبحت {product.weightDry} بعد سحب {product.waterLoss} من الماء</div>
              <div>✨ <strong>القيمة الغذائية:</strong> احتفاظ بنسبة {product.nutrientRetention} بالفيتامينات والمعادن</div>
            </div>

            <button onClick={handleAdd} className="btn-yellow-pill" style={{ justifyContent: 'center', marginTop: '6px' }}>
              <ShoppingCart size={18} />
              <span>أضف إلى السلة</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
