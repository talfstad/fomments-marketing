import React, { Component } from 'react';

class AboveTheFold extends Component {
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
            Code examples of demos proudly hosted at <a href="3f">github.com</a>
              </span>
            </span>
            <h1>The new standard in landing page comments</h1>
            <p className="common-body-text">
      Adding fomments to your landing page is the easiest way to build product trust,
      and instantly increase ROI in every vertical.
    </p>
            <ul>
              <li>
                <a onClick={scrollToCommentSection} href="" className="signup-button common-button">
          Choose a comment section
        </a>
              </li>
              <li>
                <a href="" className="common-button">
          create your own
        </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
    );
  }
}

export default AboveTheFold;
