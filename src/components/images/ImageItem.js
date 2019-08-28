import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageItem = ({ image: { urls, user } }) => {
  return (
    <div>
      <img src={urls.small} alt='' />
      <h3>{user.name}</h3>

      <div>
        <Link to={`/user/${user.username}`}>More</Link>
      </div>
    </div>
  );
};

ImageItem.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageItem;
