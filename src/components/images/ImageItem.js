import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageItem = ({ image: { urls, user } }) => {
  return (
    <div className='image-item'>
      <img className='image-item__image' src={urls.small} alt='' />
      <p className='image-item__photographer'>
        Photographer:{' '}
        <Link className='btn-inline' to={`/user/${user.username}`}>
          {user.name}
          <span>&rarr;</span>
        </Link>
      </p>
    </div>
  );
};

ImageItem.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageItem;
