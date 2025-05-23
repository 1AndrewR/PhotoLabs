import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, label, link, handleTopicClick } = props;

  const handleTopClick = (event) => {
    event.preventDefault();
    console.log(`Topic clicked with ID: ${id}`);
    handleTopicClick(id);
  };

  return (
    <div className="topic-list--item">
      <a key={id} id={id} label={label} href={link} onClick={handleTopClick}>
        <span>{label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
