import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '963953420082';
const MAX_ITEM_QUANTITY = 99;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('lemon_react_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('lemon_react_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    if (!product || !product.id) return;
    const safeQty = Math.max(1, Math.min(qty, MAX_ITEM_QUANTITY));

    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        const newQty = Math.min(existing.qty + safeQty, MAX_ITEM_QUANTITY);
        return prev.map(i => i.id === product.id ? { ...i, qty: newQty } : i);
      }
      return [...prev, { ...product, qty: safeQty }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev
        .map(i => {
          if (i.id !== productId) return i;
          const nextQty = i.qty + delta;
          if (nextQty > MAX_ITEM_QUANTITY) return { ...i, qty: MAX_ITEM_QUANTITY };
          return { ...i, qty: nextQty };
        })
        .filter(i => i.qty > 0);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(i => i.id !== productId));
  };

  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((sum, i) => sum + (i.qty || 0), 0);
  const totalPrice = cart.reduce((sum, i) => sum + ((i.price || 0) * (i.qty || 0)), 0);

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) return;
    let msg = `مرحباً متجر ليمون للفواكه المجففة بالتبريد 🍋\nأود تأكيد طلب من المتجر مع خدمة التوصيل:\n\n`;
    cart.forEach((i, idx) => {
      msg += `${idx + 1}. ${i.nameAr} × ${i.qty} = ${i.price * i.qty} ل.س\n`;
    });
    msg += `\n⭐ الإجمالي: ${totalPrice} ل.س\nيرجى تزويدي بتفاصيل الشحن والتوصيل للمحافظة. شكراً لكم!`;
    const cleanNumber = String(WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalCount,
      totalPrice,
      isDrawerOpen,
      setIsDrawerOpen,
      sendWhatsAppOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
