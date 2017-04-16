import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '/imports/ui/components/header';
import AboveTheFold from '/imports/ui/components/above-the-fold';
import AtTheFold from '/imports/ui/components/at-the-fold';
import ChooseCommentSection from '/imports/ui/components/choose-comment-section';
import ResetPasswordModal from '/imports/ui/components/auth/reset-password-modal';
import AccountModal from '/imports/ui/components/auth/account-modal';

// Intent: load all Schemas onto collectionsttaches schemas to all
import '/imports/api/meteor/collections';

import 'font-awesome/css/font-awesome.css';

import '/imports/ui/css/app.scss';

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
        <Route
          path="/"
          render={() =>
            <div>
              <Header />
              <main>
                <AboveTheFold
                  scrollToCommentSection={e => App.scrollToCommentSection(e)}
                />
                <AtTheFold />
                <ChooseCommentSection
                  ref={(el) => { this.chooseCommentSection = el; }}
                />
                <footer id="github-section" className="stacked-container" />
              </main>
              <Route path="/reset-password" component={ResetPasswordModal} />
              <Route
                path="/account"
                render={() =>
                  (this.state.showAccountModal ?
                    <AccountModal
                      setShowAccountModal={show => this.setShowAccountModal(show)}
                    />
                  :
                    <noscript />)}
              />
            </div>
          }
        />
      </Router>
    );
  }
}

App.scrollToCommentSection = (e) => {
  e.preventDefault();
  const el = $('#choose-comment-section');
  $('html, body').animate({
    scrollTop: $(el).position().top,
  }, 'slow');
};

export default App;
