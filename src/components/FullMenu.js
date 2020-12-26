import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/FullMenu.scss';

const FullMenu = () => {
  return (
    <div className='fullscreen-menu'>
      <ul className='fullscreen-nav-ul'>
        <li className='fullscreen-nav-li'>
          <NavLink
            to='/'
            className='fullscreen-navlink'
            activeClassName='active'
            exact={true}
          >
            Home
          </NavLink>
        </li>
        <li className='fullscreen-nav-li'>
          <NavLink
            to='/about'
            className='fullscreen-navlink'
            activeClassName='active'
          >
            About
          </NavLink>
        </li>
        <li className='fullscreen-nav-li'>
          <NavLink
            to='/contact'
            className='fullscreen-navlink '
            activeClassName='active'
          >
            Contact
          </NavLink>
        </li>
        <li className='fullscreen-nav-li'>
          <NavLink
            to='/work'
            className='fullscreen-navlink'
            activeClassName='active'
          >
            Work
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FullMenu;
