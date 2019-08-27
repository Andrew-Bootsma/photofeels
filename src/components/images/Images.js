import React from 'react';
import ImageItem from './ImageItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Images = ({ images, loading }) => {
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

Images.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Images;
