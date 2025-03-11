import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, isFavPhotoExist }) => (
  <div className="top-nav-bar">
    <span className="top-nav-bar__logo">PhotoLabs</span>
    <nav className="top-nav-bar__topics">
      <TopicList topics={topics} />
    </nav>
    <FavBadge isFavPhotoExist={isFavPhotoExist} />
  </div>
);

export default TopNavigationBar;
