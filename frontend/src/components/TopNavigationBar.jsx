import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";
import FavouriteContent from "./FavouriteContent";
import LightDarkButton from "./LightDarkButton"; // Import the LightDarkButton component

const TopNavigation = ({
  favouriteCount,
  favouritePhotos,
  photos,
  handleTopicClick,
  topics,
}) => {
  const displayAlert = favouriteCount > 0;
  const fill = "#C80000";

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <div className="top-nav-bar--topic-list">
        <TopicList handleTopicClick={handleTopicClick} topics={topics} />
      </div>
      <div className="sidebar">
        <FavouriteContent
          favouritePhotos={favouritePhotos}
          photos={photos}
          favouriteCount={favouriteCount}
        />
      </div>
      <div className="top-nav-bar--actions">
        <FavIcon fill={fill} displayAlert={displayAlert} />
        <LightDarkButton /> {/* Use the modular component */}
      </div>
    </div>
  );
};

export default TopNavigation;
