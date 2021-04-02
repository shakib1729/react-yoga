import React, { useState, useContext } from 'react';

export const AppContext = React.createContext();

const getStorageTheme = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const getStorageBestScores = () => {
  const bestScores = localStorage.getItem('bestScores');
  if (bestScores === null) return [0, 0, 0];
  return JSON.parse(bestScores);
};

export const AppProvider = ({ children }) => {
  const [poseNetModel, setPoseNetModel] = useState(null);
  const [model, setModel] = useState(null);
  const [timer, setTimer] = useState(10);
  const [currPose, setCurrPose] = useState(0);
  const [scores, setScores] = useState([0, 0, 0]);
  const [bestScores, setBestScores] = useState(getStorageBestScores());
  const [isDetecting, setIsDetecting] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());
  const poses = [
    {
      id: 0,
      name: 'Vrikshasana',
      common_name: 'Tree Pose',
      img: '/img/tree.png',
    },
    {
      id: 1,
      name: 'Utkatasana',
      common_name: 'Chair Pose',
      img: '/img/chair.png',
    },
    {
      id: 2,
      name: 'Utthita Tadasana',
      common_name: 'Star Pose',
      img: '/img/star.png',
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
        bestScores,
        setPoseNetModel,
        setModel,
        setTimer,
        setCurrPose,
        setScores,
        setIsDetecting,
        setTheme,
        setBestScores,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
