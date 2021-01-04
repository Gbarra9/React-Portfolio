import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/images/Oshino.Shinobu.full.1053592.jpg';

import '../styles/NoMatch.scss';

export const NoMatch = () => {
  return (
    <>
      <div className='error-background'></div>
      <div className='error-wrapper'>
        <div className='error-flex-item-1'>
          <h1 className='error-header'>404</h1>
        </div>
        <div className='error-flex-item-2'>
          <div className='error-image-container'>
            <img
              alt='bewildered person'
              className='error-image'
              src={ErrorImage}
            />
          </div>
          <div className='error-description-container'>
            <p className='error-text'>
              Hmmm, something isn't right. The page you are looking for cannot
              be found. Please press the button to return home.
            </p>
          </div>
          <Link to='/' className='error-home-link'>
            <button className='error-back-button'>Go Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};
