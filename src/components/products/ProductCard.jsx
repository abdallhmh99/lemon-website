import React from 'react';
import { ShoppingCart, AlertCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product, onQuickView, className = '' }) => {
  const { addToCart } = useCart();
  const isAvailable = product.inStock !== false;

  const handleAdd = (e) => {
    e.stopPropagation();
    if (!isAvailable) return;
    addToCart(product);
  };

  return (
    <div className={`p-card-modern ${!isAvailable ? 'out-of-stock-card' : ''} ${className}`}>
      <div className="p-card-image-box" onClick={() => onQuickView(product)} style={{ position: 'relative' }}>
        <img src={product.image} alt={product.nameAr} className="p-card-img" loading="lazy" />
        {!isAvailable && (
          <span style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(185, 28, 28, 0.92)',
            color: '#FFF',
            padding: '3px 8px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 800,
            zIndex: 2
          }}>
            نفدت الكمية
          </span>
        )}
      </div>

      <div className="p-card-details">
        <h3 className="p-card-title" onClick={() => onQuickView(product)}>{product.nameAr}</h3>

        <div className="p-card-rating-row">
          <span className="p-star-icon">★</span>
          <span className="num-font">{product.rating} ({product.reviewsCount})</span>
        </div>

        <div className="p-card-price">
          <span className="num-font">{product.price}</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, marginRight: '4px' }}>ل.س</span>
        </div>

        <button 
          className="p-card-btn-add" 
          onClick={handleAdd}
          disabled={!isAvailable}
          style={!isAvailable ? { background: '#f3f4f6', color: '#9ca3af', cursor: 'not-allowed', border: '1px solid #e5e7eb' } : {}}
        >
          {isAvailable ? (
            <>
              <ShoppingCart size={15} />
              <span>أضف للسلة</span>
            </>
          ) : (
            <>
              <AlertCircle size={15} />
              <span>غير متوفر حالياً</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
