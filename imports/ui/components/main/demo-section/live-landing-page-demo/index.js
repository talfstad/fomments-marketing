import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LiveLandingPageDemo extends Component {
  componentDidMount() {
    const {
      history,
      modalRedirectRouteOnClose,
    } = this.props;

    $(this.el).modal('show');

    $(this.el).on('shown.bs.modal', () => {
      $(this.offerNameInput).focus();
    });

    $(this.el).on('hidden.bs.modal', () => {
      // Intent: redirect on close if we have a prop.
      // If not, just close.
      if (!_.isEmpty(modalRedirectRouteOnClose)) {
        history.push(modalRedirectRouteOnClose);
      }
    });
  }

  componentWillUnmount() {
    // Intent: Remove backdrop to allow for a quick
    // back button press.
    $('.modal-backdrop').remove();
  }

  closeModal() {
    $(this.el).modal('hide');
  }

  render() {
    const {
      modalTitle,
    } = this.props;

    return (
      <div
        ref={(c) => { this.el = c; }}
        className="modal fade modal"
        tabIndex="-1"
      >
        <div className="add-offer-modal modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
              <h4 className="modal-title">{modalTitle}</h4>
            </div>
            <div className="modal-body">
              Hey there
            </div>
            <div className="modal-footer">
              <button type="button" className="btn dark btn-outline" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LiveLandingPageDemo.propTypes = {
  history: PropTypes.shape({}),
  modalTitle: PropTypes.string,
  modalRedirectRouteOnClose: PropTypes.string,
};

LiveLandingPageDemo.defaultProps = {
  modalTitle: '',
  modalRedirectRouteOnClose: '/',
  history: {},
};

export default LiveLandingPageDemo;
