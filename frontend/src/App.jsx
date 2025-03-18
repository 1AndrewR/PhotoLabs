import React from "react";
import "./App.scss";
import "./styles/HomeRoute.scss";
import HomeRoute from "./routes/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {
  const {
    topics,
    photos,
    isModalOpen,
    selectedPhoto,
    favouritePhotos,
    openModal,
    closeModal,
    isFavourite,
    addToFavourites,
    removeFromFavourites,
  } = useApplicationData();

  const handleTopicClick = (topicId) => {
    if (topicId) {
      fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data) => console.log("Update photos after topic selection:", data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="App">
      <HomeRoute
        handleTopicClick={handleTopicClick}
        photos={photos}
        topics={topics}
        openModal={openModal}
        closeModal={closeModal}
        isFavourite={isFavourite}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        favouritePhotos={favouritePhotos}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photos={photos}
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          isFavourite={isFavourite}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
          favouritePhotos={favouritePhotos}
        />
      )}
    </div>
  );
};

export default App;
