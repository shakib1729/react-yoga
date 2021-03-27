import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const Score = () => {
  const { scores, poses } = useGlobalContext();
  return (
    <div id='sidebar-score'>
      Scores{' '}
      {scores.map((score, idx) => {
        return (
          <li key={idx}>
            {poses[idx].name}: {score} &nbsp; (Best: {score})
          </li>
        );
      })}
    </div>
  );
};

export default Score;
