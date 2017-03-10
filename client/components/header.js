import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {
  render() {
    return (
      <header id="global-nav">
        <div className="container-lg">
          <ul className="nav-root">
            <li className="nav-section logo">
              <a href="" className="root-link">
                <h1>
                  <svg
                    width="120"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 195.6 51.98"
                  >
                    <defs>
                      <style>
                        {'.cls-1{font-size:48px;fill:#e1e4ea;font-family:Klavika-Bold, Klavika;font-weight:700;letter-spacing:-0.04em;}.cls-2{letter-spacing:-0.04em;}'}
                      </style>
                    </defs>
                    <title>Asset 2</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <text className="cls-1" transform="translate(0 39.98)">
                          f
                          <tspan className="cls-2" x="15.55" y="0">
                            omments
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </h1>
              </a>
            </li>
            <li className="nav-section signin">
              <Accounts />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
