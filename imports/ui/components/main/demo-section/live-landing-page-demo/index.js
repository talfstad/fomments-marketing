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
    return (
      <div
        ref={(c) => { this.el = c; }}
        className="modal fade modal"
        tabIndex="-1"
      >
        <div className="tablet-container live-demo-modal" role="document">
          <div className="tablet-portrait">
            <div>
              <video
                autoPlay
                loop
                className="example-video"
                height="540px"
                poster="https://www.flowmail.com/images/index/poster.png"
              >
                <source src="/videos/fomments-demo-video.mov" type="video/mov;" />
                <source src="/videos/fomments-demo-video.webm" type="video/webm; codecs=" />
                  vp8, vorbis
                <source src="/videos/fomments-demo-video.mp4" type="video/mp4; codecs=" />
                  avc1.42E01E, mp4a.40.2
              </video>
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
