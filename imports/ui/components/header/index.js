import React from 'react';

import LoginDropDown from '../auth/login-dropdown';

const Header = () =>
  <header id="global-nav">
    <div className="container-lg">
      <ul className="nav-root">
        <li className="nav-section logo">
          <a href="" className="root-link">
            <img
              className="fomments-logo"
              alt="fomments logo"
              src="/images/fomments-logo-white.svg"
            />
          </a>
          <div className="button-group product-info-list">
            <button
              type="button"
              className="header-list-button btn"
            >
              <span>Features</span>
            </button>
          </div>
        </li>
        <li className="nav-section signin">
          <LoginDropDown />
        </li>
      </ul>
    </div>
  </header>;

export default Header;
