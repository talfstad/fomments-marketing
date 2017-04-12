import React, { Component, PropTypes } from 'react';

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
          <a className="dropdown-item" href="a#">My Account</a>
        </li>
        <li key="2">
          <a onClick={e => this.handleLogout(e)} className="dropdown-item" href="a#">Logout</a>
        </li>
      </div>
    );
  }
}

Logout.propTypes = {
  logUserOut: PropTypes.func,
};

export default Logout;
