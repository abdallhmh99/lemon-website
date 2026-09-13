import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  Truck, 
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer = () => {
  const {
    cart,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalCount,
    sendWhatsAppOrder
  } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div 
      className="cart-drawer-backdrop open" 
      onClick={(e) => { if (e.target === e.currentTarget) setIsDrawerOpen(false); }}
    >
      <div className="cart-drawer">
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={22} />
            <span>سلة المشتريات</span>
            {totalCount > 0 && <span className="cart-badge-pill">{totalCount}</span>}
          </div>

          <div className="cart-header-actions">
            {cart.length > 0 && (
              <button 
                onClick={clearCart} 
                className="cart-clear-btn"
                title="إفراغ كافة العناصر"
              >
                إفراغ السلة
              </button>
            )}
            <button 
              className="cart-close-btn" 
              onClick={() => setIsDrawerOpen(false)}
              title="إغلاق السلة"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Nationwide Delivery Banner */}
        <div className="cart-delivery-banner">
          <Truck size={17} style={{ flexShrink: 0 }} />
          <span>خدمة توصيل وشحن لكافة المحافظات السورية</span>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-list">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', margin: 'auto 0' }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'var(--color-yellow-light)',
                color: 'var(--color-green-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <ShoppingBag size={34} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '8px', color: 'var(--color-text-dark)' }}>
                سلتك فارغة حالياً
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '22px', lineHeight: 1.6 }}>
                تفضل باختيار أشهى الفواكه المقرمشة والصحية من متجر ليمون!
              </p>
              <Link
                to="/products"
                onClick={() => setIsDrawerOpen(false)}
                className="btn-yellow-pill"
                style={{ display: 'inline-flex', padding: '10px 24px', fontSize: '0.92rem' }}
              >
                <span>تصفح المنتجات الآن</span>
                <ArrowLeft size={16} />
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.nameAr} className="cart-item-thumb" />

                <div className="cart-item-info">
                  <h5 className="cart-item-name">{item.nameAr}</h5>
                  <span className="cart-item-unit-price num-font">
                    {item.price} ل.س / علبة
                  </span>
                  <span className="cart-item-total num-font">
                    {item.price * item.qty} ل.س
                  </span>
                </div>

                {/* Quantity Stepper */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="cart-item-trash-btn"
                    title="حذف من السلة"
                  >
                    <Trash2 size={16} />
                  </button>

                  <div className="cart-stepper-pill">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="cart-stepper-btn"
                      title="تقليل الكمية"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="cart-stepper-qty num-font">{item.qty}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="cart-stepper-btn"
                      title="زيادة الكمية"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-line">
              <span>عدد المنتجات:</span>
              <span className="num-font" style={{ fontWeight: 800 }}>{totalCount} علبة</span>
            </div>

            <div className="cart-summary-line">
              <span>الشحن والتوصيل:</span>
              <span style={{ fontSize: '0.84rem', color: 'var(--color-green-dark)', fontWeight: 700 }}>
                تأكيد فوري حسب المحافظة
              </span>
            </div>

            <div className="cart-summary-total-line">
              <span>المجموع الإجمالي:</span>
              <span className="cart-summary-total-price num-font">
                {totalPrice} <span style={{ fontSize: '1rem', fontWeight: 800 }}>ل.س</span>
              </span>
            </div>

            <button onClick={sendWhatsAppOrder} className="btn-whatsapp-checkout">
              <MessageCircle size={22} />
              <span>إتمام الطلب عبر واتساب</span>
            </button>

            <div style={{ textAlign: 'center', marginTop: '2px' }}>
              <Link
                to="/cart"
                onClick={() => setIsDrawerOpen(false)}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--color-green-dark)',
                  textDecoration: 'underline'
                }}
              >
                عرض صفحة السلة الكاملة وتفاصيل الشحن
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
