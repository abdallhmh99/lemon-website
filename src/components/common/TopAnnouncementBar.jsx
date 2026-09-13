import React from 'react';
import { Truck, Leaf } from 'lucide-react';

export const TopAnnouncementBar = () => {
  return (
    <div className="top-announcement-bar">
      <div className="container top-bar-flex">
        <div className="top-bar-item">
          <Truck size={15} />
          <span>شحن مجاني للطلبات فوق 199 ريال / ل.س</span>
        </div>
        <div className="top-bar-item">
          <Leaf size={15} />
          <span>منتجات طبيعية 100%</span>
        </div>
      </div>
    </div>
  );
};
