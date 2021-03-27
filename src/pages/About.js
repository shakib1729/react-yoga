import React from 'react';

const About = () => {
  return (
    <>
      <section id='about-sidebar-left'></section>
      <section className='about-container'>
        <p className='neu-card main-text'>
          <ul>
            <li>React Yoga - Do Yoga poses better</li>
            <li>This web app is developed using ReactJS and TensorflowJS</li>
            <li>For more info, please visit the GitHub repository:</li>
            <li>
              <img
                src='/img/tfjs.png'
                className='logo-tfjs'
                alt='TensorFlowJS'
              />
              <img
                src='/img/reactjs.png'
                className='logo-reactjs'
                alt='ReactJS'
              />
            </li>
            <li>Find me on:</li>
            <l1>
              <img
                src='/img/github.png'
                className='logo-github'
                alt='TensorFlowJS'
              />
              <img
                src='/img/linkedin.png'
                className='logo-linkedin'
                alt='ReactJS'
              />
            </l1>
          </ul>
        </p>
      </section>
      <section id='about-sidebar-right'></section>
    </>
  );
};

export default About;
