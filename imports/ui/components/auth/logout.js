import React, { Component, PropTypes } from 'react';
import AccountModal from './account-modal';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccountModal: false,
    };
  }

  setShowAccountModal(show) {
    this.setState({ showAccountModal: show });
  }

  handleShowAccountModal(e) {
    if (e) e.preventDefault();
    const { closeDropdown } = this.props;
    closeDropdown();
    this.setShowAccountModal(true);
  }

  handleLogout(e) {
    e.preventDefault();
    const { logUserOut } = this.props;
    logUserOut();
  }

  render() {
    return (
      <div>
        <li key="1">
          <a
            href="#f"
            className="dropdown-item"
            onClick={e => this.handleShowAccountModal(e)}
          >
              My Account
              <i className="pull-right fa fa-cog" />
          </a>
        </li>
        <li role="separator" className="divider" />
        <li key="2">
          <a
            onClick={e => this.handleLogout(e)}
            className="dropdown-item" href="/account"
          >
            Logout
            <i className="pull-right fa fa-sign-out" />
          </a>
        </li>
        {this.state.showAccountModal ?
          <AccountModal
            setShowAccountModal={show => this.setShowAccountModal(show)}
          />
        :
          <noscript />}
      </div>
    );
  }
}

Logout.propTypes = {
  closeDropdown: PropTypes.func,
  logUserOut: PropTypes.func,
};

export default Logout;
