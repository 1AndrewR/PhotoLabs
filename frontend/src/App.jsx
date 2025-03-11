import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(photoId)
        ? prevFavourites.filter((id) => id !== photoId)
        : [...prevFavourites, photoId]
    );
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;
