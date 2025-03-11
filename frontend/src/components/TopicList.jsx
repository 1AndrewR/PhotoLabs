import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics }) => (
  <ul className="topic-list">
    {topics.map((topic, index) => (
      <TopicListItem key={index} topic={topic} />
    ))}
  </ul>
);

export default TopicList;
