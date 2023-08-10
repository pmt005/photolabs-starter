import React, { useState, useEffect } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import axios from 'axios';
import './App.scss';

const App = () => {
  // Destructuring values from the custom hook useApplicationData
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
    // Conditionally applying 'dark' class to the App div based on modal visibility
    <div className={modalVisible.length ? 'App dark' : 'App'}>
      {/* Rendering PhotoDetailsModal component */}
      <PhotoDetailsModal
        state={state}
        openModalWindow={setPhotoSelected}
        closeModalWindow={onClosePhotoDetailsModal}
        updateFavPhotoIds={updateFavPhotoIds}
      />

      {/* Rendering HomeRoute component */}
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

// Exporting the App component as the default export
export default App;

