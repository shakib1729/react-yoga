import React from 'react';
import Timer from './Timer';
import Score from './Score';
import PoseImage from './PoseImage';

const SidebarRight = () => {
  return (
    <section id='sidebar-right'>
      <Timer />
      <Score />
      <PoseImage />
    </section>
  );
};

export default SidebarRight;
