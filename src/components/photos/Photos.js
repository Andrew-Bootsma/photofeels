import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';

const Photos = ({ photos }) => {
  return photos.map(photo => <PhotoItem photo={photo} key={photo.id} />);
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
