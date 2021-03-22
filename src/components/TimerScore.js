import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const TimerScore = () => {
  const { timer, scores, poses, currPose } = useGlobalContext();

  return (
    <section id='sidebar-right'>
      <div id='sidebar-timer'>Timer: {timer}</div>
      <div id='sidebar-score'>
        Score:{' '}
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Pose {idx}: {score}
            </li>
          );
        })}
      </div>
      <div id='sidebar-poseimg'>
        <h3>{poses[currPose].name}</h3>
        <img
          className='big-pose-img'
          src={poses[currPose].img}
          alt={poses[currPose].name}
        />
      </div>
    </section>
  );
};

export default TimerScore;
