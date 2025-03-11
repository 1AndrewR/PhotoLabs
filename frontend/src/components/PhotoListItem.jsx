import React from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, username, imageSource, profile, location }) => (
  <div className="photo-list__item">
    <img src={imageSource} alt={`Photo ${id}`} className="main-photo" />
    <div className="details">
      <img src={profile} alt={`${username}'s profile`} className="profile-photo" />
      <p className="username">{username}</p>
      <p className="location">{location}</p>
    </div>
  </div>
);

export default PhotoListItem;
