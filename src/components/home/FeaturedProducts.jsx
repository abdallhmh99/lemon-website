import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowLeft } from 'lucide-react';
import { useProducts } from '../../context/ProductsContext';
import { ProductCard } from '../products/ProductCard';
import { QuickViewModal } from '../products/QuickViewModal';

export const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products } = useProducts();
  const featured = products.filter(p => p.isFeatured).slice(0, 5);

  return (
    <section id="featured-products" className="featured-products-section">
      <div className="container">
        <div className="section-title-header">
          <div>
            <span className="section-tag-small">الأكثر مبيعاً</span>
            <h2 className="section-heading-with-leaf">
              <span>منتجاتنا المميزة</span>
              <Leaf size={20} style={{ color: 'var(--color-green-light)' }} />
            </h2>
          </div>

          <Link to="/products" className="view-all-link">
            <span>جميع المنتجات</span>
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="products-five-grid">
          {featured.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className={product.id === 'mandarin-crisps' ? 'hide-on-mobile-product' : ''}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
