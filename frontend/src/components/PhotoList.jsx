import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, openModal }) => (
  <ul className="photo-list">
    {photos.map((photo) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        openModal={openModal}
      />
    ))}
  </ul>
);

export default PhotoList;
