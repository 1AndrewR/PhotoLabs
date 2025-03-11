import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photoData = [
  {
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
      username: "exampleuser1",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 2,
    location: {
      city: "Vancouver",
      country: "Canada",
    },
    urls: {
      full: "/Image-2-Full.jpeg",
      regular: "/Image-2-Regular.jpeg",
    },
    user: {
      username: "exampleuser2",
      name: "Jane Example",
      profile: "/profile-2.jpg",
    },
  },
  {
    id: 3,
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: "/Image-3-Full.jpeg",
      regular: "/Image-3-Regular.jpeg",
    },
    user: {
      username: "exampleuser3",
      name: "Sam Example",
      profile: "/profile-3.jpg",
    },
  },
];

const App = () => (
  <div className="App">
    {photoData.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </div>
);

export default App;
