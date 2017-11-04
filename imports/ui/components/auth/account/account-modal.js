import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../../modal';
import AccountTabs from './account-tabs';

class AccountModal extends Component {
  componentDidMount() {
    const {
      setShowAccountModal,
    } = this.props;

    this.show();

    $(this.modal.el).on('hidden.bs.modal', () => {
      if (setShowAccountModal) setShowAccountModal(false);
      this.redirectToHome();
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
    this.hide();
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

  show() {
    $(this.modal.el).modal('show');
    $(this.passwordInput).focus();
  }

  hide() {
    $(this.modal.el).modal('hide');
  }

  render() {
    return (
      <Modal ref={(c) => { this.modal = c; }}>
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
      </Modal>
    );
  }
}

AccountModal.propTypes = {
  history: PropTypes.shape({}),
  user: PropTypes.shape({}),
  setShowAccountModal: PropTypes.func,
};

const actions = {
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(AccountModal);
