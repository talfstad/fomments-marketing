import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class DemoSection extends PureComponent {
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
                  <img alt="" src="/images/fomments-inverted.png" />
                </span>
              </span>
              <span className="message">
                Limited free early registration is now <Link to="/signup/one" className="new-pill-button">OPEN <i className="fa fa-angle-double-right" /></Link>
              </span>
            </span>
            <h1>The new standard in landing page comments</h1>
            <p className="common-body-text">
              Trigger a consumer&apos;s urge to purchase by using comments proven to sell more.
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

DemoSection.propTypes = {
  scrollToCommentSection: PropTypes.func.isRequired,
};

export default DemoSection;
