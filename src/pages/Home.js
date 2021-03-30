import React from 'react';
import PoseList from '../components/PoseList';
import SidebarRight from '../components/SidebarRight';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <PoseList />
      <Main />
      <SidebarRight />
    </>
  );
};

export default Home;
