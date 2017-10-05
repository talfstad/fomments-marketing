import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';

import OneComponent from './one';
import TwoComponent from './two';
import ThreeComponent from './three';

class SignupModal extends Component {
  componentDidMount() {
    this.keepAspectRatio();
    // On resize, resize aspect ratio
    $(window).resize(() => {
      this.keepAspectRatio();
    });

    $(this.el).on('shown.bs.modal', () => {
      if (this.shouldClose) {
        this.closeModal();
      }
    });

    $(this.el).on('hidden.bs.modal', () => {
      this.redirectOnClose();
    });

    $(this.el).modal('show');
  }

  componentWillUnmount() {
    // Intent: Remove backdrop to allow for a quick
    // back button press.
    // $('.modal-backdrop').remove();
    this.closeModal();
  }

  redirectOnClose() {
    const {
        history,
        modalRedirectRouteOnClose,
      } = this.props;
      // Intent: redirect on close if we have a prop.
      // If not, just close.
    if (!_.isEmpty(modalRedirectRouteOnClose)) {
      history.push(modalRedirectRouteOnClose);
    }
  }

  // Maintain a 4:3 aspect ration on modal for 90% modal height.
  keepAspectRatio() {
    const modalHeight = $(this.el).height() * 0.9;
    const modalWidth = modalHeight * 0.75;
    $('.live-demo-modal').css('width', `${modalWidth}px`);
  }

  closeModal() {
    $(this.el).modal('hide');
  }

  updateShouldClose(shouldClose) {
    this.shouldClose = shouldClose;
    if (this.el) this.closeModal();
  }

  render() {
    const { match } = this.props;

    return (
      <div
        ref={(c) => { this.el = c; }}
        className="modal fade ohidden"
        data-backdrop="static"
        tabIndex="-1"
      >
        <div
          className="tablet-container live-demo-modal"
          role="document"
        >
          <div className="tablet-portrait">
            <Switch>
              <Route
                exact
                path={`${match.url}/one`}
                component={OneComponent}
              />
              <Route
                exact
                path={`${match.url}/two`}
                component={TwoComponent}
              />
              <Route
                exact
                path={`${match.url}/three`}
                component={() =>
                  <ThreeComponent
                    updateShouldClose={val => this.updateShouldClose(val)}
                  />
                }
              />
              <Route render={() => <Redirect to="/signup/one" />} />
            </Switch>
          </div>
          <Route
            exact
            path={`${match.url}/one`}
            render={() =>
              <Link to={`${match.url}/two`}>
                <button className="home-tablet-button f-action-button green">
                  Create your account <i className="fa fa-angle-double-right" />
                </button>
              </Link>
            }
          />
        </div>
      </div>
    );
  }
}

SignupModal.propTypes = {
  history: PropTypes.shape({}),
  match: PropTypes.shape({}),
  modalRedirectRouteOnClose: PropTypes.string,
};

SignupModal.defaultProps = {
  modalRedirectRouteOnClose: '/',
  history: {},
  match: {},
};

export default SignupModal;
