import React from 'react';
import '../styles/FavBadge.scss';

const FavBadge = ({ count }) => {
  return (
    <div className="fav-badge">
      <span className="fav-badge__icon">♥</span>
      <span className="fav-badge__count">{count}</span>
    </div>
  );
};

export default FavBadge;
