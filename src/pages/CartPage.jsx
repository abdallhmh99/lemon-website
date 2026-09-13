import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  Truck, 
  ArrowLeft, 
  ShieldCheck, 
  MapPin, 
  FileText,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const SYRIAN_GOVERNORATES = [
  'درعا (المركز الرئيسي)',
  'دمشق',
  'ريف دمشق',
  'حمص',
  'حماة',
  'حلب',
  'اللاذقية',
  'طرطوس',
  'السويداء',
  'القنيطرة',
  'دير الزور',
  'الحسكة',
  'الرقة',
  'إدلب'
];

export const CartPage = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    totalPrice, 
    totalCount 
  } = useCart();

  const [selectedGovernorate, setSelectedGovernorate] = useState('درعا (المركز الرئيسي)');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const handleCustomWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let msg = `مرحباً متجر ليمون للفواكه المجففة\nأود تأكيد طلب شراء جديد:\n\n`;
    
    if (customerName.trim()) {
      msg += `👤 الاسم: ${customerName.trim()}\n`;
    }
    msg += `📍 المحافظة: ${selectedGovernorate}\n`;
    if (customerAddress.trim()) {
      msg += `🏠 تفاصيل العنوان: ${customerAddress.trim()}\n`;
    }
    
    msg += `\n📦 تفاصيل المنتجات:\n`;
    cart.forEach((i, idx) => {
      msg += `${idx + 1}. ${i.nameAr} × ${i.qty} علبة = ${i.price * i.qty} ل.س\n`;
    });

    msg += `\n💰 المجموع الإجمالي: ${totalPrice} ل.س\n`;
    if (orderNotes.trim()) {
      msg += `📝 ملاحظات إضافية: ${orderNotes.trim()}\n`;
    }
    msg += `\nيرجى تأكيد موعد الشحن والتوصيل. شكراً لكم!`;

    const cleanNumber = '963953420082';
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="container cart-page-wrapper">
      {/* Page Header */}
      <div className="cart-page-hero">
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--color-green-soft)',
          color: 'var(--color-green-dark)',
          fontWeight: 800,
          padding: '4px 14px',
          borderRadius: '16px',
          fontSize: '0.84rem',
          marginBottom: '10px'
        }}>
          <Truck size={15} />
          <span>شحن وتوصيل لكافة المحافظات السورية</span>
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '8px' }}>
          سلة المشتريات
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem' }}>
          راجع منتجاتك المختارة وأكمل طلبك ليصلك طازجاً ومقرمشاً إلى باب بيتك
        </p>
      </div>

      {cart.length === 0 ? (
        <div style={{
          textAlign: 'center',
          background: '#FFFFFF',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '80px 24px',
          maxWidth: '560px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--color-yellow-light)',
            color: 'var(--color-green-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}>
            <ShoppingBag size={38} />
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 900, marginBottom: '10px' }}>
            سلة المشتريات فارغة
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '26px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            لم تقم بإضافة أي منتج إلى السلة بعد. استكشف تشكيلة ليمون الطبيعية من الفواكه المقرمشة!
          </p>
          <Link to="/products" className="btn-yellow-pill" style={{ display: 'inline-flex', padding: '12px 32px' }}>
            <span>تصفح كافة المنتجات الآن</span>
            <ArrowLeft size={18} />
          </Link>
        </div>
      ) : (
        <div className="cart-page-grid">
          {/* Right Column: Items List */}
          <div>
            <div className="cart-table-card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                  المنتجات في سلتك ({totalCount} علبة)
                </h3>
                <button
                  onClick={clearCart}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    color: '#ef4444',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: '#fee2e2'
                  }}
                  title="إفراغ السلة بالكامل"
                >
                  <RotateCcw size={14} />
                  <span>إفراغ السلة</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '18px',
                      padding: '16px',
                      borderRadius: '16px',
                      background: '#FFFDF5',
                      border: '1px solid var(--border-color)',
                      flexWrap: 'wrap'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.nameAr}
                      style={{
                        width: '76px',
                        height: '76px',
                        borderRadius: '12px',
                        background: '#FFF',
                        border: '1px solid var(--border-color)',
                        padding: '4px',
                        objectFit: 'contain'
                      }}
                    />

                    <div style={{ flex: 1, minWidth: '160px', textAlign: 'right' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--color-text-dark)', marginBottom: '4px' }}>
                        {item.nameAr}
                      </h4>
                      <div style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                        {item.weightDry || '70 - 90 غرام'} • {item.origin || 'منشأ سوري'}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--color-green-dark)' }} className="num-font">
                        {item.price} ل.س للعلبة
                      </div>
                    </div>

                    {/* Stepper */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div className="cart-stepper-pill" style={{ padding: '4px 10px' }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="cart-stepper-btn"
                          style={{ width: '28px', height: '28px' }}
                          title="تقليل"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="cart-stepper-qty num-font" style={{ fontSize: '1rem', minWidth: '22px' }}>
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="cart-stepper-btn"
                          style={{ width: '28px', height: '28px' }}
                          title="زيادة"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div style={{ minWidth: '85px', textAlign: 'left' }}>
                        <span className="num-font" style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--color-green-dark)' }}>
                          {item.price * item.qty}
                        </span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, marginRight: '4px' }}>ل.س</span>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cart-item-trash-btn"
                        style={{ padding: '8px' }}
                        title="إزالة المنتج"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <Link
                  to="/products"
                  className="btn-video-outline"
                  style={{ display: 'inline-flex', padding: '9px 18px', fontSize: '0.9rem' }}
                >
                  <ArrowLeft size={16} />
                  <span>مواصلة التسوق</span>
                </Link>

                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  الأسعار شاملة ضريبة القيمة المضافة إن وجدت
                </span>
              </div>
            </div>
          </div>

          {/* Left Column: Order & Shipping Summary */}
          <div>
            <div className="cart-summary-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '18px' }}>
                ملخص الطلب والشحن
              </h3>

              {/* Delivery Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                    اختر المحافظة للتوصيل *
                  </label>
                  <select
                    value={selectedGovernorate}
                    onChange={(e) => setSelectedGovernorate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      background: '#FFFDF5',
                      fontWeight: 700,
                      fontSize: '0.92rem'
                    }}
                  >
                    {SYRIAN_GOVERNORATES.map((gov) => (
                      <option key={gov} value={gov}>{gov}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                    الاسم الكامل (اختياري)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="مثال: أحمد المحمد"
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                    تفاصيل العنوان (اختياري)
                  </label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="المدينة، الشارع، أو أقرب نقطة دالة"
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              {/* Price Calculation Lines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '14px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                  <span>المجموع الفرعي ({totalCount} علبة):</span>
                  <span className="num-font" style={{ fontWeight: 800, color: 'var(--color-text-dark)' }}>
                    {totalPrice} ل.س
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                  <span>تكلفة الشحن:</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-green-dark)' }}>
                    حسب المحافظة (تأكيد فوري)
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px dashed var(--border-color)' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>الإجمالي النهائي:</span>
                  <span className="num-font" style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-green-dark)' }}>
                    {totalPrice} <span style={{ fontSize: '1rem', fontWeight: 800 }}>ل.س</span>
                  </span>
                </div>
              </div>

              {/* WhatsApp Action */}
              <button
                onClick={handleCustomWhatsAppOrder}
                className="btn-whatsapp-checkout"
                style={{ padding: '16px 20px', fontSize: '1.1rem' }}
              >
                <MessageCircle size={24} />
                <span>إرسال وتأكيد الطلب عبر واتساب</span>
              </button>

              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '12px', lineHeight: 1.5 }}>
                سيتم فتح محادثة مباشرة مع متجر ليمون عبر الرقم 0953420082 مع تفاصيل طلبك جاهزة للإرسال فوراً
              </p>

              {/* Trust Features */}
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-green-dark)' }} />
                  <span>طبيعي 100% بدون سكر مضاف أو مواد حافظة</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} style={{ color: 'var(--color-green-dark)' }} />
                  <span>المشروع الأول في درعا مع شحن لكافة المحافظات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
