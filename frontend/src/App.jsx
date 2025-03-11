import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "example user",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const App = () => (
  <div className="App">
    <PhotoListItem
      id={sampleDataForPhotoListItem.id}
      username={sampleDataForPhotoListItem.user.username}
      imageSource={sampleDataForPhotoListItem.urls.regular}
      profile={sampleDataForPhotoListItem.user.profile}
      location={`${sampleDataForPhotoListItem.location.city}, ${sampleDataForPhotoListItem.location.country}`}
    />
  </div>
);

export default App;
