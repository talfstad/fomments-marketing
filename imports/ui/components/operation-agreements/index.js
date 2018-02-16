import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OperationTabs from './operation-tabs';

class OperationAgreements extends Component {
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
        this.redirectToHome();
      }
    });
  }

  componentWillUnmount() {
    this.closeModal();
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
              <h4 className="modal-title">Operation Agreements</h4>
            </div>
            <div className="modal-body">
              <OperationTabs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OperationAgreements.defaultProps = {
  history: {},
  user: {},
  modalRedirectRouteOnClose: null,
};

OperationAgreements.propTypes = {
  history: PropTypes.shape({}),
  user: PropTypes.shape({}),
  modalRedirectRouteOnClose: PropTypes.string,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(OperationAgreements);
