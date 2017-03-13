import React, { Component } from 'react';
import InstallationInstructions from './installation-instructions';

require('../../node_modules/bootstrap-select/dist/js/bootstrap-select.js');

class ChooseCommentSection extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker({
      style: 'btn-default btn-lg',
    });
  }
  render() {
    return (
      <section
        ref={(el) => { this.el = el; }}
        id="choose-comment-section"
      >
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
                <form className="form-inline section-control">
                  <div className="form-group">
                    <small className="form-text text-muted">1. Select a vertical</small>
                    <div>
                      <select className="selectpicker show-menu-arrow">
                        <option value="app-install">App Install</option>
                        <option value="diet">Diet</option>
                        <option value="ed">Erectile Disfunction</option>
                        <option value="muscle">Muscle</option>
                        <option value="skin">Skin</option>
                        <option value="sweepstakes">Sweepstakes</option>
                        <option value="giveaway">Giveaway</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <small className="form-text text-muted">2. Select a language</small>
                    <div>
                      <select defaultValue="english" className="selectpicker show-menu-arrow" name="country" id="country">
                        <option
                          value="chinese"
                          data-content='<span class="flag-icon flag-icon-china">Chinese</span>'
                        >
                          Chinese
                        </option>
                        <option
                          value="english"
                          data-content='<span class="flag-icon flag-icon-us">English</span>'
                        >
                          English
                        </option>
                        <option
                          value="french"
                          data-content='<span class="flag-icon flag-icon-france">French</span>'
                        >
                          French
                        </option>
                        <option
                          value="german"
                          data-content='<span class="flag-icon flag-icon-germany">German</span>'
                        >
                          German
                        </option>
                        <option
                          value="portuguese"
                          data-content='<span class="flag-icon flag-icon-portuguese">Portuguese</span>'
                        >
                          Portuguese
                        </option>
                        <option
                          value="spanish"
                          data-content='<span class="flag-icon flag-icon-mexico">Spanish</span>'
                        >
                          Spanish
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <small className="form-text text-muted">3. Select a section</small>
                    <div>
                      <select className="selectpicker show-menu-arrow" name="section" id="section">
                        <option value="1">Section 1</option>
                        <option value="2">Section 2</option>
                        <option value="3">Section 3</option>
                        <option value="4">Section 4</option>
                        <option value="5">Section 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <small className="form-text text-muted">4. (Optional) Product name</small>
                    <div>
                      <input placeholder="Product name" className="form-control input-lg" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="reset-comment-section">
                      <button className="btn btn-lg btn-default">
                        <i className="fa fa-refresh" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </header>
            <section className="comments">
              <div id="fomments" />
            </section>
            <InstallationInstructions />
          </section>
        </section>
      </section>
    );
  }
}

export default ChooseCommentSection;
