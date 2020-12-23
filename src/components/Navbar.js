import React, { useState } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
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
