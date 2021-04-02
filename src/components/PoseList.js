import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const PoseList = () => {
  const { poses, setCurrPose, currPose } = useGlobalContext();

  return (
    <section id='sidebar-left'>
      <ul>
        {poses.map((pose) => (
          <li key={pose.id} onClick={() => setCurrPose(pose.id)}>
            <img
              className={`poselist-img ${
                currPose == pose.id ? 'pose-selected' : ''
              }`}
              src={pose.img}
              alt={pose.common_name}
            />
            <h4 className='poselist-name'>{pose.common_name}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PoseList;
