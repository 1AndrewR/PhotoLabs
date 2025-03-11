import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { id, user, urls, location } = photo;

  return (
    <div className="photo-list__item">
      <img src={urls.regular} alt={`Photo ${id}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
        <p className="photo-list__user-info">{user.username}</p>
        <p className="photo-list__user-location">
          {location.city}, {location.country}
        </p>
        {/* Add the PhotoFavButton here */}
        <PhotoFavButton />
      </div>
    </div>
  );
};

export default PhotoListItem;
