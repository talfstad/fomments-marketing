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
                Poorly designed comments are destroying
                your conversion rate, and it&apos;s obvious
              </span>
              <i className="fa fa-angle-double-right" />

            </h2>
            <p className="common-body-text">
              Everyday we rely on personal recommendations before we decide to buy.
              So do your customers. That&apos;s why fomments is split test proven
              to increase conversion rate over your current, non-functional, comment section.
            </p>
          </section>
        </section></div>
    );
  }
}

export default AtTheFold;
