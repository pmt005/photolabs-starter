import React from 'react';

import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';

export const PhotoDetailsModal = (props) => {
  const modalVisible = props.state.modalVisible[0];

  const mappedSimilarPhotos = () => {
    return (
      modalVisible && Object.values(modalVisible.similar_photos).map((photo) => (
        <span key={`SimilarPhoto ${photo.id}`} className='photo-list__item'>
          <span
            onClick={()=>{
              props.updateFavPhotoIds(photo.id);
            }}>
            <PhotoFavButton
              key={`Photo ${photo.id}`}
              photo={ photo }
              state = {props.state}
              updateFavPhotoIds={ props.updateFavPhotoIds }
              openModalWindow={ props.openModalWindow }
              closeModalWindow={ props.closeModalWindow }/>
            {/* open modal */}
            <img
              src={ photo.urls.regular }
              alt={`Photo ${ photo.id }`}
              className='photo-list__image'
            />
          </span>
          <div className='photo-list__user-details'>
            <span><img src={modalVisible.user.profile} alt={`User ${modalVisible.user.id}`} className='photo-list__user-profile' /></span>
            <span className='photo-list__user-info'>{modalVisible.user.username}
              <div className='photo-list__user-location'>{modalVisible.location.city} , {modalVisible.location.country}</div>
            </span>
          </div>
        </span>
      ))
    );
  };

  return (
    <div className={modalVisible ? 'photo-details-modal visible' : 'photo-details-modal hidden'}>
      <span className='photo-details-modal__top-bar'>
        <button className='photo-details-modal--close-button'
          onClick={() => {
            props.closeModalWindow();
          }}>
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_428_287)">
              <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_428_287">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </span>
      {
        modalVisible &&
      <span className='photo-details-modal__image span'>
        <span
          className='photo-details-modal__fav'
          onClick={()=>{
            props.updateFavPhotoIds(modalVisible.id);
          }}>
          <PhotoFavButton
            key={`Photo ${modalVisible.id}`}
            photo={modalVisible}
            state={ props.state }
            updateFavPhotoIds={ props.updateFavPhotoIds }
            openModalWindow={ props.openModalWindow }
            closeModalWindow={ props.closeModalWindow }/>

          {modalVisible && <img
            src={modalVisible.urls.regular}
            alt={`Photo ${modalVisible.id}`}
            className='photo-details-modal__image'
          />}
        </span>
        <span className='photo-details-modal__photographer-details'>
          <span><img src={modalVisible.user.profile} alt={`User ${modalVisible.user.id}`} className='photo-list__user-profile' /></span>
          <span className='photo-list__user-info'>{modalVisible.user.username}
            <div className='photo-list__user-location'>{modalVisible.location.city} , {modalVisible.location.country}</div>
          </span>
        </span>
      </span>
      }

      <span className='photo-details-modal__header'>
        Similar Photos
      </span>
      <span className='photo-details-modal__images'>
        {mappedSimilarPhotos()}
      </span>
    </div>
  );
};
export default PhotoDetailsModal;