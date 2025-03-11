import React from 'react';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <nav className="top-nav-bar__topics">
        <ul className="top-nav-bar__topic-list">
          {topics.map((topic, index) => (
            <li key={index} className="top-nav-bar__topic">
              {topic}
            </li>
          ))}
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
