import React from 'react';

const About = () => {
  return (
    <>
      <section id='about-sidebar-left'></section>
      <section className='about-container'>
        <p className='neu-card main-text'>
          <ul>
            <li>1) Select a Pose (Asana) from the list on left side</li>
            <li>2) Click 'Let's Begin' button below</li>
            <li>
              3) Adjust your position within 10 seconds. (The timer on right
              runs for 10 seconds)
            </li>
            <li>
              4) Keep your face towards the camera and the camera should have
              full view including legs
            </li>
            <li>
              5) Perform the selected pose for 10 seconds (The timer again runs
              for 10 seconds)
            </li>
            <li>6) The better you perform the pose, more the score you get</li>
          </ul>
        </p>
        <section className='button-section'>
          <button className='btn btn-1'>
            <h4> Hello </h4>
          </button>
        </section>
      </section>
      <section id='about-sidebar-right'></section>
    </>
  );
};

export default About;
