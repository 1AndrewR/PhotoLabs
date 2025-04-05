import React, { useReducer, useEffect } from "react";

const SET_TOPICS = "SET_TOPICS";
const SET_PHOTOS = "SET_PHOTOS";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const SET_SIMILAR_PHOTOS = "SET_SIMILAR_PHOTOS";
const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favouritePhotos: [],
  topics: [],
  photos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TOPICS:
      return { ...state, topics: action.payload };
    case SET_PHOTOS:
      return { ...state, photos: action.payload };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPhoto: action.payload };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPhoto: null, similarPhotos: [] };
    case SET_SIMILAR_PHOTOS:
      return { ...state, similarPhotos: action.payload };
    case ADD_TO_FAVOURITES:
      return { ...state, favouritePhotos: [...state.favouritePhotos, action.payload] };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter((fav) => fav.id !== action.payload.id),
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_TOPICS, payload: data }))
      .catch((error) => console.error("Error fetching topics:", error));

    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_PHOTOS, payload: data }))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  const setPhotos = (photos) => {
    dispatch({ type: SET_PHOTOS, payload: photos });
  };

  const openModal = (photo) => {
    dispatch({ type: OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const isFavourite = (photo) => state.favouritePhotos.some((fav) => fav.id === photo.id);

  const addToFavourites = (photo) => {
    dispatch({ type: ADD_TO_FAVOURITES, payload: photo });
  };

  const removeFromFavourites = (photo) => {
    dispatch({ type: REMOVE_FROM_FAVOURITES, payload: photo });
  };

  return {
    ...state,
    openModal,
    closeModal,
    isFavourite,
    addToFavourites,
    removeFromFavourites,
    setPhotos, // Added setPhotos function
  };
}
