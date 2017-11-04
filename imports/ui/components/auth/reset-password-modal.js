import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as loginActions from '/imports/actions/user/login';
import { connect } from 'react-redux';
import Modal from '../modal';

class ResetPasswordModal extends Component {
  componentDidMount() {
    $(this.modal.el).modal('show');

    $(this.passwordInput).focus();

    const { history } = this.props;
    $(this.modal.el).on('hidden.bs.modal', () => {
      history.push('/');
    });
  }

  componentDidUpdate() {
    const { resetPasswordErrors } = this.props;
    if (resetPasswordErrors.length < 1) {
      this.closeModal();
    }
  }

  getPasswordToken() {
    const { history } = this.props;
    return history.location.pathname.replace('/reset-password/', '');
  }

  getErrorForField(field) {
    const { resetPasswordErrors } = this.props;
    const error = resetPasswordErrors.find(o => o.name === field);
    if (error) {
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    return <noscript />;
  }

  closeModal() {
    $(this.modal.el).modal('hide');
  }

  handleResetPassword(e) {
    if (e) e.preventDefault();
    const {
      resetPassword,
    } = this.props;
    const token = this.getPasswordToken();
    const password = this.passwordInput.value;
    const confirmPassword = this.confirmPasswordInput.value;
    resetPassword({ token, password, confirmPassword }, (errors) => {
      if (errors.length < 1) {
        this.closeModal();
      }
    });
  }

  render() {
    return (
      <Modal ref={(c) => { this.modal = c; }}>
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
                  {this.getErrorForField('password')}
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
                  {this.getErrorForField('confirm-password')}
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
  resetPasswordErrors: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape({}),
  resetPassword: PropTypes.func,
};

const actions = {
  resetPassword: loginActions.resetPassword,
};

const mapStateToProps = state => ({
  resetPasswordErrors: state.user.resetPassword.errors,
});

export default connect(mapStateToProps, actions)(ResetPasswordModal);
