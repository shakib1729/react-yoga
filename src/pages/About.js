import React from 'react';

const About = () => {
  return (
    <>
      <section id='about-sidebar-left'></section>
      <section className='about-container'>
        <p className='neu-card about-text'>
          <ul>
            <li>React Yoga - Do Yoga poses better</li>
            <li>This web app is developed using ReactJS and TensorflowJS</li>
            <li>
              For more info, please visit the &nbsp;
              <a
                href='https://github.com/shakib1729/react-yoga'
                target='_blank'
                rel='noreferrer'
              >
                GitHub repository
              </a>
            </li>
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
            {/* <li></li> */}
            <l1>
              Find me on: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href='https://github.com/shakib1729'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/img/github.png'
                  className='logo-github'
                  alt='TensorFlowJS'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/shakib-1729'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/img/linkedin.png'
                  className='logo-linkedin'
                  alt='ReactJS'
                />
              </a>
            </l1>
          </ul>
        </p>
      </section>
      <section id='about-sidebar-right'></section>
    </>
  );
};

export default About;
