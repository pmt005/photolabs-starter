import React from 'react';

import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {

  const { photos } = props.state;

  const mappedPhotos = () => {
    return photos.map((photo) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        state={props.state}
        updateFavPhotoIds={props.updateFavPhotoIds}
        openModalWindow={props.openModalWindow}
        closeModalWindow={props.closeModalWindow}
      />
    ));
  };

  return <ul className="photo-list">{mappedPhotos()}</ul>;
};

export default PhotoList;