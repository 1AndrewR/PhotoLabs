import React from 'react';
import PhotoList from './PhotoList';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, similarPhotos, favourites, toggleFavourite, closeModal }) => {
  const isFavourite = favourites.includes(photo.id);

  return (
    <div className="photo-details-modal" onClick={closeModal}>
      <div
        className="photo-details-modal__content"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on content
      >
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="photo-details-modal__header">
          <img
            src={photo.url}
            alt={`Photo by ${photo.username}`}
            className="photo-details-modal__image"
          />
          <p>Photographer: {photo.username}</p>
          <p>Location: {photo.location.city}, {photo.location.country}</p>
          <button
            className={`photo-details-modal__fav-button ${isFavourite ? 'active' : ''}`}
            onClick={() => toggleFavourite(photo.id)}
          >
            ♥
          </button>
        </div>
        <div className="photo-details-modal__images">
          <h3>Similar Photos</h3>
          <PhotoList photos={similarPhotos} openModal={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
