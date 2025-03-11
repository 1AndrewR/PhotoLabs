import React from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, username, imageSource, profile, location }) => (
  <div className="photo-list__item">
    <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image" />
    <div className="photo-list__user-details">
      <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
      <p className="photo-list__user-info">{username}</p>
      <p className="photo-list__user-location">{location}</p>
    </div>
  </div>
);

export default PhotoListItem;
