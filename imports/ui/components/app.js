import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '/imports/ui/components/header/';
import FeatureSection from '/imports/ui/components/header/feature-section';
import DemoSection from '/imports/ui/components/demo-section/';
import ChooseCommentSection from '/imports/ui/components/choose-comment-section';
import ResetPasswordModal from '/imports/ui/components/auth/reset-password-modal';
import AccountModal from '/imports/ui/components/auth/account/account-modal';
import TryItNowSection from '/imports/ui/components/try-it-now-section';
import FooterSection from '/imports/ui/components/footer-section';

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
                <FeatureSection
                  scrollToCommentSection={e => App.scrollToCommentSection(e)}
                />
                <DemoSection />
                <ChooseCommentSection
                  ref={(el) => { this.chooseCommentSection = el; }}
                  handleScrollOpenSignin={e => App.handleScrollOpenSignin(e)}
                />
                <TryItNowSection />
                <FooterSection />
              </main>
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
          }
        />
      </Router>
    );
  }
}

App.handleScrollOpenSignin = (e) => {
  e.preventDefault();
  const el = $('#global-nav');
  $('html').animate({
    scrollTop: $(el).position().top,
  }, 'slow', () => {
    $('.login-button').dropdown('toggle');
  });
};

App.scrollToCommentSection = (e) => {
  e.preventDefault();
  const el = $('#choose-comment-section');
  $('html').animate({
    scrollTop: $(el).position().top,
  }, 'slow');
};

export default App;
