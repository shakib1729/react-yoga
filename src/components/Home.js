import React from 'react';
import PoseList from './PoseList';
import TimerScore from './TimerScore';
import Main from './Main';

const Home = () => {
  return (
    <main id='home'>
      <PoseList />
      <Main />
      <TimerScore />
    </main>
  );
};

export default Home;
