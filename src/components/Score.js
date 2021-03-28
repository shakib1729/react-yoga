import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const Score = () => {
  const { scores, bestScores, poses, isDetecting } = useGlobalContext();
  return (
    <div id='sidebar-score'>
      Scores{' '}
      {scores.map((score, idx) => {
        return (
          <li key={idx}>
            {poses[idx].name}: {isDetecting ? score : 0} &nbsp; (Best:{' '}
            {bestScores[idx]})
          </li>
        );
      })}
    </div>
  );
};

export default Score;
