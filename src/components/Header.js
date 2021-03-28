import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className='heading-left-1'></div>
      <div className='heading-left-2'></div>
      <span className='heading'>React Yoga</span>
      <div className='link-wrapper'>
        <Link
          to={location.pathname == '/about' ? '/' : '/about'}
          className='link hover-2'
        >
          {location.pathname == '/about' ? 'Home' : 'About'}
        </Link>
      </div>

      <DarkMode />
    </header>
  );
};

export default Header;
