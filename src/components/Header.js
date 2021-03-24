import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <h1>ReactYoga</h1>
      <Link to={location.pathname == '/about' ? '/' : '/about'}>
        {location.pathname == '/about' ? 'Home' : 'About'}
      </Link>
      <DarkMode />
    </header>
  );
};

export default Header;
