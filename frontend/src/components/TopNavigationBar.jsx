import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favourites }) => (
  <div className="top-nav-bar">
    <span className="top-nav-bar__logo">PhotoLabs</span>
    <nav className="top-nav-bar__topics">
      <TopicList topics={topics} />
    </nav>
    <div className="top-nav-bar__badge">
      <span className="top-nav-bar__fav-icon">
        ♥
        {favourites.length > 0 && <span className="top-nav-bar__notification-dot"></span>}
      </span>
      <span className="top-nav-bar__fav-count">{favourites.length}</span>
    </div>
  </div>
);

export default TopNavigationBar;
