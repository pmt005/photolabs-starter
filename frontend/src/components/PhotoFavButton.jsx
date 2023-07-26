import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const {likes} = props.state;
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          key={`Photo ${props.photo.id}`}
          fill={!likes.includes(props.photo.id) ? "" : "#C80000"}
          onClick={()=>{
            props.updateToFavPhotoIds(props.photo.id);
          }}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;