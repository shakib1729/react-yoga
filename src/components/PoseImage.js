import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const PoseImage = () => {
  const { poses, currPose } = useGlobalContext();

  return (
    <div id='sidebar-poseimg'>
      <h3>{poses[currPose].common_name}</h3>
      <h4>
        <i> {poses[currPose].name}</i>
      </h4>
      <img
        className='big-pose-img'
        src={poses[currPose].img}
        alt={poses[currPose].common_name}
      />
    </div>
  );
};

export default PoseImage;
