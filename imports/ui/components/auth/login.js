import React, { Component, PropTypes } from 'react';

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


  render() {
    const {
      showCreateAccount,
    } = this.props;

    return (
      <form onSubmit={e => this.handleSignIn(e)}>
        <h3>Account</h3>
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
            <a href="d#">Forgot Password</a>
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
            className="create-account pull-right btn"
          >
            Create Account
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  dropdownContainer: PropTypes.shape({}),
  showCreateAccount: PropTypes.func,
  closeDropdown: PropTypes.func,
  logUserIn: PropTypes.func,
  user: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Login;
