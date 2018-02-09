import React, { Component } from 'react';
import {
  Link,
  Route,
  withRouter,
} from 'react-router-dom';

import LiveLandingPageDemo from './live-landing-page-demo';

class AtTheFold extends Component {
  render() {
    return (
      <div>
        <div className="app-features-container container-lg">
          <section className="app-features">
            <div className="tablet-portrait">
              <div>
                <video
                  autoPlay
                  loop
                  className="example-video"
                  height="540px"
                  poster="https://www.flowmail.com/images/index/poster.png"
                >
                  <source
                    src="/videos/fomments-demo-video.mov"
                    type="video/mov;"
                  />
                  <source
                    src="/videos/fomments-demo-video.webm"
                    type="video/webm; codecs="
                  />
                    vp8, vorbis
                  <source
                    src="/videos/fomments-demo-video.mp4"
                    type="video/mp4; codecs="
                  />
                    avc1.42E01E, mp4a.40.2
                </video>
              </div>
            </div>
          </section>
        </div>
        <section id="primary">
          <div className="white-tilted-bg" />
          <section id="feels-real" className="container-lg">
            <h2>
              <span>
                Easily use at scale, with split tests, and integrate in minutes.
              </span>
              <i className="fa fa-angle-double-right" />

            </h2>
            <p className="common-body-text">
              Fomments runs 100% in the browser and
              <br />can update the section, language and product name
              <br />dynamically, giving you more time for life.
            </p>
            <Link
              to="/live-landing-page-demo"
              className="try-out-in-lander common-body-text"
            >
              Test out a live landing page demo
              <i className="fa fa-window-restore" />
            </Link>
          </section>
        </section>
        <Route
          path="/live-landing-page-demo"
          exact
          component={LiveLandingPageDemo}
        />
      </div>
    );
  }
}

AtTheFold.propTypes = {
};

export default withRouter(AtTheFold);
