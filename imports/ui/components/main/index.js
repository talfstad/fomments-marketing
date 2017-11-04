import React, { Component } from 'react';

import FeatureSection from './feature-section';
import DemoSection from './demo-section/';
import ChooseCommentSection from './choose-comment-section';
import TryItNowSection from './try-it-now-section';

class Main extends Component {
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
        <main>
          <FeatureSection
            scrollToCommentSection={e => Main.scrollToCommentSection(e)}
          />
          <DemoSection />
          <ChooseCommentSection
            ref={(el) => { this.chooseCommentSection = el; }}
            handleScrollOpenSignin={e => Main.handleScrollOpenSignin(e)}
          />
          <TryItNowSection />
        </main>
      </div>
    );
  }
}

Main.handleScrollOpenSignin = (e) => {
  e.preventDefault();
  const el = $('#global-nav');
  $('html').animate({
    scrollTop: $(el).position().top,
  }, 'slow', () => {
    $('.login-button').dropdown('toggle');
  });
};

Main.scrollToCommentSection = (e) => {
  e.preventDefault();
  const el = $('#choose-comment-section');
  $('html').animate({
    scrollTop: $(el).position().top,
  }, 'slow');
};

export default Main;
