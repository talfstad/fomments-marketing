import React, { Component, PropTypes } from 'react';

import ForgotPassword from './forgot-password';

class Login extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(this.emailInput).focus();
    });
  }

  getErrorForField(field) {
    const { user } = this.props;
    const { login = {} } = user;
    const { errors = [] } = login;
    const error = errors.find(o => o.name === field);
    if (error) {
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    return <noscript />;
  }

  showForgotPassword(show) {
    const {
      showForgotPassword,
    } = this.props;
    showForgotPassword(show);
  }

  handleSignIn(e) {
    e.preventDefault();
    const {
      logUserIn,
      closeDropdown,
    } = this.props;

    logUserIn({
      email: this.emailInput.value,
      password: this.passwordInput.value,
    });

    closeDropdown();
  }

  handleShowForgotPassword(e) {
    e.preventDefault();
    this.showForgotPassword(true);
  }

  render() {
    const {
      showCreateAccount,
      user,
      forgotPassword,
    } = this.props;
    const { login = {} } = user;
    const { isShowingForgotPassword = false } = login;

    return (
      isShowingForgotPassword ?
        <ForgotPassword
          showForgotPassword={show => this.showForgotPassword(show)}
          forgotPassword={forgotPassword}
          closeDropdown={() => this.closeDropdown()}
          user={user}
        />
      :
        <form className="clearfix login-form" onSubmit={e => this.handleSignIn(e)}>
          <h3>Account Sign in</h3>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              ref={(c) => { this.emailInput = c; }}
              id="email"
              type="email"
              className="form-control"
              aria-describedby="email-help"
              placeholder="Enter Email Address"
            />
            {this.getErrorForField('email')}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <small id="forgot-password" className="pull-right form-text text-muted">
              <a href="#a" onClick={e => this.handleShowForgotPassword(e)}>Forgot Password</a>
            </small>
            <input
              ref={(c) => { this.passwordInput = c; }}
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
            {this.getErrorForField('password')}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit pull-right btn btn-default"
            >
              Submit
            </button>
            <button
              onClick={(e) => { e.preventDefault(); showCreateAccount(true); }}
              className="create-account pull-left btn"
            >
              Create Account
            </button>
          </div>
        </form>
    );
  }
}

Login.propTypes = {
  forgotPassword: PropTypes.func,
  showForgotPassword: PropTypes.func,
  showCreateAccount: PropTypes.func,
  closeDropdown: PropTypes.func,
  logUserIn: PropTypes.func,
  user: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Login;
