import React, { Component, PropTypes } from 'react';
import Modal from '../modal';

class ResetPasswordModal extends Component {
  componentDidMount() {
    $(this.passwordInput).focus();
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

  handleResetPassword(e) {
    if (e) e.preventDefault();
    const {
      resetPassword,
    } = this.props;
    const password = this.passwordInput.value;
    const confirmPassword = this.confirmPasswordInput.value;
    resetPassword({ password, confirmPassword });
  }

  render() {
    return (
      <Modal>
        <div className="reset-password-modal modal-dialog" role="document">
          <form onSubmit={e => this.handleResetPassword(e)}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Reset Password</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="password">New Password</label>
                  <input
                    ref={(c) => { this.passwordInput = c; }}
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm New Password</label>
                  <input
                    ref={(c) => { this.confirmPasswordInput = c; }}
                    id="confirm-password"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="reset-password-button submit pull-right btn btn-default">Submit</button>
                <button type="submit" data-dismiss="modal" className="cancel-button btn-default submit pull-right btn btn-default">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

ResetPasswordModal.propTypes = {
  resetPassword: PropTypes.func,
};

export default ResetPasswordModal;
