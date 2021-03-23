import React from 'react';
import DarkMode from './DarkMode';
const Header = () => {
  return (
    <header>
      <h1>ReactYoga</h1>
      <a href='#!' style={{ background: '#fff' }}>
        About
      </a>
      <DarkMode />
    </header>
  );
};

export default Header;
