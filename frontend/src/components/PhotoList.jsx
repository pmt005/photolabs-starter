import React from 'react';

import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const mappedPhotos = () => {
    return props.photos.map((photo) => (
      <PhotoListItem
        key={ photo.id }
        photo={ photo }
        state={ props.state }
        updateToFavPhotoIds={ props.updateToFavPhotoIds }
        openModalWindow={ props.openModalWindow }
        closeModalWindow={ props.closeModalWindow }
        photos={ props.photos }/>
    ));
  };


  return <ul className="photo-list">{mappedPhotos()}</ul>;
};

export default PhotoList;