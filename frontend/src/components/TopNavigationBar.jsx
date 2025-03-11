import React from 'react';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <nav className="top-nav-bar__topics">
        <ul className="top-nav-bar__topic-list">
          <li className="top-nav-bar__topic">Nature</li>
          <li className="top-nav-bar__topic">Cities</li>
          <li className="top-nav-bar__topic">People</li>
        </ul>
      </nav>
      <div className="top-nav-bar__badge">
        <span className="top-nav-bar__fav-icon">♥</span>
        <span className="top-nav-bar__fav-count">0</span>
      </div>
    </div>
  );
};

export default TopNavigationBar;
