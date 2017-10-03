import React, { Component, PropTypes } from 'react';
import { DEMO_USER_ID } from '/imports/actions/fomments/message';

import AddToLandingPageComponent from './add-to-landing-page';

export class ChooseCommentSectionComponent extends Component {
  componentDidMount() {
    this.props.loadUser();
    this.props.loadSections();
    $('.selectpicker').selectpicker({
      style: 'btn-default btn-lg',
    });

    $('.selectpicker').on('hidden.bs.select', (e) => {
      // blur the selects after they are selected
      $(e.currentTarget).parent().find('button.dropdown-toggle').blur();
    });
  }

  componentWillReceiveProps(nextProps) {
    const currentSection = this.props.activeState.section;
    const nextSection = nextProps.activeState.section;

    if (currentSection._id !== nextSection._id) {
      const { loadFommentSection } = this.props;
      loadFommentSection(nextSection.sectionId, this.productNameInput.value);
    }
  }

  componentDidUpdate() {
    $('.selectpicker').selectpicker('refresh');
  }

  handleVerticalChange(e) {
    e.preventDefault();
    const vertical = e.target.value;

    const {
      updateActiveState,
    } = this.props;

    updateActiveState({
      vertical,
    });
  }

  handleLanguageChange(e) {
    e.preventDefault();
    const language = e.target.value;

    const {
      updateActiveState,
    } = this.props;

    updateActiveState({
      language,
    });
  }

  handleSectionChange(e) {
    e.preventDefault();
    const sectionId = e.target.value;

    const {
      activeSections,
      updateActiveState,
    } = this.props;

    const section = activeSections.find(val => val._id === sectionId);
    updateActiveState({ section });
  }

  handleProductNameChange(e) {
    e.preventDefault();
    const {
      updateActiveState,
      changeFommentSectionProductName,
    } = this.props;
    const productName = e.target.value;
    updateActiveState({ productName });
    changeFommentSectionProductName(productName);
  }

  handleResetCommentSection(e) {
    e.preventDefault();
    const {
      loadFommentSection,
      activeState,
    } = this.props;

    const { sectionId } = activeState.section;

    localStorage.removeItem(`${DEMO_USER_ID}-${sectionId}`);
    loadFommentSection(sectionId, this.productNameInput.value);
  }

  buildVerticalSelect() {
    const {
      activeState,
      verticals,
    } = this.props;
    const { vertical } = activeState;

    const verticalOptions = () =>
      Object.keys(verticals)
        .map(
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
        defaultValue={vertical}
      >
        {verticalOptions()}
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
          />,
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

  buildSectionSelect() {
    const {
      activeSections,
      activeState,
    } = this.props;

    const sectionOptions = () =>
      activeSections.map(section =>
        <option
          key={section._id}
          value={section._id}
        >
          {section.name}
        </option>);

    return (
      <select
        defaultValue={activeState.section._id}
        onChange={e => this.handleSectionChange(e)}
        className="selectpicker show-menu-arrow"
        name="section"
        id="section"
      >
        {sectionOptions()}
      </select>
    );
  }

  render() {
    const { handleScrollOpenSignin } = this.props;

    return (
      <section id="choose-comment-section">
        <section className="stacked-container container-lg">
          <h2>
            <i className="fa fa-commenting-o section-icon" />
            Choose a comment section.
          </h2>
          <p className="common-body-text">
            Follow these steps to configure a custom comment section.
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
                        ref={(o) => { this.productNameInput = o; }}
                        onChange={e => this.handleProductNameChange(e)}
                        placeholder="Product name"
                        className="form-control input-lg"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="reset-comment-section">
                      <button
                        onClick={e => this.handleResetCommentSection(e)}
                        className="btn btn-lg btn-default"
                      >
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
            <AddToLandingPageComponent
              handleScrollOpenSignin={handleScrollOpenSignin}
            />
          </section>
        </section>
      </section>
    );
  }
}

ChooseCommentSectionComponent.propTypes = {
  handleScrollOpenSignin: PropTypes.func,
  changeFommentSectionProductName: PropTypes.func,
  activeSections: PropTypes.arrayOf(PropTypes.object),
  updateActiveState: PropTypes.func,
  verticals: PropTypes.shape({}),
  loadFommentSection: PropTypes.func,
  loadSections: PropTypes.func,
  loadUser: PropTypes.func,
  languages: PropTypes.shape({}),
  activeState: PropTypes.shape({
    section: PropTypes.shape({}),
  }),
};
