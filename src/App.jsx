import React from 'react';
import { TopAnnouncementBar } from './components/common/TopAnnouncementBar';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <div className="app-root">
      <TopAnnouncementBar />
      <Header />
      <AppRoutes />
      <Footer />
      <CartDrawer />
    </div>
  );
};
