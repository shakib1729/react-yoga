import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/globalContext';

const DarkMode = () => {
  const { theme, setTheme } = useGlobalContext();

  const toggleTheme = () => {
    if (theme === 'light-theme') setTheme('dark-theme');
    else setTheme('light-theme');
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button className='btn' onClick={toggleTheme}>
      toggle
    </button>
  );
};

export default DarkMode;
