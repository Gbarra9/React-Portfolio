import React, { useState } from 'react';
import logo from '../logo.svg';
import FullMenu from './FullMenu';
import { NavLink, Link } from 'react-router-dom';

import '../styles/Navbar.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const menuState = click ? 'close' : '';
  return (
    <nav className='main-nav'>
      <Link to='/' className='logo-link'>
        <img src={logo} alt='Logo' className='nav-logo' />
      </Link>

      <div className={`menu-icon ${menuState}`} onClick={handleClick}>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
      {menuState && <FullMenu />}
      <ul className='navbar-ul'>
        <li className='navbar-li'>
          <NavLink
            to='/'
            exact={true}
            className='navbar-link-tag'
            activeClassName='active'
          >
            Home
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            to='/about'
            className='navbar-link-tag'
            activeClassName='active'
          >
            About
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            to='/work'
            className='navbar-link-tag'
            activeClassName='active'
          >
            Work
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            to='/contact'
            className='navbar-link-tag'
            activeClassName='active'
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
