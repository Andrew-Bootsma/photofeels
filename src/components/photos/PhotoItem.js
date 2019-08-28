import React from 'react';
import PropTypes from 'prop-types';

const PhotoItem = ({ photo }) => {
  return (
    <div>
      <h3>
        <img src={photo.urls.small} alt='' />
      </h3>
    </div>
  );
};

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoItem;
