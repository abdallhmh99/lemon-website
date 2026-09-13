import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  X, 
  Lock, 
  Unlock, 
  Package, 
  AlertCircle, 
  RotateCcw, 
  ArrowLeft, 
  Eye, 
  CheckCircle2, 
  Layers,
  Sparkles
} from 'lucide-react';
import { useProducts } from '../context/ProductsContext';

export const AdminPage = () => {
  const { 
    products, 
    categories, 
    addProduct, 
    updateProduct, 
    toggleStock, 
    deleteProduct, 
    resetToDefault 
  } = useProducts();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('lemon_admin_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    nameAr: '',
    nameEn: '',
    category: 'fruits',
    categoryAr: 'فواكه',
    price: 350,
    weightFresh: '400 - 500 غرام فريش',
    weightDry: '70 - 90 غرام صافي',
    waterLoss: '90%',
    nutrientRetention: '95%',
    origin: 'منشأ سوري 🇸🇾',
    description: '',
    image: '',
    inStock: true,
    isFeatured: false
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Default PIN password: lemon2026 or admin
    if (passwordInput === 'lemon2026' || passwordInput === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('lemon_admin_auth', 'true');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('lemon_admin_auth');
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      nameAr: '',
      nameEn: '',
      category: 'fruits',
      categoryAr: 'فواكه',
      price: 350,
      weightFresh: '400 - 500 غرام فريش',
      weightDry: '70 - 90 غرام صافي',
      waterLoss: '90%',
      nutrientRetention: '95%',
      origin: 'منشأ سوري 🇸🇾',
      description: '',
      image: '',
      inStock: true,
      isFeatured: false
    });
    setIsModalOpen(true);
  };

  const openEditModal = (p) => {
    setEditingProduct(p);
    setFormData({
      nameAr: p.nameAr || '',
      nameEn: p.nameEn || '',
      category: p.category || 'fruits',
      categoryAr: p.categoryAr || 'فواكه',
      price: p.price || 350,
      weightFresh: p.weightFresh || '400 - 500 غرام فريش',
      weightDry: p.weightDry || '70 - 90 غرام صافي',
      waterLoss: p.waterLoss || '90%',
      nutrientRetention: p.nutrientRetention || '95%',
      origin: p.origin || 'منشأ سوري 🇸🇾',
      description: p.description || '',
      image: p.image || '',
      inStock: p.inStock !== false,
      isFeatured: Boolean(p.isFeatured)
    });
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e) => {
    const catId = e.target.value;
    const found = categories.find(c => c.id === catId);
    setFormData(prev => ({
      ...prev,
      category: catId,
      categoryAr: found ? found.nameAr : catId
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nameAr.trim()) {
      alert('يرجى إدخال اسم المنتج بالعربية');
      return;
    }

    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
    } else {
      addProduct(formData);
    }
    setIsModalOpen(false);
  };

  // Login Gate View
  if (!isAuthenticated) {
    return (
      <div className="container" style={{ padding: '80px 24px', maxWidth: '440px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '40px 30px',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--color-yellow-light)',
            color: 'var(--color-green-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}>
            <Lock size={28} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px' }}>
            لوحة تحكم متجر ليمون 🍋
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            يرجى إدخال رمز الأمان أو كلمة المرور للمتابعة
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input
              type="password"
              placeholder="كلمة المرور (الافتراضية: lemon2026)"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: authError ? '2px solid #ef4444' : '1px solid var(--border-color)',
                outline: 'none',
                textAlign: 'center',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
              autoFocus
            />

            {authError && (
              <span style={{ color: '#ef4444', fontSize: '0.82rem', fontWeight: 700 }}>
                كلمة المرور غير صحيحة، حاول مجدداً
              </span>
            )}

            <button type="submit" className="btn-yellow-pill" style={{ justifyContent: 'center', padding: '12px' }}>
              <Unlock size={18} />
              <span>دخول إلى لوحة التحكم</span>
            </button>
          </form>

          <div style={{ marginTop: '20px' }}>
            <Link to="/" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textDecoration: 'underline' }}>
              العودة للمتجر الرئيسي
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Stats
  const totalCount = products.length;
  const inStockCount = products.filter(p => p.inStock !== false).length;
  const outOfStockCount = totalCount - inStockCount;

  return (
    <div className="container" style={{ padding: '40px 24px 80px 24px' }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '32px',
        paddingBottom: '20px',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-green-dark)' }}>
              إدارة المنتجات والمخزون 🍋
            </h1>
            <span style={{ background: 'var(--color-green-soft)', color: 'var(--color-green-dark)', padding: '2px 10px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 800 }}>
              لوحة الإدارة
            </span>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            التحكم الكامل بأسعار وتوفر وأصناف فواكه ليمون المجففة بالتبريد
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <Link to="/products" className="btn-video-outline" style={{ display: 'inline-flex', padding: '9px 16px', fontSize: '0.88rem' }}>
            <Eye size={16} />
            <span>عرض المتجر</span>
          </Link>

          <button onClick={openAddModal} className="btn-yellow-pill" style={{ display: 'inline-flex', padding: '9px 18px', fontSize: '0.88rem' }}>
            <Plus size={18} />
            <span>إضافة منتج جديد</span>
          </button>

          <button onClick={handleLogout} className="btn-video-outline" style={{ padding: '9px 14px', fontSize: '0.85rem' }}>
            تسجيل خروج
          </button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <div style={{ background: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--color-yellow-light)', color: 'var(--color-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Package size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>إجمالي المنتجات</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900 }} className="num-font">{totalCount}</div>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--color-green-soft)', color: 'var(--color-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>متوفر في المخزون</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-green-dark)' }} className="num-font">{inStockCount}</div>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#fee2e2', color: '#b91c1c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AlertCircle size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>نفدت الكمية</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#b91c1c' }} className="num-font">{outOfStockCount}</div>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--bg-cream)', color: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Layers size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>التصنيفات المعتمدة</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900 }} className="num-font">{categories.length - 1}</div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        marginBottom: '30px'
      }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>قائمة المنتجات الحالية</h3>
          <button 
            onClick={() => {
              if (window.confirm('هل أنت متأكد من رغبتك في استعادة كتالوج المنتجات الأصلي؟')) {
                resetToDefault();
              }
            }} 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}
          >
            <RotateCcw size={14} />
            <span>استعادة الافتراضي</span>
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#FFFDF5', borderBottom: '1px solid var(--border-color)', color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
                <th style={{ padding: '14px 20px' }}>المنتج</th>
                <th style={{ padding: '14px 16px' }}>التصنيف</th>
                <th style={{ padding: '14px 16px' }}>السعر</th>
                <th style={{ padding: '14px 16px' }}>حالة التوفر</th>
                <th style={{ padding: '14px 16px' }}>الصفحة الرئيسية</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s' }}>
                  {/* Product Info */}
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img 
                        src={p.image} 
                        alt={p.nameAr} 
                        style={{ width: '44px', height: '44px', objectFit: 'contain', background: '#FFFDF5', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '2px' }} 
                      />
                      <div>
                        <div style={{ fontWeight: 800 }}>{p.nameAr}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{p.nameEn}</div>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ fontSize: '0.8rem', background: 'var(--bg-cream)', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                      {p.categoryAr || p.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td style={{ padding: '14px 16px', fontWeight: 900, color: 'var(--color-green-dark)' }}>
                    <span className="num-font">{p.price}</span> ل.س
                  </td>

                  {/* Stock Toggle */}
                  <td style={{ padding: '14px 16px' }}>
                    <button
                      onClick={() => toggleStock(p.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        background: p.inStock !== false ? 'var(--color-green-soft)' : '#fee2e2',
                        color: p.inStock !== false ? 'var(--color-green-dark)' : '#b91c1c'
                      }}
                      title="اضغط لتغيير الحالة"
                    >
                      {p.inStock !== false ? (
                        <>
                          <Check size={14} />
                          <span>متوفر بالمخزون</span>
                        </>
                      ) : (
                        <>
                          <X size={14} />
                          <span>نفدت الكمية</span>
                        </>
                      )}
                    </button>
                  </td>

                  {/* Featured Status */}
                  <td style={{ padding: '14px 16px' }}>
                    {p.isFeatured ? (
                      <span style={{ color: 'var(--color-green-dark)', fontSize: '0.8rem', fontWeight: 700 }}>★ معروض</span>
                    ) : (
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>-</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td style={{ padding: '14px 20px', textAlign: 'left' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <button 
                        onClick={() => openEditModal(p)}
                        style={{ padding: '6px', borderRadius: '6px', background: 'var(--bg-cream)', color: 'var(--color-text)' }}
                        title="تعديل المنتج"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button 
                        onClick={() => {
                          if (window.confirm(`هل أنت متأكد من حذف المنتج: ${p.nameAr}؟`)) {
                            deleteProduct(p.id);
                          }
                        }}
                        style={{ padding: '6px', borderRadius: '6px', background: '#fee2e2', color: '#b91c1c' }}
                        title="حذف المنتج"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}>
          <div className="modal-card" style={{ maxWidth: '620px', maxHeight: '90vh', overflowY: 'auto' }}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '18px' }}>
              {editingProduct ? 'تعديل بيانات المنتج' : 'إضافة منتج جديد لليمون'}
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'right' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>اسم المنتج (بالعربية) *</label>
                  <input
                    type="text"
                    required
                    value={formData.nameAr}
                    onChange={(e) => setFormData(prev => ({ ...prev, nameAr: e.target.value }))}
                    placeholder="مثال: فراولة مجففة بالتبريد"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>الاسم (بالإنجليزية)</label>
                  <input
                    type="text"
                    value={formData.nameEn}
                    onChange={(e) => setFormData(prev => ({ ...prev, nameEn: e.target.value }))}
                    placeholder="e.g. Dried Strawberry"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>التصنيف</label>
                  <select
                    value={formData.category}
                    onChange={handleCategoryChange}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', background: '#FFF' }}
                  >
                    {categories.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>{c.nameAr}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>السعر (ليرة سورية ل.س)</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>صورة المنتج</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ width: '100%', padding: '8px', fontSize: '0.85rem' }}
                />
                {formData.image && (
                  <div style={{ marginTop: '8px', textAlign: 'center' }}>
                    <img src={formData.image} alt="معاينة" style={{ height: '70px', margin: '0 auto', objectFit: 'contain' }} />
                  </div>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>الوصف وتفاصيل المنتج</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="فاكهة طبيعية 100% مجففة بالتبريد..."
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 700 }}>
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) => setFormData(prev => ({ ...prev, inStock: e.target.checked }))}
                  />
                  <span>متوفر في المخزون حالياً</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 700 }}>
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                  />
                  <span>تثبيت في الصفحة الرئيسية</span>
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-video-outline" style={{ padding: '10px 20px' }}>
                  إلغاء
                </button>
                <button type="submit" className="btn-yellow-pill" style={{ padding: '10px 24px' }}>
                  {editingProduct ? 'حفظ التعديلات' : 'إضافة المنتج'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
