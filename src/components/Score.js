import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const Score = () => {
  const { scores } = useGlobalContext();
  return (
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
  );
};

export default Score;
