import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(photoId)
        ? prevFavourites.filter((id) => id !== photoId) // Remove photo from favourites
        : [...prevFavourites, photoId] // Add photo to favourites
    );
    console.log('Favourites updated:', favourites);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={photos.filter((p) => p.id !== selectedPhoto?.id)} // Exclude the selected photo
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;


