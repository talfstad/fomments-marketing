import React, { Component, PropTypes } from 'react';

class SigninOrCreateUserAndLogin extends Component {
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
    // create user action, if error login if error show in UI
    // done all from 1 action
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
              <input ref={(c) => { this.emailInput = c; }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input ref={(c) => { this.passwordInput = c; }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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


SigninOrCreateUserAndLogin.propTypes = {
  loginOrCreateUser: PropTypes.func,
  section: PropTypes.shape({}),
  setShowPurchaseFlow: PropTypes.func,
};

export default SigninOrCreateUserAndLogin;
