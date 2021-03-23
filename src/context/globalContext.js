import React, { useState, useContext } from 'react';

export const AppContext = React.createContext();

const getStorageTheme = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

export const AppProvider = ({ children }) => {
  const [poseNetModel, setPoseNetModel] = useState(null);
  const [model, setModel] = useState(null);
  const [timer, setTimer] = useState(10);
  const [currPose, setCurrPose] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [isDetecting, setIsDetecting] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());
  const poses = [
    {
      id: 0,
      name: 'Utkatasana',
      img: '/img/chair-pose.png',
    },
    {
      id: 1,
      name: 'Vrikshasana',
      img: '/img/tree-pose.png',
    },
  ];
  return (
    <AppContext.Provider
      value={{
        poseNetModel,
        model,
        timer,
        currPose,
        scores,
        isDetecting,
        poses,
        theme,
        setPoseNetModel,
        setModel,
        setTimer,
        setCurrPose,
        setScores,
        setIsDetecting,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
