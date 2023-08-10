import React from 'react';

// Importing necessary components and styles
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // Destructuring props for easier use
  const {
    state,
    onLoadTopic,
    getPhotoByTopic,
    updateFavPhotoIds,
    openModalWindow,
    closeModalWindow
  } = props;

  return (
    // Wrapping components within a parent div with a class name
    <div className="home-route">
      {/* Rendering the TopNavigation component */}
      <TopNavigation
        state={state}
        onLoadTopic={onLoadTopic}
        getPhotoByTopic={getPhotoByTopic}
      />

      {/* Rendering the PhotoList component */}
      <PhotoList
        state={state}
        updateFavPhotoIds={updateFavPhotoIds}
        openModalWindow={openModalWindow}
        closeModalWindow={closeModalWindow}
      />
    </div>
  );
};

// Exporting the HomeRoute component as the default export of the module
export default HomeRoute;
