import React, { useState, useContext } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [poseNetModel, setPoseNetModel] = useState(null);
  const [model, setModel] = useState(null);
  const [timer, setTimer] = useState(10);
  const [currPose, setCurrPose] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [isDetecting, setIsDetecting] = useState(false);

  return (
    <AppContext.Provider
      value={{
        poseNetModel,
        model,
        timer,
        currPose,
        scores,
        isDetecting,
        setPoseNetModel,
        setModel,
        setTimer,
        setCurrPose,
        setScores,
        setIsDetecting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
