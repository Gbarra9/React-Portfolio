import React from 'react';
import { Background } from './Background';

export function Home() {
  return (
    <div className='home-container'>
      <div className='wrapper'>
        <Background backgroundSize='cover' />
        <div className='home-text'>
          <h1 className='home'>Home</h1>
          <h1 className='name'>Gene Barra</h1>
          <h2 className='title'>Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
}
