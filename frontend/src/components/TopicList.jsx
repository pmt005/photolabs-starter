import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const mappedTopics = () => {
    return props.topics.map((topic) => {
      return <TopicListItem
        key={topic.id}
        thisTopic={topic}
        state={props.state}
        onLoadTopic={props.onLoadTopic}
        setPhotos={ props.setPhotos }/>;
    });
  };

  return <div className="top-nav-bar__topic-list">{mappedTopics()}</div>;
};

export default TopicList;