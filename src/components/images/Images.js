import React, { useContext } from 'react';
import ImageItem from './ImageItem';
import Spinner from '../layout/Spinner';
import UnsplashContext from '../../context/unsplash/unsplashContext';

const Images = () => {
  const unsplashContext = useContext(UnsplashContext);

  const { loading, images } = unsplashContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {images.map(image => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>
    );
  }
};

export default Images;
