import React, { Component, PropTypes } from 'react';
import InstallationInstructions from '/imports/ui/components/installation-instructions';

export class ChooseCommentSectionComponent extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker({
      style: 'btn-default btn-lg',
    });

    $('.selectpicker').on('hidden.bs.select', (e) => {
      // blur the selects after they are selected
      $(e.currentTarget).parent().find('button.dropdown-toggle').blur();
    });

    const {
      loadFommentSection,
      activeState,
      verticals,
    } = this.props;

    const { demoId } = verticals[activeState.vertical]
      .sections[activeState.section]
      .languages[activeState.language];

    loadFommentSection(demoId, this.productNameInput.value);
  }

  componentDidUpdate() {
    $('.selectpicker').selectpicker('refresh');
  }

  handleVerticalChange(e) {
    e.preventDefault();
    const vertical = e.target.value;

    const {
      updateCommentControls,
      loadFommentSection,
      activeState,
      verticals,
    } = this.props;

    const [firstSection] = Object.keys(verticals[activeState.vertical].sections);

    updateCommentControls({
      vertical,
      section: firstSection,
    });

    const { demoId } = verticals[vertical]
      .sections[firstSection]
      .languages[activeState.language];
    loadFommentSection(demoId, this.productNameInput.value);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    const language = e.target.value;

    const {
      updateCommentControls,
      loadFommentSection,
      activeState,
      verticals,
    } = this.props;

    const [firstSection] = Object.keys(verticals[activeState.vertical].sections);
    updateCommentControls({
      language,
      section: firstSection,
    });

    const { demoId } = verticals[activeState.vertical]
      .sections[firstSection]
      .languages[language];
    loadFommentSection(demoId, this.productNameInput.value);
  }

  handleSectionChange(e) {
    e.preventDefault();
    const section = e.target.value;

    const {
      updateCommentControls,
      loadFommentSection,
      activeState,
      verticals,
    } = this.props;

    updateCommentControls({ section });

    const { demoId } = verticals[activeState.vertical]
      .sections[section]
      .languages[activeState.language];
    loadFommentSection(demoId, this.productNameInput.value);
  }

  handleProductNameChange(e) {
    e.preventDefault();
    const {
      updateCommentControls,
      changeFommentSectionProductName,
    } = this.props;
    const productName = e.target.value;
    updateCommentControls({ productName });
    changeFommentSectionProductName(productName);
  }

  handleResetCommentSection(e) {
    e.preventDefault();
    const {
      loadFommentSection,
      verticals,
      activeState,
    } = this.props;

    const { demoId } = verticals[activeState.vertical]
      .sections[activeState.section]
      .languages[activeState.language];

    localStorage.removeItem(demoId);
    loadFommentSection(demoId, this.productNameInput.value);
  }

  buildVerticalSelect() {
    const {
      activeState,
      verticals,
    } = this.props;

    const verticalOptions = () =>
      Object.keys(verticals)
        .sort((a, b) => {
          const nameA = verticals[a].name.toUpperCase(); // ignore upper and lowercase
          const nameB = verticals[b].name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
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
            <InstallationInstructions />
          </section>
        </section>
      </section>
    );
  }
}

ChooseCommentSectionComponent.propTypes = {
  changeFommentSectionProductName: PropTypes.func,
  updateCommentControls: PropTypes.func,
  loadFommentSection: PropTypes.func,
  verticals: PropTypes.shape({}),
  languages: PropTypes.shape({}),
  activeState: PropTypes.shape({}),
};
