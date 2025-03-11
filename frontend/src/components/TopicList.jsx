import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const topics = ["Nature", "Cities", "Animals", "Technology", "People"];

const TopicList = () => {
  return (
    <ul className="topic-list">
      {topics.map((topic, index) => (
        <TopicListItem key={index} topic={topic} />
      ))}
    </ul>
  );
};

export default TopicList;
