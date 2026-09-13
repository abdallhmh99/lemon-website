import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { SoundProvider } from './context/SoundContext';
import { App } from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <SoundProvider>
              <App />
            </SoundProvider>
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
