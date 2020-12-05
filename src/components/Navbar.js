import React, { useState } from "react";
// import React from 'react';
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Close, Menu } from "@material-ui/icons";

import "../styles/Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="main-nav">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="nav-logo" />
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        {click ? (
          <Menu className="click-icon" />
        ) : (
          <Close className="click-icon" />
        )}
      </div>
      <ul className={click ? "nav-menu" : "navmenu active"}>
        <li>
          <Link to="/" className="link-tag" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-tag" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/work" className="link-tag" onClick={closeMobileMenu}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link-tag" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
