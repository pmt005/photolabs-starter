import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        state={props.state}
        onLoadTopic={props.onLoadTopic}
        getPhotoByTopic={props.getPhotoByTopic}
      />
      <FavBadge
        isFavPhotoExist={props.state.likes.length ? true : false} />
    </div>
  );
};

export default TopNavigation;