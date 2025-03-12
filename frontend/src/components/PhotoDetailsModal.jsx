import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, similarPhotos, closeModal }) => {
  return (
    <div className="photo-details-modal" onClick={closeModal}>
      <div
        className="photo-details-modal__content"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="photo-details-modal__header">
          {/* Display larger photo */}
          <img
            src={photo.url}
            alt={`Photo by ${photo.username}`}
            className="photo-details-modal__image"
          />
          {/* Display photographer and location details */}
          <p>Photographer: {photo.username}</p>
          <p>Location: {photo.location.city}, {photo.location.country}</p>
        </div>
        <div className="photo-details-modal__images">
          <h3>Similar Photos</h3>
          {/* Reuse PhotoList for similar photos */}
          <PhotoList photos={similarPhotos} openModal={() => {}} /> {/* No-op for modal opening */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
