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
    <div className='toggle-container'>
      <span style={{ color: theme == 'dark-theme' ? 'grey' : 'yellow' }}>
        ☀︎
      </span>
      <div className='switch-checkbox'>
        <label className='switch'>
          <input
            type='checkbox'
            onChange={toggleTheme}
            checked={theme == 'dark-theme'}
          />
          <span className='slider round'> </span>
        </label>
      </div>
      <span style={{ color: theme == 'dark-theme' ? '#c96dfd' : 'grey' }}>
        ☽
      </span>
    </div>
    // <button className='btn' onClick={toggleTheme}>
    //   toggle
    // </button>
  );
};

export default DarkMode;
