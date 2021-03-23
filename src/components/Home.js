import React from 'react';
import PoseList from './PoseList';
import SidebarRight from './SidebarRight';
import Main from './Main';

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
