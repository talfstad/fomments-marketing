import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { bootIntercom } from '/imports/actions/intercom';

import Main from '../main';
import Header from '../header/';
import Footer from '../footer-section';

import ResetPasswordModal from '../auth/reset-password-modal';
import AccountModal from '../auth/account/account-modal';
import OperationAgreements from '../operation-agreements';
import SignupModal from '../auth/signup-modal';

class App extends Component {
  componentDidMount() {
    bootIntercom();
  }

  render() {
    return (
      <div>
        <Route path="*" component={Header} />
        <Switch>
          <Route
            path="/"
            component={Main}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Route path="*" component={Footer} />
        <Route
          path="/signup"
          component={SignupModal}
        />
        <Route
          path="/reset-password"
          component={ResetPasswordModal}
        />
        <Route
          exact
          path="/account"
          component={AccountModal}
        />
        <Route
          path="/operation-agreements"
          component={OperationAgreements}
        />
      </div>
    );
  }
}

export default App;
