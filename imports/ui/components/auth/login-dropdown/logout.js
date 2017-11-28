import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Logout extends Component {
  handleLogout(e) {
    e.preventDefault();
    const { logUserOut } = this.props;
    logUserOut();
  }

  render() {
    return (
      <div>
        <li key="1">
          <Link
            to="/account"
            className="dropdown-item"
            onClick={() => { this.props.closeDropdown(); }}
          >
              My Account
              <i className="pull-right fa fa-cog" />
          </Link>
        </li>
        <li role="separator" className="divider" />
        <li key="2">
          <a
            onClick={e => this.handleLogout(e)}
            className="dropdown-item"
            href="/logout"
          >
            Logout
            <i className="pull-right fa fa-sign-out" />
          </a>
        </li>
      </div>
    );
  }
}

Logout.defaultProps = {
  logUserOut: null,
  closeDropdown: null,
};

Logout.propTypes = {
  logUserOut: PropTypes.func,
  closeDropdown: PropTypes.func,
};

export default Logout;
