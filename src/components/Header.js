import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <h1>ReactYoga</h1>
      <div class='link-wrapper'>
        <Link
          to={location.pathname == '/about' ? '/' : '/about'}
          className='link hover-2'
        >
          {location.pathname == '/about' ? 'Home' : 'About'}
        </Link>
        {/* <a class='link hover-2' href='#'>
          Link
        </a> */}
      </div>

      <DarkMode />
    </header>
  );
};

export default Header;
