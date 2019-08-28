import React from 'react';
import PropTypes from 'prop-types';

const PhotoItem = ({ photo }) => {
  return (
    <div className='image-item'>
      <img className='image-item__image' src={photo.urls.small} alt='' />
    </div>
  );
};

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoItem;
