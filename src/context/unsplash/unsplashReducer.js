import {
  SEARCH_IMAGES,
  SET_LOADING,
  CLEAR_IMAGES,
  GET_PHOTOGRAPHER,
  GET_PHOTOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_IMAGES:
      return {
        ...state,
        images: action.payload,
        loading: false
      };
    case GET_PHOTOGRAPHER:
      return {
        ...state,
        photographer: action.payload,
        loading: false
      };
    case CLEAR_IMAGES:
      return {
        ...state,
        images: [],
        loading: false
      };
    case GET_PHOTOS: {
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
