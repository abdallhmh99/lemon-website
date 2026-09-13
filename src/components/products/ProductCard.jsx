import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSound } from '../../context/SoundContext';

export const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { playCrunchSound } = useSound();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
    playCrunchSound();
  };

  return (
    <div className="p-card-modern">
      <div className="p-card-image-box" onClick={() => onQuickView(product)}>
        <img src={product.image} alt={product.nameAr} className="p-card-img" loading="lazy" />
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

        <button className="p-card-btn-add" onClick={handleAdd}>
          <ShoppingCart size={15} />
          <span>أضف للسلة</span>
        </button>
      </div>
    </div>
  );
};
