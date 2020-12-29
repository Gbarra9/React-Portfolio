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
            About
          </NavLink>
        </li>
        <li className={`fullscreen-nav-li ${theme}`}>
          <NavLink
            to='/contact'
            className={`fullscreen-navlink ${theme}`}
            activeClassName='active'
            onClick={handleClick}
          >
            Contact
          </NavLink>
        </li>
        <li className={`fullscreen-nav-li ${theme}`}>
          <NavLink
            to='/work'
            className={`fullscreen-navlink ${theme}`}
            activeClassName='active'
            onClick={handleClick}
          >
            Work
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FullMenu;
