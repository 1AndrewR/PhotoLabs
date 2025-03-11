import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, closeModal }) => (
  <div className="photo-details-modal" onClick={closeModal}>
    <div
      className="photo-details-modal__content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
        aria-label="Close modal"
      >
        &times;
      </button>
      <p>Modal content goes here</p>
    </div>
  </div>
);

export default PhotoDetailsModal;
