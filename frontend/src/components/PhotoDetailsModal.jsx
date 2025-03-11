import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, similarPhotos, closeModal }) => {
  return (
    <div className="photo-details-modal" onClick={closeModal}>
      <div
        className="photo-details-modal__content"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
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
          <p>{photo.location.city}, {photo.location.country}</p>
        </div>
        <div className="photo-details-modal__images">
          <h3>Similar Photos</h3>
          <PhotoList photos={similarPhotos} openModal={() => {}} /> {/* Pass a no-op for modal */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
