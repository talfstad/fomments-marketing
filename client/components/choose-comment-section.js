import React from 'react';

const ChooseCommentSection = props =>
  <section id="choose-comment-section">
    <section className="stacked-container container-lg">
      <h2>
        <i className="fa fa-commenting-o section-icon" />
    Choose a comment section
  </h2>
      <p className="common-body-text">
    Pick a comment section by product, target market, and go!
  </p>
      <section id="comment-choice-container">
        <header className="comment-choice-header">
          <div className="age-demo-select-container">
            <form>
              <div className="choose-menu">
                <p>
                  <a className="comment-section-arrow left" href="f#">
                    <i className="fa fa-arrow-left" />
                  </a>
                  <a className="comment-section-arrow right" href="d#">
                    <i className="fa fa-arrow-right" />
                  </a>
                  <span className="shim-select">
                    <label htmlFor="vertical-select-label">
                      <span>
                      Section 1
                    </span>
                    </label>
                    <select name="vertical-select" id="vertical-select">
                      <option value="">Section 1</option>
                      <option value="">Section 2</option>
                      <option value="">Section 3</option>
                      <option value="">Section 4</option>
                    </select>
                  </span>
                </p>
                <p>
                  <label htmlFor="fullname">Product name</label>
                  <input type="text" id="fullname" name="fullname" required="" />
                </p>
                <p>
                  <span className="shim-select">
                    <label htmlFor="vertical-select-label">
                      <span>
                      Skin
                    </span>
                    </label>
                    <select name="vertical-select" id="vertical-select">
                      <option value="">App Install</option>
                      <option value="">Diet</option>
                      <option value="">Erectile Disfunction</option>
                      <option value="">Muscle</option>
                      <option value="">Skin</option>
                      <option value="">Sweepstakes</option>
                      <option value="">Giveaway</option>
                    </select>
                  </span>
                </p>
                <p>
                  <span className="shim-select">
                    <label htmlFor="country">
                      <span className="flag-icon flag-icon-us">
                    English
                  </span>
                    </label>
                    <select name="country" id="country">
                      <option value="">English</option>
                      <option value="">French</option>
                      <option value="">German</option>
                      <option value="">Mandarin</option>
                      <option value="">Spanish</option>

                    </select>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </header>
        <section className="comments">
          <div id="fomments" />
        </section>
      </section>
    </section>
  </section>;

export default ChooseCommentSection;
