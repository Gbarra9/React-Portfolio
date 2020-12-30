import React, { useContext, useState } from 'react';
import logo from '../logo.svg';
import FullMenu from './FullMenu';
import { NavLink, Link } from 'react-router-dom';

import '../styles/Navbar.scss';
import ThemeToggleButton from './ThemeToggleButton';
import { ThemeContext } from '../contexts/ThemeContextProvider';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const menuState = click ? 'close' : '';
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`main-nav ${theme}`}>
      <Link to='/' className='logo-link'>
        <img src={logo} alt='Logo' className='nav-logo' />
      </Link>
      <ul className='nav-mobile-ul-container'>
        <li className='nav-mobile-li-container mobile-toggle-icon'>
          <ThemeToggleButton />
        </li>
        <li className='nav-mobile-li-container'>
          <div className={`menu-icon ${menuState}`} onClick={handleClick}>
            <div className={`menu-line ${theme}`}></div>
            <div className={`menu-line ${theme}`}></div>
            <div className={`menu-line ${theme}`}></div>
          </div>
        </li>
      </ul>

      {menuState && <FullMenu handleClick={handleClick} />}
      <ul className='navbar-ul'>
        <li className='navbar-li'>
          <NavLink
            to='/'
            exact={true}
            className={`navbar-link-tag ${theme}`}
            activeClassName={`active ${theme}`}
          >
            Home
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            to='/about'
            className={`navbar-link-tag ${theme}`}
            activeClassName={`active ${theme}`}
          >
            About
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            to='/work'
            className={`navbar-link-tag ${theme}`}
            activeClassName={`active ${theme}`}
          >
            Work
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            to='/contact'
            className={`navbar-link-tag ${theme}`}
            activeClassName={`active ${theme}`}
          >
            Contact
          </NavLink>
        </li>
        <li className='navbar-li-toggle'>
          <ThemeToggleButton />
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
