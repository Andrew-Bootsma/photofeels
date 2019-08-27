import React from 'react';
import PropTypes from 'prop-types';

const ImageItem = ({ image: { urls, user } }) => {
  return (
    <div>
      <img src={urls.small} alt='' />
      <h3>{user.name}</h3>

      <div>
        <a href={user.links.html}>More</a>
      </div>
    </div>
  );
};

ImageItem.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageItem;
