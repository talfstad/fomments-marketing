import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                <strong>
                  NOTICE:
                </strong>
                <span> We will add requested verticals!
                  Don&apos;t see a vertical you need? Gives us a heads up!
                </span>
              </span>
            </span>
            <h1>The new standard in landing page comments</h1>
            <p className="common-body-text">
              Customization, Ease of use, and beauty all
              wrapped together to make your life a little happier.
            </p>
            <ul>
              <li>
                <a onClick={scrollToCommentSection} href="" className="signup-button common-button">
                  <i className="fa fa-arrow-down mr5" />
                  Choose a comment section
                </a>
              </li>
              {
                !_.has(user, '_id') ?
                  <li>
                    <Link to="/signup" className="find-out-more-btn common-button">
                      Sign up now
                    </Link>
                  </li>
                :
                  <noscript />
              }
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
