import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as loginActions from '/imports/actions/user/login';

class ChangePassword extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(this.oldPasswordInput).focus();
    });
  }

  componentWillUnmount() {
    const { resetChangePasswordErrors } = this.props;
    resetChangePasswordErrors();
  }

  getErrorForField(field) {
    const { changePasswordErrors } = this.props;
    const error = changePasswordErrors.find(o => o.name === field);
    if (error) {
      if (error.type === 'success') {
        return <small className="form-text text-success text-muted">{error.message}</small>;
      }
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    // Intent: if no error, always show confirm password helper
    if (field === 'confirm-password') {
      return <small className="form-text text-muted">Please confirm your new password</small>;
    }
    return <noscript />;
  }

  handleResetPassword(e) {
    if (e) e.preventDefault();
    const { changePassword } = this.props;
    const oldPassword = this.oldPasswordInput.value;
    const newPassword = this.newPasswordInput.value;
    const confirmNewPassword = this.confirmNewPasswordInput.value;

    changePassword({ oldPassword, newPassword, confirmNewPassword });
  }

  render() {
    return (
      <div>
        <form className="clearfix reset-password-form" onSubmit={e => this.handleResetPassword(e)}>
          <p>change password</p>
          <div className="form-group">
            <label htmlFor="old-password">Current Password</label>
            <input
              ref={(c) => { this.oldPasswordInput = c; }}
              id="old-password"
              type="password"
              className="form-control"
              aria-describedby="old-password-help"
              placeholder="Enter Current Password"
            />
            {this.getErrorForField('oldPassword')}
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              ref={(c) => { this.newPasswordInput = c; }}
              id="new-password"
              type="password"
              className="form-control"
              placeholder="Enter New Password"
            />
            {this.getErrorForField('newPassword')}
          </div>
          <div className="form-group">
            <label htmlFor="confirm-new-password">Confirm New Password</label>
            <input
              ref={(c) => { this.confirmNewPasswordInput = c; }}
              id="confirm-new-password"
              type="password"
              className="form-control"
              placeholder="Confirm New Password"
            />
            {this.getErrorForField('confirmNewPassword')}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit pull-right btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  changePasswordErrors: PropTypes.arrayOf(PropTypes.object),
  changePassword: PropTypes.func,
  resetChangePasswordErrors: PropTypes.func,
};

const actions = {
  changePassword: loginActions.changePassword,
  resetChangePasswordErrors: loginActions.resetChangePasswordErrors,
};

const mapStateToProps = state => ({
  changePasswordErrors: state.user.changePassword.errors,
});

export default connect(mapStateToProps, actions)(ChangePassword);
