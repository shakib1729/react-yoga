import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const PoseImage = () => {
  const { poses, currPose } = useGlobalContext();

  return (
    <div id='sidebar-poseimg'>
      <h3>
        {currPose}: {poses[currPose].name}
      </h3>
      <img
        className='big-pose-img'
        src={poses[currPose].img}
        alt={poses[currPose].name}
      />
    </div>
  );
};

export default PoseImage;
