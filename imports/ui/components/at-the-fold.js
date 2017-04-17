import React, { Component } from 'react';

class AtTheFold extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(this.tabletEl).animate({
        scrollTop: 150,
      }, 2500, () => {
        setTimeout(() => {
          $(this.tabletEl).animate({
            scrollTop: 0,
          }, 3000);
        }, 3000);
      });
    }, 500);
  }

  render() {
    return (
      <div>
        <div className="app-features-container container-lg">
          <section className="app-features">
            <div className="tablet-portrait">
              <div ref={(c) => { this.tabletEl = c; }}>
                <img alt="" src="/images/comments-example.png" />
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
