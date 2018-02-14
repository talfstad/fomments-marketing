import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { updateIntercom } from '/imports/actions/intercom';
import {
  loadGoogleAnalytics,
  logPageView,
} from '/imports/actions/google-analytics';

import FeatureSection from './feature-section';
import DemoSection from './demo-section/';
import ChooseCommentSection from './choose-comment-section';
import TryItNowSection from './try-it-now-section';

class Main extends Component {
  componentDidMount() {
    loadGoogleAnalytics();

    const { history } = this.props;
    history.listen(() => {
      updateIntercom();
      logPageView();
    });
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

Main.propTypes = {
  history: PropTypes.shape({}),
};

Main.defaultProps = {
  history: {},
};

export default withRouter(Main);
