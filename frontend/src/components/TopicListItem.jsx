import React from 'react';
import axios from 'axios';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { topic } = props.state;
  const clickHandler = (topic)=> {
    axios
      .get('http://localhost:8001/api/topics/photos/' + topic.id)
      .then((response) => {
        props.setPhotos(response.data);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  };

  return (
    <div className="topic-list__item">
      {topic.includes(props.thisTopic) &&
      <span className='hover'
        onClick={()=>clickHandler(props.thisTopic)}
        onMouseOver={() => props.onLoadTopic([],props.thisTopic)}
        onMouseOut={() => props.onLoadTopic([])} >
        {props.thisTopic.title}
      </span>}
      {!topic.includes(props.thisTopic) && <span onClick={()=>clickHandler(props.thisTopic)} onMouseOver={() => props.onLoadTopic([],props.thisTopic)} onMouseOut={() => props.onLoadTopic([])}>{props.thisTopic.title}</span>}
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

