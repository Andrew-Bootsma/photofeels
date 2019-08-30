import React, { useReducer } from 'react';
import axios from 'axios';
import UnsplashContext from './unsplashContext';
import UnsplashReducer from './unsplashReducer';
import {
  SEARCH_IMAGES,
  SET_LOADING,
  CLEAR_IMAGES,
  GET_PHOTOGRAPHER,
  GET_PHOTOS
} from '../types';

const unsplashClientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

const UnsplashState = props => {
  const initialState = {
    images: [],
    photographer: {},
    photos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(UnsplashReducer, initialState);

  // Search Images
  const searchImages = async text => {
    setLoading();

    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: `${text}` },
      headers: {
        Authorization: `Client-ID ${unsplashClientId}`
      }
    });

    dispatch({
      type: SEARCH_IMAGES,
      payload: res.data.results
    });
  };

  // Get Photographer
  const getPhotographer = async username => {
    setLoading();

    const res = await axios.get(`https://api.unsplash.com/users/${username}`, {
      headers: {
        Authorization: `Client-ID ${unsplashClientId}`
      }
    });

    dispatch({
      type: GET_PHOTOGRAPHER,
      payload: res.data
    });
  };

  // Get Photos
  const getPhotographerPhotos = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.unsplash.com/users/${username}/photos?per_page=5`,
      {
        headers: {
          Authorization: `Client-ID ${unsplashClientId}`
        }
      }
    );

    dispatch({
      type: GET_PHOTOS,
      payload: res.data
    });
  };

  // Clear Images
  const clearImages = () => dispatch({ type: CLEAR_IMAGES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UnsplashContext.Provider
      value={{
        images: state.images,
        photographer: state.photographer,
        photos: state.photos,
        loading: state.loading,
        searchImages,
        clearImages,
        getPhotographer,
        getPhotographerPhotos
      }}
    >
      {props.children}
    </UnsplashContext.Provider>
  );
};

export default UnsplashState;
