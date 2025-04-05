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
    setPhotos, // Added setPhotos from useApplicationData
  } = useApplicationData();

  const handleTopicClick = (topicId) => {
    if (topicId) {
      fetch(`/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched photos for topic:", data);
          setPhotos(data); // Update state with fetched photos
        })
        .catch((error) => console.error("Error fetching photos:", error));
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
