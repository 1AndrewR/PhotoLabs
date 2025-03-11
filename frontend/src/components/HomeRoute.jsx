import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <main className="home-route__photos">
        <PhotoList />
      </main>
    </div>
  );
};

export default HomeRoute;
