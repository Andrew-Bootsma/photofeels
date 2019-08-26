import React from 'react';
import PropTypes from 'prop-types';

const ImageItem = ({ image: { profile_image, name, links } }) => {
  return (
    <div>
      <img src={profile_image.small} alt='' />
      <h3>{name}</h3>

      <div>
        <a href={links.html}>More</a>
      </div>
    </div>
  );
};

ImageItem.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageItem;
