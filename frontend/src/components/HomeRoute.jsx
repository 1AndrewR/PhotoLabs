import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, openModal }) => {
  return (
    <div className="home-route">
      <PhotoList photos={photos} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;