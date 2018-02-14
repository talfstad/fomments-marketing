import React from 'react';

import { Link } from 'react-router-dom';

import LoginDropDown from '../auth/login-dropdown';

const Header = () => (
  <header id="global-nav">
    <div className="container-lg">
      <ul className="nav-root">
        <li className="nav-section logo">
          <Link
            to="/"
            className="root-link"
          >
            <object
              className="fomments-logo"
              data="/images/fomments-logo-white-1.svg"
              type="image/svg+xml"
            />
          </Link>
        </li>
        <li className="nav-section signin">
          <LoginDropDown />
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
