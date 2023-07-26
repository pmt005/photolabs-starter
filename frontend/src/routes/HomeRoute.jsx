import React from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        state = { props.state }
        onLoadTopic={props.onLoadTopic}
        getPhotoByTopic={props.getPhotoByTopic}
      />

      <PhotoList
        state={ props.state }
        updateFavPhotoIds={ props.updateFavPhotoIds }
        openModalWindow={ props.openModalWindow }
        closeModalWindow={ props.closeModalWindow }
      />
    </div>
  );

};

export default HomeRoute;