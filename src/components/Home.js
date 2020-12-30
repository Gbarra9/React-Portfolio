import React from 'react';
import { Link } from 'react-router-dom';
import { Background } from './Background';
import SocialLinks from './SocialLinks';

import '../styles/Home.scss';

export function Home() {
  return (
    <>
      <Background />
      <div className='home-container'>
        <div className='wrapper'>
          <div className='home-text'>
            <h1 className='name'>Gene Barra</h1>
            <h2 className='title'>Frontend Developer</h2>
          </div>
          <SocialLinks />
          <Link to='/work'>
            <button className={`button-link`}>My Work</button>
          </Link>
        </div>
      </div>
    </>
  );
}
