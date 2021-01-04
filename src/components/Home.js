import React from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { Background } from './Background';
import SocialLinks from './SocialLinks';
import ReactGA from 'react-ga';

import '../styles/Home.scss';

export function Home() {
  const workClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked or pressed my work button',
      label: 'My work button on landing page that directs user to work page',
    });
  };
  return (
    <>
      <Navbar />
      <Background />
      <div className='home-container'>
        <div className='wrapper'>
          <div className='home-text'>
            <h1 className='name'>Gene Barra</h1>
            <h2 className='title'>Frontend Developer</h2>
          </div>
          <SocialLinks />
          <Link to='/work'>
            <button className={`button-link`} onClick={workClick}>
              My Work
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
