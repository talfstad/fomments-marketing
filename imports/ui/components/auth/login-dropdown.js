import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Login from './login';
import Logout from './logout';
import CreateAccount from './create-account';
import * as loginActions from '../../../actions/user/login';

class LoginDropDown extends Component {
  componentDidMount() {
    // Intent: Close dropdown only when click out of dropdown.
    // Use this.closeable to keep internal state
    $(this.dropdownContainer).on('shown.bs.dropdown', () => {
      this.closeable = true;
      $(this.emailInput).focus();
    });

    $(this.dropdownContainer).on('click', () => {
      this.closeable = false;
    });

    $(this.dropdownContainer).on('hide.bs.dropdown', () => {
      // Intent: reset login form on close if showing create account
      if (this.closeable) this.showCreateAccount(false);

      setTimeout(() => {
        this.closeable = !this.closeable;
      });

      return this.closeable;
    });
  }

  componentDidUpdate() {
    const { user } = this.props;
    const { login = {} } = user;
    const { errors = [] } = login;
    if (errors.length) {
      $(this.dropdownContainer).addClass('open');
    }
  }

  closeDropdown() {
    $(this.dropdownContainer).removeClass('open');
  }

  showCreateAccount(show) {
    const {
      showCreateAccount,
    } = this.props;
    showCreateAccount(show);
  }

  buildLoginForm() {
    const {
      user = {},
      logUserIn,
      createAccount,
    } = this.props;
    const { login = {} } = user;
    const { isShowingCreateAccount = false } = login;
    return (
      isShowingCreateAccount ?
        <CreateAccount
          showCreateAccount={show => this.showCreateAccount(show)}
          createAccount={createAccount}
          closeDropdown={() => this.closeDropdown()}
          user={user}
        />
        :
        <Login
          showCreateAccount={show => this.showCreateAccount(show)}
          closeDropdown={() => this.closeDropdown()}
          logUserIn={logUserIn}
          user={user}
        />
    );
  }

  render() {
    const {
      user,
      logUserOut,
    } = this.props;

    return (
      <div
        ref={(c) => { this.dropdownContainer = c; }}
        className="button-group"
      >
        <button
          type="button"
          className="login-button btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {user._id ?
            <span>
              <i className="gold-member fa fa-trophy" /> {user.emails[0].address}
            </span> :
            <span>Sign in</span>
          } <span className="caret" />
        </button>
        <ul
          ref={(c) => { this.dropdown = c; }}
          className="header-login dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          {user._id ?
            <Logout
              logUserOut={logUserOut}
            />
            :
            this.buildLoginForm()}
        </ul>
      </div>
    );
  }
}

LoginDropDown.propTypes = {
  logUserIn: PropTypes.func,
  createAccount: PropTypes.func,
  showCreateAccount: PropTypes.func,
  logUserOut: PropTypes.func,
  user: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.object),
  }),
};

const actions = {
  showCreateAccount: loginActions.showCreateAccount,
  createAccount: loginActions.createAccount,
  logUserOut: loginActions.logUserOut,
  logUserIn: loginActions.logUserIn,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(LoginDropDown);
