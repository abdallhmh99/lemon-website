import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { ProductCard } from '../components/products/ProductCard';
import { QuickViewModal } from '../components/products/QuickViewModal';

export const ProductsPage = () => {
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
    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !term ||
        p.nameAr.toLowerCase().includes(term) ||
        p.nameEn.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="container" style={{ padding: '40px 24px 80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-green-dark)', marginBottom: '8px' }}>جميع منتجات ليمون</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>فواكه وأطعمة مجففة بالتبريد طبيعية 100% بدون سكر مضاف أو مواد حافظة</p>
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
            placeholder="ابحث عن فاكهة، منتج، أو نكهة..."
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

      {/* Category Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
        <button
          onClick={() => setActiveCategory('all')}
          className={`category-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeCategory === 'all' ? 'var(--color-yellow)' : '#FFF'
          }}
        >
          الكل ({PRODUCTS_DATA.length})
        </button>
        <button
          onClick={() => setActiveCategory('fruits')}
          className={`category-tab-btn ${activeCategory === 'fruits' ? 'active' : ''}`}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeCategory === 'fruits' ? 'var(--color-yellow)' : '#FFF'
          }}
        >
          فواكه مجففة
        </button>
        <button
          onClick={() => setActiveCategory('candy')}
          className={`category-tab-btn ${activeCategory === 'candy' ? 'active' : ''}`}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeCategory === 'candy' ? 'var(--color-yellow)' : '#FFF'
          }}
        >
          شوكولاتة وكاندي
        </button>
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="products-five-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={(prod) => setSelectedProduct(prod)} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: '#FFFDF5', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🔍</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>لم يتم العثور على نتائج</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>جرب البحث بكلمات أخرى أو تصفح كافة التصنيفات</p>
          <button
            onClick={() => { setActiveCategory('all'); clearSearch(); }}
            className="btn-yellow-pill"
            style={{ display: 'inline-flex' }}
          >
            عرض كافة المنتجات
          </button>
        </div>
      )}

      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};
