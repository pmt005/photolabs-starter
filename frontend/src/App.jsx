import React, {useState, useEffect} from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import axios from 'axios';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onLoadTopic,
    onClosePhotoDetailsModal
  } = useApplicationData();

  const { modalVisible} = state;

  // retrieve photos data
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8001/api/photos')
      .then((response)=>{
        setPhotos(response.data);
      })
      .catch(error=>{
        console.error("Error fetching data",error);
      });
  },[]);

  // retrieve topics data
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8001/api/topics')
      .then((response)=>{
        setTopics(response.data);
      })
      .catch(error=>{
        console.error("Error fetching data",error);
      });
  },[]);

  return (
    <div className={modalVisible.length ? 'App dark' : 'App'} >
      <PhotoDetailsModal
        state={ state }
        openModalWindow={ setPhotoSelected }
        closeModalWindow={ onClosePhotoDetailsModal }
        updateToFavPhotoIds={ updateToFavPhotoIds }
        photos={ photos }
        setPhotos={ setPhotos }/>

      <HomeRoute
        state = { state }
        onLoadTopic={ onLoadTopic }
        openModalWindow={ setPhotoSelected }
        closeModalWindow={ onClosePhotoDetailsModal }
        updateToFavPhotoIds={ updateToFavPhotoIds }
        photos={ photos }
        setPhotos={ setPhotos }
        topics={ topics }/>
    </div>
  );
};
export default App;
