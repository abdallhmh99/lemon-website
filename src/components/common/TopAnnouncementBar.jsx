import React from 'react';
import { Truck, MapPin } from 'lucide-react';

export const TopAnnouncementBar = () => {
  return (
    <div className="top-announcement-bar">
      <div className="container top-bar-flex">
        <div className="top-bar-item">
          <MapPin size={15} />
          <span>ليمون | المشروع الأول في درعا للفواكه المجففة (طعام رواد الفضاء)</span>
        </div>
        <div className="top-bar-item">
          <Truck size={15} />
          <span>خدمة توصيل وشحن لكافة المحافظات السورية</span>
        </div>
      </div>
    </div>
  );
};
