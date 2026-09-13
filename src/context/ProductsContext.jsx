import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS_DATA as INITIAL_PRODUCTS_DATA, CATEGORIES_DATA } from '../data/productsData';

const ProductsContext = createContext(null);

const STORAGE_KEY = 'lemon_store_products_v2';

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load products from localStorage:', e);
    }
    return INITIAL_PRODUCTS_DATA;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (e) {
      console.warn('Failed to save products to localStorage:', e);
    }
  }, [products]);

  // Add new product
  const addProduct = (newProduct) => {
    const id = newProduct.id || `product-${Date.now()}`;
    const productToAdd = {
      ...newProduct,
      id,
      rating: newProduct.rating || 5.0,
      reviewsCount: newProduct.reviewsCount || 1,
      inStock: newProduct.inStock !== false,
      price: Number(newProduct.price) || 350,
      currency: 'ل.س',
      isFeatured: Boolean(newProduct.isFeatured)
    };
    setProducts(prev => [productToAdd, ...prev]);
    return productToAdd;
  };

  // Update existing product
  const updateProduct = (id, updatedFields) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          ...updatedFields,
          price: updatedFields.price !== undefined ? Number(updatedFields.price) : p.price
        };
      }
      return p;
    }));
  };

  // Toggle Stock (in stock vs out of stock)
  const toggleStock = (id) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, inStock: p.inStock === false ? true : false };
      }
      return p;
    }));
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Reset to initial catalog
  const resetToDefault = () => {
    setProducts(INITIAL_PRODUCTS_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <ProductsContext.Provider value={{
      products,
      categories: CATEGORIES_DATA,
      addProduct,
      updateProduct,
      toggleStock,
      deleteProduct,
      resetToDefault
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
