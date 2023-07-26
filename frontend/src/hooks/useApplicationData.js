import { useReducer } from "react";


const initialState = {
  modalVisible: [],
  likes: [],
  topic: [],
  photos: []
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_PHOTO_SELECTED':
    return {
      ...state,
      modalVisible: [...state.modalVisible, action.payload],
    };
  case 'UPDATE_FAV_PHOTO_IDS':
    if (!state.likes.includes(action.payload)) {
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    } else {
      return {
        ...state,
        likes: state.likes.filter(x => x !== action.payload),
      };
    }
  case 'LOAD_TOPIC':
    return {
      ...state,
      topic: [action.payload],
    };
  case 'CLOSE_PHOTO_DETAILS_MODAL':
    return {
      ...state,
      modalVisible: [],
    };
  case 'GET_PHOTO_BY_TOPICS':
    return {
      ...state,
      photos: [action.payload],
    };
  default:
    return state;
  }
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPhotoSelected = (photo) => {
    dispatch({ type: 'SET_PHOTO_SELECTED', payload: photo });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: 'UPDATE_FAV_PHOTO_IDS', payload: photoId });
  };

  const onLoadTopic = (topic) => {
    dispatch({ type: 'LOAD_TOPIC', payload: topic });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'CLOSE_PHOTO_DETAILS_MODAL' });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
}