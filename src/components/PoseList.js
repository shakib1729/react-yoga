import React from 'react';
import { useGlobalContext } from '../context/globalContext';

const PoseList = () => {
  const { poses, setCurrPose, currPose } = useGlobalContext();

  return (
    <section id='sidebar-left'>
      <ul>
        {poses.map((pose) => (
          <li key={pose.id} onClick={() => setCurrPose(pose.id)}>
            <img className='poselist-img' src={pose.img} alt={pose.name} />
            <h4 className='poselist-name'>{pose.name}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PoseList;
