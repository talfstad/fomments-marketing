import React, { Component, PropTypes } from 'react';

class ForgotPassword extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(this.emailInput).focus();
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
      if (error.type === 'success') {
        return <small className="form-text text-success text-muted">{error.message}</small>;
      }
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    // Intent: if no error, always show confirm password helper
    if (field === 'email') {
      return <small className="form-text text-muted">Send reset password email</small>;
    }
    return <noscript />;
  }

  handleForgotPassword(e) {
    e.preventDefault();
    const {
      forgotPassword,
    } = this.props;

    forgotPassword({
      email: this.emailInput.value,
    });
  }

  handleBackButtonClick(e) {
    if (e) e.preventDefault();

    const {
      showForgotPassword,
    } = this.props;

    showForgotPassword(false);
  }

  render() {
    return (
      <form className="clearfix login-form" onSubmit={e => this.handleForgotPassword(e)}>
        <h3>forgot password</h3>
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

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func,
  showForgotPassword: PropTypes.func,
  user: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default ForgotPassword;
