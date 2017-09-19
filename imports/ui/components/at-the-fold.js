import React, { Component } from 'react';

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
                    src="/videos/fomments-screencast-mov.mov"
                    type="video/mov;"
                  />
                  <source
                    src="/videos/fomments-screencast-webm.webm"
                    type="video/webm; codecs="
                  />
                    vp8, vorbis
                  <source
                    src="/videos/fomments-screencast-mp4.mp4"
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
                Poorly designed comments aren&apos;t helping your conversion rate.
                <br /> we change that.
              </span>
              <i className="fa fa-angle-double-right" />

            </h2>
            <p className="common-body-text">
              &quot;Nearly half (45%) of digital buyers worldwide said
              <br />that reading reviews, comments and feedback
              <br />influenced their digital shopping behavior.&quot;
              <br /><em>&mdash; PricewaterhouseCoopers</em>
            </p>
          </section>
        </section></div>
    );
  }
}

export default AtTheFold;
