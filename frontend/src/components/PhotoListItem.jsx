import React, { useState } from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo }) => {
  const { id, user, urls, location } = photo;

  // Maintain unique favourite status for each photo
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <li className="photo-list__item">
      <img src={urls.regular} alt={`Photo ${id}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
        <p className="photo-list__user-info">{user.username}</p>
        <p className="photo-list__user-location">
          {location.city}, {location.country}
        </p>
        <PhotoFavButton isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
      </div>
    </li>
  );
};

export default PhotoListItem;
