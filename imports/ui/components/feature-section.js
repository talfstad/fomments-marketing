import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FeatureSection extends Component {
  render() {
    const {
      user,
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
                <strong>Announcement:</strong> Limited free early registration is now open.
                {
                  !_.has(user, '_id') ?
                    <Link to="/signup/one" className="new-pill-button"> Sign up <i className="fa fa-angle-double-right" /></Link>
                  :
                    <noscript />
                }
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

FeatureSection.propTypes = {
  scrollToCommentSection: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(FeatureSection);
