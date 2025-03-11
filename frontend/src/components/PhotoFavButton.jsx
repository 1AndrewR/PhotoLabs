import React, { useEffect } from 'react';
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ isFavourite, toggleFavourite }) => {
  // Log state change
  useEffect(() => {
    console.log(`Favourite status: ${isFavourite}`);
  }, [isFavourite]);

  return (
    <button
      className={`photo-fav-button ${isFavourite ? "photo-fav-button--active" : ""}`}
      onClick={toggleFavourite}
      aria-label="Favourite"
    >
      ♥
    </button>
  );
};

export default PhotoFavButton;
