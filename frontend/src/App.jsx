import React, { useState, useEffect } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import axios from 'axios';
import './App.scss';

const App = () => {
  const {
    state,
    updateFavPhotoIds: updateFavPhotoIds,
    setPhotoSelected,
    onLoadTopic,
    onClosePhotoDetailsModal,
    getPhotoByTopic
  } = useApplicationData();

  const { modalVisible } = state;

  return (
    <div className={modalVisible.length ? 'App dark' : 'App'} >
      <PhotoDetailsModal
        state={state}
        openModalWindow={setPhotoSelected}
        closeModalWindow={onClosePhotoDetailsModal}
        updateFavPhotoIds={updateFavPhotoIds}
      />

      <HomeRoute
        state={state}
        onLoadTopic={onLoadTopic}
        openModalWindow={setPhotoSelected}
        closeModalWindow={onClosePhotoDetailsModal}
        updateFavPhotoIds={updateFavPhotoIds}
        getPhotoByTopic={getPhotoByTopic}
      />
    </div>
  );
};
export default App;