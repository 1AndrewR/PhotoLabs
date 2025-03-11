import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      {/* Render the TopNavigationBar and pass topics */}
      <TopNavigationBar topics={topics} />
      
      {/* Render the PhotoList and pass photos */}
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
