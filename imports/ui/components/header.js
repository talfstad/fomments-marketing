import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/user/login';

class Header extends Component {
  handleLogout(e) {
    e.preventDefault();
    const { logUserOut } = this.props;
    logUserOut();
  }

  buildLoginDropdown() {
    const { user } = this.props;

    const buildSignedInDropdownMenu = () => {
      return [
        <li key="1">
          <a className="dropdown-item" href="a#">My Account</a>
        </li>,
        <li key="2">
          <a onClick={e => this.handleLogout(e)} className="dropdown-item" href="a#">Logout</a>
        </li>,
      ];
    };

    const buildSignedOutDropdownMenu = () => {
      return (
        <li>
          <a onClick={e => this.handleLogout(e)} className="dropdown-item" href="a#">Login form here</a>
        </li>
      );
    };

    return (
      <div className="button-group">
        <button
          type="button"
          className="login-button btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="gold-member fa fa-trophy" /> {user._id ? user.emails[0].address : 'Sign in'} <span className="caret" />
        </button>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          {user._id ? buildSignedInDropdownMenu() : buildSignedOutDropdownMenu()}
        </ul>
      </div>
    );
  }

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
              {this.buildLoginDropdown()}
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({}),
  logUserOut: PropTypes.func,
};

const actions = {
  logUserOut: loginActions.logUserOut,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(Header);
