import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const Timer = () => {
  const { timer } = useGlobalContext();
  return (
    <div id='sidebar-timer'>
      Timer
      <h1 className='circle'>{timer}</h1>
    </div>
  );
};

export default Timer;
