import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import InstallationInstructions from './installation-instructions';
import * as actions from '../actions/index';

require('../../node_modules/bootstrap-select/dist/js/bootstrap-select.js');

class ChooseCommentSection extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker({
      style: 'btn-default btn-lg',
    });
  }

  componentDidUpdate() {
    $('.selectpicker').selectpicker('refresh');
  }

  handleVerticalChange(e) {
    e.preventDefault();
    const { updateCommentControls } = this.props;
    const vertical = e.target.value;
    // Vertical change resets section to first
    updateCommentControls({
      vertical,
      section: 1,
    });
  }

  handleLanguageChange(e) {
    e.preventDefault();
    const { updateCommentControls } = this.props;
    const language = e.target.value;
    updateCommentControls({ language });
  }

  handleSectionChange(e) {
    e.preventDefault();
    const { updateCommentControls } = this.props;
    const section = e.target.value;
    updateCommentControls({ section });
  }

  handleProductNameChange(e) {
    e.preventDefault();
    const { updateCommentControls } = this.props;
    const productName = e.target.value;
    updateCommentControls({ productName });
  }

  buildVerticalSelect() {
    const {
      activeState,
      verticals,
    } = this.props;

    const verticalOptions = () =>
      Object.keys(verticals).map(
        key =>
          <option
            key={key}
            value={key}
          >
            {verticals[key].name}
          </option>,
      );

    return (
      <select
        onChange={e => this.handleVerticalChange(e)}
        className="selectpicker show-menu-arrow"
        defaultValue={activeState.vertical}
      >
        {verticalOptions()}
      </select>
    );
  }

  buildSectionSelect() {
    const {
      activeState,
      verticals,
    } = this.props;
    const activeLanguage = activeState.language;
    const { sections } = verticals[activeState.vertical];

    const sectionOptions = () =>
      Object.keys(sections).filter(key =>
        sections[key].languages[activeLanguage])
          .map(key =>
            <option
              key={key}
              value={key}
            >
            Section {key}
            </option>);

    return (
      <select
        onChange={e => this.handleSectionChange(e)}
        className="selectpicker show-menu-arrow"
        name="section"
        id="section"
      >
        {sectionOptions()}
      </select>
    );
  }

  buildLanguageSelect() {
    const {
      activeState,
      languages,
    } = this.props;

    const languageOptions = () =>
      Object.keys(languages).map(
        key =>
          <option
            key={key}
            value={key}
            data-content={`<span class="flag-icon ${languages[key].flag}">${languages[key].name}</span>`}
          >
            English
          </option>,
      );

    return (
      <select
        onChange={e => this.handleLanguageChange(e)}
        defaultValue={activeState.language}
        className="selectpicker show-menu-arrow"
        name="language"
        id="language"
      >
        {languageOptions()}
      </select>
    );
  }

  render() {
    return (
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
                <form className="form-inline section-control">
                  <div className="form-group">
                    <small className="form-text text-muted">1. Select a vertical</small>
                    <div>
                      {this.buildVerticalSelect()}
                    </div>
                  </div>
                  <div className="form-group">
                    <small className="form-text text-muted">2. Select a language</small>
                    <div>
                      {this.buildLanguageSelect()}
                    </div>
                  </div>

                  <div className="form-group">
                    <small className="form-text text-muted">3. Select a section</small>
                    <div>
                      {this.buildSectionSelect()}
                    </div>
                  </div>
                  <div className="form-group">
                    <small className="form-text text-muted">4. (Optional) Product name</small>
                    <div>
                      <input
                        onChange={e => this.handleProductNameChange(e)}
                        placeholder="Product name"
                        className="form-control input-lg"
                      />
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

ChooseCommentSection.propTypes = {
  updateCommentControls: PropTypes.func,
  verticals: PropTypes.shape({}),
  languages: PropTypes.shape({}),
  activeState: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  ...state.sectionControls,
});

export default connect(mapStateToProps, actions)(ChooseCommentSection);
