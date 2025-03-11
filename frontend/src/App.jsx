import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    const photoDetails = {
      id: photo.id,
      url: photo.urls.full,
      username: photo.user.username,
      location: photo.location,
    };
    console.log('Photo details passed to modal:', photoDetails); // Print relevant details
    setSelectedPhoto(photoDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} openModal={openModal} />
      {isModalOpen && (
        <PhotoDetailsModal photo={selectedPhoto} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
