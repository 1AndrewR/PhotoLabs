import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, closeModal }) => (
  <div className="photo-details-modal" onClick={closeModal}>
    <div className="photo-details-modal__content" onClick={(e) => e.stopPropagation()}>
      <p>Modal content goes here</p>
    </div>
  </div>
);

export default PhotoDetailsModal;
