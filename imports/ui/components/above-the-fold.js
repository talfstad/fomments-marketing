import React, { PureComponent, PropTypes } from 'react';

class AboveTheFold extends PureComponent {
  render() {
    const {
      scrollToCommentSection,
    } = this.props;

    return (
      <header>
        <div id="stripes">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <section id="intro">
          <div className="container-lg feature">
            <span href="" className="announcement">
              <span className="new-pill">
                <span className="nav-section github-seal">
                  <img alt="" src="/images/GitHub-Mark-120px-plus.png" />
                </span>
              </span>
              <span className="message">
                Code examples &amp; full feature list proudly hosted at <a href="3f">github.com</a>
              </span>
            </span>
            <h1>The new standard in landing page comments</h1>
            <p className="common-body-text">
              Trigger your user&apos;s urge to buy using comments proven to sell more.
            </p>
            <ul>
              <li>
                <a onClick={scrollToCommentSection} href="" className="signup-button common-button">
                  <i className="fa fa-arrow-down mr5" />
                  Choose a comment section
                </a>
              </li>
              <li>
                <a href="" className="find-out-more-btn common-button">
                  Find out more
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
    );
  }
}

AboveTheFold.propTypes = {
  scrollToCommentSection: PropTypes.func.isRequired,
};

export default AboveTheFold;
