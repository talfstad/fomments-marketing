import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import OneComponent from './one';
import TwoComponent from './two';
import ThreeComponent from './three';

class SignupModal extends Component {
  componentDidMount() {
    if (this.shouldClose) {
      this.redirectOnClose();
    } else {
      $(this.el).modal('show');
    }
  }

  componentWillUnmount() {
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
        className="modal fade"
        data-backdrop="static"
        tabIndex="-1"
      >
        <Switch>
          <Route
            exact
            path={`${match.url}/one`}
            component={() => (
              <OneComponent
                closeModal={() => this.redirectOnClose()}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/two`}
            component={() => (
              <TwoComponent
                closeModal={() => this.redirectOnClose()}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/three`}
            component={() => (
              <ThreeComponent
                updateShouldClose={val => this.updateShouldClose(val)}
              />
            )}
          />
          <Route render={() => <Redirect to="/signup/one" />} />
        </Switch>
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
