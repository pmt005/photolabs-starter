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
        topics={props.topics}
        setPhotos={ props.setPhotos }
      />

      <PhotoList
        state={ props.state }
        updateToFavPhotoIds={ props.updateToFavPhotoIds }
        openModalWindow={ props.openModalWindow }
        closeModalWindow={ props.closeModalWindow }
        photos={props.photos}
        setPhotos={ props.setPhotos }
      />
    </div>
  );

};

export default HomeRoute;