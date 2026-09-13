import React from 'react';
import { ShoppingBag, X, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer = () => {
  const {
    cart,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    totalPrice,
    sendWhatsAppOrder
  } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="cart-drawer-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setIsDrawerOpen(false); }}>
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={22} style={{ color: 'var(--color-green-dark)' }} />
            <span>سلة المشتريات</span>
            <span className="cart-badge-pill">{cart.reduce((s, i) => s + i.qty, 0)}</span>
          </div>
          <button className="cart-close-btn" onClick={() => setIsDrawerOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="free-shipping-progress">
          <div className="free-shipping-text">
            متجر ليمون | خدمة شحن وتوصيل لكافة المحافظات
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: Math.min(100, (totalPrice / 1500) * 100) + '%' }} />
          </div>
        </div>

        {/* Cart items list */}
        <div className="cart-items-list">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px', color: 'var(--color-green-dark)' }}>
                <ShoppingBag size={42} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '6px' }}>سلتك فارغة</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>أضف فواكه رواد الفضاء المقرمشة لتجربة طعم فريد!</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FFFDF5', border: '1px solid var(--border-color)', padding: '10px', borderRadius: 'var(--radius-sm)', marginBottom: '10px' }}>
                <img src={item.image} alt={item.nameAr} style={{ width: '50px', height: '50px', objectFit: 'contain', background: '#FFF', borderRadius: '4px', padding: '2px' }} />
                <div style={{ flex: 1 }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 800 }}>{item.nameAr}</h5>
                  <span style={{ fontSize: '0.82rem', fontWeight: 900, color: 'var(--color-green-dark)' }}>{item.price * item.qty} ل.س</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2px 8px' }}>
                  <button onClick={() => updateQuantity(item.id, -1)} style={{ fontWeight: 800, fontSize: '0.9rem' }}>-</button>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, minWidth: '14px', textAlign: 'center' }}>{item.qty}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={{ fontWeight: 800, fontSize: '0.9rem' }}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="cart-footer">
          <div className="cart-summary-row">
            <span>الإجمالي:</span>
            <span className="cart-total-price num-font">{totalPrice} ل.س</span>
          </div>

          <button onClick={sendWhatsAppOrder} className="btn-whatsapp-order">
            <MessageCircle size={20} />
            <span>إتمام الطلب عبر واتساب</span>
          </button>
        </div>
      </div>
    </div>
  );
};
