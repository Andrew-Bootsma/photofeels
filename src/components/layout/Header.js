import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import Search from '../images/Search';

const Header = () => {
  return (
    <header className='header'>
      {/* eslint-disable-next-line */}
      <img src={logo} alt='Photo Feels logo' className='logo' />

      <Search />
      <nav className='user-nav'>
        <div className='user-nav__link'>
          <Link to='/'>Home</Link>
        </div>
        <div className='user-nav__link'>
          <Link to='/about'>About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
