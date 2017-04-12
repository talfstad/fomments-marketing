import React, { Component, PropTypes } from 'react';

class CreateAccount extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(this.confirmPasswordInput).focus();
    });
  }

  componentWillUnmount() {
    this.handleBackButtonClick();
  }

  getErrorForField(field) {
    const { user } = this.props;
    const { login = {} } = user;
    const { errors = [] } = login;
    const error = errors.find(o => o.name === field);
    if (error) {
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    // Intent: if no error, always show confirm password helper
    if (field === 'confirm-password') {
      return <small className="form-text text-muted">Please confirm your new password</small>;
    }
    return <noscript />;
  }

  handleBackButtonClick(e) {
    if (e) e.preventDefault();

    const {
      showCreateAccount,
    } = this.props;

    showCreateAccount(false);
  }

  handleCreateAccount(e) {
    if (e) e.preventDefault();
    const {
      createAccount,
      closeDropdown,
    } = this.props;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const confirmPassword = this.confirmPasswordInput.value;
    createAccount({ email, password, confirmPassword });
    closeDropdown();
  }

  render() {
    return (
      <form onSubmit={e => this.handleCreateAccount(e)}>
        <h3>Create New Account</h3>
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
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            ref={(c) => { this.confirmPasswordInput = c; }}
            id="confirm-password"
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
          {this.getErrorForField('confirm-password')}
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="submit pull-right btn btn-default"
          >
            Submit
          </button>
          <button onClick={e => this.handleBackButtonClick(e)} className="create-account pull-left btn">
            Back
          </button>
        </div>
      </form>
    );
  }
}

CreateAccount.propTypes = {
  user: PropTypes.shape({}),
  showCreateAccount: PropTypes.func,
  createAccount: PropTypes.func,
  closeDropdown: PropTypes.func,
};

export default CreateAccount;
