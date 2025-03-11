import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal }) => (
  <div className="home-route">
    <TopNavigationBar topics={topics} />
    <PhotoList photos={photos} openModal={openModal} />
  </div>
);

export default HomeRoute;
