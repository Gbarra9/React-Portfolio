import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContextProvider';

import '../styles/FullMenu.scss';

const FullMenu = ({ handleClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`fullscreen-menu ${theme}`}>
      <ul className='fullscreen-nav-ul'>
        <li className={`fullscreen-nav-li ${theme}`}>
          <NavLink
            to='/'
            className={`fullscreen-navlink ${theme}`}
            activeClassName='active'
            exact={true}
            onClick={handleClick}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='home'
              className='home-icon'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
            >
              <path
                fill='currentColor'
                d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'
              ></path>
            </svg>
            Home
          </NavLink>
        </li>
        <li className={`fullscreen-nav-li ${theme}`}>
          <NavLink
            to='/about'
            className={`fullscreen-navlink ${theme}`}
            activeClassName='active'
            onClick={handleClick}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='user-circle'
              className='user-icon'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 496 512'
            >
              <path
                fill='currentColor'
                d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z'
              ></path>
            </svg>
            About
          </NavLink>
        </li>
        <li className={`fullscreen-nav-li ${theme}`}>
          <NavLink
            to='/work'
            className={`fullscreen-navlink ${theme}`}
            activeClassName='active'
            onClick={handleClick}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='code'
              className='code-icon'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
            >
              <path
                fill='currentColor'
                d='M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z'
              ></path>
            </svg>
            Work
          </NavLink>
        </li>
        <li className={`fullscreen-nav-li ${theme}`}>
          <NavLink
            to='/contact'
            className={`fullscreen-navlink ${theme}`}
            activeClassName='active'
            onClick={handleClick}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='envelope'
              className='envelope-icon'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
              ></path>
            </svg>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FullMenu;
