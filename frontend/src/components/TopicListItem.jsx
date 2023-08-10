import React from 'react';
import axios from 'axios';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { topics } = props.state;

  return (
    <div className="topic-list__item">
      {topics.includes(props.thisTopic) &&
        <span className='hover'
          onClick={() => props.getPhotoByTopic(props.thisTopic)}
          onMouseOver={() => props.onLoadTopic([], props.thisTopic)}
          onMouseOut={() => props.onLoadTopic([])} >
          {props.thisTopic.title}
        </span>}
      {!topics.includes(props.thisTopic) &&
        <span
          onClick={() => props.getPhotoByTopic(props.thisTopic)}
          onMouseOver={() => props.onLoadTopic([], props.thisTopic)} onMouseOut={() => props.onLoadTopic([])}>
          {props.thisTopic.title}
        </span>}
    </div>
  );
};

TopicListItem.defaultProps = {
  topic:
  {
    "id": "1",
    "slug": "topic-1",
    "title": "Nature"
  },
};

export default TopicListItem;