
// Reducer function for managing the application state
export default function reducer(state, action) {
  switch (action.type) {
    // Case for setting a selected photo in the modal
    case 'SET_PHOTO_SELECTED':
      return {
        ...state,
        modalVisible: [...state.modalVisible, action.payload],
      };

    // Case for updating favorite photo IDs
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

    // Case for loading a specific topic
    case 'LOAD_TOPIC':
      return {
        ...state,
        topic: [action.payload],
      };

    // Case for closing the photo details modal
    case 'CLOSE_PHOTO_DETAILS_MODAL':
      return {
        ...state,
        modalVisible: [],
      };

    // Case for updating photos based on a specific topic
    case 'GET_PHOTO_BY_TOPICS':
      return {
        ...state,
        photos: action.payload,
      };

    // Case for loading a page with topics and photos
    case 'LOAD_PAGE':
      return {
        ...state,
        topics: action.payload[0].data,
        photos: action.payload[1].data,
      };

    // Default case returns the current state for unknown actions
    default:
      return state;
  }
};
