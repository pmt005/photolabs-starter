// Importing necessary dependencies
import { useReducer, useEffect } from "react";
import reducer from '../reducer/reducer';
import axios from 'axios';

// Initial state for the application
const initialState = {
  modalVisible: [],
  likes: [],
  topics: [],
  photos: []
};

// Custom hook for managing application data and state
export default function useApplicationData() {
  // Initializing state and dispatch using the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to set the selected photo in the modal
  const setPhotoSelected = (photo) => {
    dispatch({ type: 'SET_PHOTO_SELECTED', payload: photo });
  };

  // Function to update favorite photo IDs
  const updateFavPhotoIds = (photoId) => {
    dispatch({ type: 'UPDATE_FAV_PHOTO_IDS', payload: photoId });
  };

  // Function to load a specific topic
  const onLoadTopic = (topic) => {
    dispatch({ type: 'LOAD_TOPIC', payload: topic });
  };

  // Function to close the photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'CLOSE_PHOTO_DETAILS_MODAL' });
  };

  // Effect to retrieve photos and topics on component mount
  useEffect(() => {
    const topicsURL = '/api/topics';
    const photosURL = '/api/photos';
    const topicsPromise = axios.get(topicsURL);
    const photosPromise = axios.get(photosURL);

    Promise.all([topicsPromise, photosPromise])
      .then((response) => {
        dispatch({ type: 'LOAD_PAGE', payload: response });
      })
      .catch((error) => {
        console.error('Error fetching photos', error);
      });
  }, []);

  // Function to get photos based on a specific topic
  const getPhotoByTopic = (topic) => {
    axios
      .get('/api/topics/photos/' + topic.id)
      .then((response) => {
        dispatch({ type: 'GET_PHOTO_BY_TOPICS', payload: response.data });
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  };

  // Returning the state and functions as an object
  return {
    state,
    updateFavPhotoIds,
    setPhotoSelected,
    onLoadTopic,
    onClosePhotoDetailsModal,
    getPhotoByTopic,
  };
}
