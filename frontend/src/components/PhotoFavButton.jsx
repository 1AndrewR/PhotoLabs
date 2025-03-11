import React, { useState } from 'react';
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = () => {
    setIsFavourite(!isFavourite);
    console.log(`Favourite status: ${!isFavourite}`); // Logs the updated favourite status
  };

  return (
    <button
      className={`photo-fav-button ${isFavourite ? "photo-fav-button--active" : ""}`}
      onClick={handleClick}
      aria-label="Favourite"
    >
      ♥
    </button>
  );
};

export default PhotoFavButton;
