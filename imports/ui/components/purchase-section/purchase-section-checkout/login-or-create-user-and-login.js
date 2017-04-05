import React, { Component, PropTypes } from 'react';

class LoginOrCreateUserAndLogin extends Component {
  getErrorForField(field) {
    const { errors } = this.props;
    const error = errors.find(o => o.name === field);
    if (error) {
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    return <noscript />;
  }

  handleCancelPurchase(e) {
    e.preventDefault();
    const {
      setShowPurchaseFlow,
    } = this.props;

    setShowPurchaseFlow(false);
  }

  handleContinue(e) {
    e.preventDefault();
    const { loginOrCreateUser } = this.props;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    loginOrCreateUser({
      email,
      password,
    });
  }

  render() {
    const {
      section,
    } = this.props;

    return (
      <div className="row info-box">
        <div className="col-sm-1 unlock-box">
          <i className="fa fa-lock" />
        </div>
        <div className="col-sm-11 purchase-content">
          <form>
            <h3>Instantly unlock {section.name} in {section.language}</h3>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input ref={(c) => { this.emailInput = c; }} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              {this.getErrorForField('email')}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input ref={(c) => { this.passwordInput = c; }} type="password" className="form-control" placeholder="Password" />
              {this.getErrorForField('password')}
            </div>
            <div className="form-group clearfix">
              <button onClick={e => this.handleCancelPurchase(e)} className="pull-left btn btn-default">
                Cancel
              </button>
              <button onClick={e => this.handleContinue(e)} className="pull-right btn btn-default">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginOrCreateUserAndLogin.propTypes = {
  loginOrCreateUser: PropTypes.func,
  setShowPurchaseFlow: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.object),
  section: PropTypes.shape({}),
};

export default LoginOrCreateUserAndLogin;
