import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, closeModal }) => (
  <div className="photo-details-modal" onClick={closeModal}>
    <div
      className="photo-details-modal__content"
      onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside the content
    >
      <button
        onClick={closeModal}
        className="photo-details-modal__close-button"
        aria-label="Close modal"
      >
        <img src="/close-symbol.png" alt="close symbol" />
      </button>
      <p>Modal content goes here</p>
    </div>
  </div>
);

export default PhotoDetailsModal;
