import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ logo }) => {
  return (
    <header className='header'>
      <h1>{logo}</h1>
    </header>
  );
};

Header.defaultProps = {
  logo: 'Photo Feels'
};

Header.propTypes = {
  logo: PropTypes.string.isRequired
};

export default Header;
