import React from 'react';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, favourites, toggleFavourite, openModal }) => {
  return (
    <div className="home-route">
      <PhotoList
        photos={photos}                 // Pass the photos state
        favourites={favourites}         // Pass the favourites state
        toggleFavourite={toggleFavourite} // Pass the toggleFavourite function
        openModal={openModal}           // Pass the openModal function
      />
    </div>
  );
};

export default HomeRoute;
