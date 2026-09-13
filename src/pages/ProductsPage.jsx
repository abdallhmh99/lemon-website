import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, Sparkles, Truck } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { ProductCard } from '../components/products/ProductCard';
import { QuickViewModal } from '../components/products/QuickViewModal';

export const ProductsPage = () => {
  const { products, categories } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) {
      setSearchTerm(q);
    }
  }, [searchParams]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      setSearchParams({ search: value.trim() });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !term ||
        p.nameAr.toLowerCase().includes(term) ||
        p.nameEn.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchTerm]);

  return (
    <div className="container" style={{ padding: '40px 24px 80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--color-yellow-light)',
          color: 'var(--color-green-dark)',
          fontWeight: 800,
          padding: '4px 14px',
          borderRadius: '16px',
          fontSize: '0.82rem',
          marginBottom: '10px'
        }}>
          <Sparkles size={14} />
          <span>منشأ سوري 🇸🇾 | طعام رواد الفضاء الصحي</span>
        </span>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-green-dark)', marginBottom: '8px' }}>
          منتجات ليمون للفواكه المجففة بالتبريد
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem' }}>
          سعر العلبة 350 ل.س • طبيعية 100% بدون سكر مضاف • خدمة شحن وتوصيل لكافة المحافظات
        </p>
      </div>

      {/* Search Input */}
      <div style={{ maxWidth: '500px', margin: '0 auto 24px auto', position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#FFF',
          border: '1.5px solid var(--border-color)',
          borderRadius: '30px',
          padding: '8px 16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <Search size={20} style={{ color: 'var(--color-text-muted)', marginLeft: '8px' }} />
          <input
            type="text"
            placeholder="ابحث عن فاكهة، نكهة، أو منتج..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
              fontSize: '0.95rem',
              background: 'transparent',
              fontFamily: 'inherit'
            }}
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              title="مسح البحث"
            >
              <X size={18} style={{ color: 'var(--color-text-muted)' }} />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs (فواكه، خضار، كاندي، ايس كريم، أصناف غريبة، عروض) */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
        {categories.map((cat) => {
          const count = cat.id === 'all' 
            ? products.length 
            : products.filter(p => p.category === cat.id).length;
          
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeCategory === cat.id ? 'var(--color-yellow)' : '#FFF',
                color: activeCategory === cat.id ? 'var(--color-text-dark)' : 'var(--color-text)'
              }}
            >
              {cat.nameAr} {count > 0 && `(${count})`}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="products-five-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={(prod) => setSelectedProduct(prod)} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: '#FFFDF5', borderRadius: '20px', border: '1px solid var(--border-color)', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>✨</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
            قريباً في هذا القسم!
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '18px', lineHeight: 1.6 }}>
            نعمل في متجر ليمون باستمرار على إضافة وتجفيف أصناف جديدة ومبتكرة بتقنية التجميد. تابعنا ليصلك كل جديد فور توفره!
          </p>
          <button
            onClick={() => { setActiveCategory('all'); clearSearch(); }}
            className="btn-yellow-pill"
            style={{ display: 'inline-flex' }}
          >
            عرض المنتجات المتوفرة حالياً
          </button>
        </div>
      )}

      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};
