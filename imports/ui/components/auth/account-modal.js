import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from '../modal';

class AccountModal extends Component {
  componentDidMount() {
    // Are we logged in? if not redirect to /
    const {
      setShowAccountModal,
    } = this.props;

    this.show();

    $(this.modal.el).on('hidden.bs.modal', () => {
      this.ifRoutedRedirectRootPath();
      if (setShowAccountModal) setShowAccountModal(false);
    });
  }

  ifRoutedRedirectRootPath() {
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
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Account</h4>
            </div>
            <div className="modal-body">
              HEY THIS IS ACCOUNT INFO
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