import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountTabs from './account-tabs';

class AccountModal extends Component {
  componentDidMount() {
    const {
      modalRedirectRouteOnClose,
      history,
    } = this.props;

    $(this.el).modal('show');

    $(this.el).on('shown.bs.modal', () => {
      $(this.passwordInput).focus();
    });

    $(this.el).on('hidden.bs.modal', () => {
      // Intent: redirect on close if we have a prop.
      // If not, just close.
      if (!_.isEmpty(modalRedirectRouteOnClose)) {
        history.push(modalRedirectRouteOnClose);
      } else {
        history.push('/');
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      user,
    } = nextProps;

    if (!user.loggingIn && !user._id) {
      this.redirectToHome();
    }
  }

  componentWillUnmount() {
    // Intent: Remove backdrop to allow for a quick
    // back button press.
    $('.modal-backdrop').remove();
  }

  redirectToHome() {
    const {
      history,
    } = this.props;
    // Intent: if this modal was shown because of route, on close send to home
    if (history) {
      history.push('/');
    }
  }

  closeModal() {
    $(this.el).modal('hide');
  }

  render() {
    return (
      <div
        ref={(c) => { this.el = c; }}
        className="modal fade"
        tabIndex="-1"
        data-backdrop="static"
        role="dialog"
      >
        <div className="account-modal modal-dialog" role="document">
          <div className="modal-content no-footer clearfix">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Account</h4>
            </div>
            <div className="modal-body">
              <AccountTabs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AccountModal.defaultProps = {
  history: {},
  user: {},
  modalRedirectRouteOnClose: null,
};

AccountModal.propTypes = {
  history: PropTypes.shape({}),
  user: PropTypes.shape({}),
  modalRedirectRouteOnClose: PropTypes.string,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(AccountModal);
