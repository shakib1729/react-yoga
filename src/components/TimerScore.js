import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const TimerScore = () => {
  const { timer } = useGlobalContext();

  return (
    <section id='sidebar-right'>
      <div id='sidebar-timer'>Timer: {timer}</div>
      <div id='sidebar-score'>Score</div>
      <div id='sidebar-poseimg'>Pose Img</div>
    </section>
  );
};

export default TimerScore;
