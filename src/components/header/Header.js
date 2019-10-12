import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <nav className='navbar'>
        <span className='navbar-toggle' id='js-navbar-toggle'>
          <i className='fas fa-bars'></i>
        </span>
        <a href='#' className='logo'>
          Daisushii
        </a>
        <ul className='main-nav' id='js-menu'>
          <li>
            <a href='#' className='nav-links'>
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
