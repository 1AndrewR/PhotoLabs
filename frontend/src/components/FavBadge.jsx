import React from 'react';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => (
  <div className="fav-badge">
    <span className="fav-badge__icon">♥</span>
    {isFavPhotoExist && <span className="fav-badge__notification-dot"></span>}
  </div>
);

export default FavBadge;
