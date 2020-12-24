import React, { useState } from 'react';
import logo from '../logo.svg';
import { NavLink, Link } from 'react-router-dom';
// import { Close, Menu } from '@material-ui/icons';

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

      <ul>
        <li>
          <NavLink
            to='/'
            exact={true}
            className='link-tag'
            activeClassName='active'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='link-tag' activeClassName='active'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/work' className='link-tag' activeClassName='active'>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='link-tag' activeClassName='active'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };

// <ul>
// <li>
//   <Link to='/' className='link-tag'>
//     Home
//   </Link>
// </li>
// <li>
//   <Link to='/about' className='link-tag'>
//     About
//   </Link>
// </li>
// <li>
//   <Link to='/work' className='link-tag'>
//     Work
//   </Link>
// </li>
// <li>
//   <Link to='/contact' className='link-tag'>
//     Contact
//   </Link>
// </li>
// </ul>
