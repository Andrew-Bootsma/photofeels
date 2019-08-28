import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ logo }) => {
  return (
    <header className='header'>
      <h1>{logo}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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
