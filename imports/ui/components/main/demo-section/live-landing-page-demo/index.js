import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LiveLandingPageDemo extends Component {
  componentDidMount() {
    const {
      history,
      modalRedirectRouteOnClose,
    } = this.props;

    this.keepAspectRatio();
    // On resize, resize aspect ratio
    $(window).resize(() => {
      this.keepAspectRatio();
    });

    $(this.el).modal('show');

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

  // Maintain a 4:3 aspect ration on modal for 80% modal height.
  keepAspectRatio() {
    const modalHeight = $(this.el).height() * 0.8;
    const modalWidth = modalHeight * 0.75;
    $('.live-demo-modal').css('width', `${modalWidth}px`);
  }

  closeModal() {
    $(this.el).modal('hide');
  }

  render() {
    return (
      <div
        ref={(c) => { this.el = c; }}
        className="modal fade ohidden"
        tabIndex="-1"
      >
        <div
          className="tablet-container live-demo-modal"
          role="document"
        >
          <div className="tablet-portrait">
            <div>
              <iframe
                src="/landing-page/index.html"
              />
            </div>
          </div>
          <button type="button" className="close-tablet-button close" data-dismiss="modal" aria-hidden="true">
            <i className="fa fa-times fa-times-thin" />
          </button>
        </div>
      </div>
    );
  }
}

LiveLandingPageDemo.propTypes = {
  history: PropTypes.shape({}),
  modalRedirectRouteOnClose: PropTypes.string,
};

LiveLandingPageDemo.defaultProps = {
  modalRedirectRouteOnClose: '/',
  history: {},
};

export default LiveLandingPageDemo;
