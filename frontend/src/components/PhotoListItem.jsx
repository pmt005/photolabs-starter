
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoFavButton.scss';

const PhotoListItem = (props) => {

  return (
    <span className='photo-list__item'>
      <span onClick={()=>{
        props.updateFavPhotoIds(props.photo.id);
      }}>
        <PhotoFavButton
          key={`Photo ${props.photo.id}`}
          photo={props.photo}
          state={ props.state }
          updateFavPhotoIds={ props.updateFavPhotoIds }
          openModalWindow={ props.openModalWindow }
          closeModalWindow={ props.closeModalWindow }/>
      </span>
      <span>
        {/* open modal */}
        <img
          src={props.photo.urls.regular}
          alt={`Photo ${props.photo.id}`}
          className='photo-list__image'
          onClick={() => {
            props.openModalWindow(props.photo);
          }}/>
      </span>

      <div className='photo-list__user-details'>
        <span><img src={props.photo.user.profile} alt={`User ${props.photo.user.id}`} className='photo-list__user-profile' /></span>
        <span className='photo-list__user-info'>{props.photo.user.username}
          <div className='photo-list__user-location'>{props.photo.location.city} , {props.photo.location.country}</div>
        </span>
      </div>
    </span>

  );

};

PhotoListItem.defaultProps = {
  photo: {
    "id": "1",
    "location": {
      "city": "Montreal",
      "country": "Canada"
    },
    "urls": {
      "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
    },
    "user": {
      "id": "1",
      "username": "exampleuser",
      "name": "Joe Example",
      "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
    }
  }
};

export default PhotoListItem;