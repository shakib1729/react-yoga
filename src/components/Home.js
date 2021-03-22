import React from 'react';
import PoseList from './PoseList';
import TimerScore from './TimerScore';
import Main from './Main';

const Home = () => {
  return (
    <>
      <PoseList />
      <Main />
      <TimerScore />
    </>
  );
};

export default Home;
