import React from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, username, imageSource, profile, location }) => (
  <div className="photo-list__item">
    <img src={imageSource} alt={`Photo ${id}`} className="photo-list__item-image" />
    <div className="photo-list__item-details">
      <img src={profile} alt={`${username}'s profile`} className="photo-list__item-profile" />
      <p className="photo-list__item-username">{username}</p>
      <p className="photo-list__item-location">{location}</p>
    </div>
  </div>
);

export default PhotoListItem;
