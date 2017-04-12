import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Login from './login';
import Logout from './logout';
import CreateAccount from './create-account';
import * as loginActions from '../../../actions/user/login';

class LoginDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      closable: true,
    };
  }

  componentDidMount() {
    // Intent: Close dropdown only when click out of dropdown.
    // Use this.closeable to keep internal state
    $(this.dropdownContainer).on('show.bs.dropdown', () => {
      this.setState({ showing: true });
    });
    $(this.dropdownContainer).on('shown.bs.dropdown', () => {
      this.setState({ closeable: true });
    });

    $(this.dropdownContainer).on('click', () => {
      this.setState({ closeable: false });
      setTimeout(() => {
        this.setState({ closeable: true });
      });
    });

    $(this.dropdownContainer).on('hide.bs.dropdown', () => {
      // Intent: reset login form on close if showing create account
      if (this.state.closeable) {
        this.setState({ showing: false });
        this.showCreateAccount(false);
      }
      return this.state.closeable;
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
      showForgotPassword,
      forgotPassword,
    } = this.props;
    const { showing } = this.state;
    const { login = {} } = user;
    const { isShowingCreateAccount = false } = login;

    if (showing) {
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
            showForgotPassword={showForgotPassword}
            forgotPassword={forgotPassword}
            showCreateAccount={show => this.showCreateAccount(show)}
            closeDropdown={() => this.closeDropdown()}
            logUserIn={logUserIn}
            user={user}
          />
      );
    }
    return <noscript />;
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
  forgotPassword: PropTypes.func,
  showForgotPassword: PropTypes.func,
  logUserIn: PropTypes.func,
  createAccount: PropTypes.func,
  showCreateAccount: PropTypes.func,
  logUserOut: PropTypes.func,
  user: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.object),
  }),
};

const actions = {
  showForgotPassword: loginActions.showForgotPassword,
  forgotPassword: loginActions.forgotPassword,
  showCreateAccount: loginActions.showCreateAccount,
  createAccount: loginActions.createAccount,
  logUserOut: loginActions.logUserOut,
  logUserIn: loginActions.logUserIn,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(LoginDropDown);
