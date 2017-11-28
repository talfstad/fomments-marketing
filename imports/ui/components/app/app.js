import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Main from '../main';
import Header from '../header/';
import Footer from '../footer-section';

import ResetPasswordModal from '../auth/reset-password-modal';
import AccountModal from '../auth/account/account-modal';
import SignupModal from '../auth/signup-modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccountModal: true,
    };
  }

  setShowAccountModal(show) {
    this.setState({ showAccountModal: show });
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
          exact
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
      </div>
    );
  }
}

export default App;
