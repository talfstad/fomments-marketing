import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import Main from './main';
import Header from './header/';
import Footer from './footer-section';

import ResetPasswordModal from './auth/reset-password-modal';
import AccountModal from './auth/account/account-modal';

// Intent: load all Schemas onto collectionsttaches schemas to all
import '../../../imports/api/meteor/collections';

import '../../../imports/ui/css/app.scss';

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
      <Router>
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
          <Route path="/reset-password" component={ResetPasswordModal} />
          <Route
            path="/account"
            render={props =>
              (this.state.showAccountModal ?
                <AccountModal
                  {...props}
                  setShowAccountModal={show => this.setShowAccountModal(show)}
                />
                :
                <noscript />)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
