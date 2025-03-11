import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isFavourite, toggleFavourite }) => {
  const { id, user, urls, location } = photo;

  return (
    <li className="photo-list__item">
      <img src={urls.regular} alt={`Photo ${id}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
        <p className="photo-list__user-info">{user.username}</p>
        <p className="photo-list__user-location">
          {location.city}, {location.country}
        </p>
        <button
          className={`photo-list__fav-button ${isFavourite ? 'active' : ''}`}
          onClick={() => toggleFavourite(id)}
        >
          ♥
        </button>
      </div>
    </li>
  );
};

export default PhotoListItem;
