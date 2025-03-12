import React from 'react';
import PhotoList from './PhotoList'; // Reuse PhotoList for similar photos
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, similarPhotos, favourites, toggleFavourite, closeModal }) => {
  const isFavourite = favourites.includes(photo.id); // Check if the photo is favourited

  return (
    <div className="photo-details-modal" onClick={closeModal}>
      <div
        className="photo-details-modal__content"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="photo-details-modal__header">
          {/* Display large photo */}
          <img
            src={photo.url}
            alt={`Photo by ${photo.username}`}
            className="photo-details-modal__image"
          />
          {/* Photo details */}
          <p>Photographer: {photo.username}</p>
          <p>Location: {photo.location.city}, {photo.location.country}</p>
          {/* Favourite button */}
          <button
            className={`photo-details-modal__fav-button ${isFavourite ? 'active' : ''}`}
            onClick={() => toggleFavourite(photo.id)} // Toggle favourite on click
          >
            ♥
          </button>
        </div>
        {/* Similar photos section */}
        <div className="photo-details-modal__images">
          <h3>Similar Photos</h3>
          <PhotoList photos={similarPhotos} openModal={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
