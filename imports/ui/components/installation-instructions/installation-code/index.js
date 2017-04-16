import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/elegant.css';

import PurchaseSection from '../../purchase-section';
import FeatureHighlights from '../feature-highlights';

class InstallationInstructions extends Component {
  componentDidMount() {
    this.initCodeMirror();
  }

  componentDidUpdate() {
    this.updateCodeMirrorValueFromProps();
  }

  componentWillUnmount() {
    this.codemirror.toTextArea();
  }

  updateCodeMirrorValueFromProps() {
    const {
      activeState,
    } = this.props;
    const { section } = activeState;
    const { productName } = activeState;
    const productAttribute =
      (productName.replace(/ /g, '').length > 0 ? ` product-name="${productName}"` : '');

    // Intent: add overlay to make sure anytime the value has a 'purchase-to-unlock'
    // keyword, we blur it!
    this.codemirror.addOverlay({
      token(stream) {
        if (stream.match('purchase-to-unlock')) {
          return 'blur-text';
        }
        stream.next();
        return null;
      },
    });

    let { sectionId } = section;
    if (!section.purchase && section.language !== 'english') {
      sectionId = 'purchase-to-unlock';
    }
    // set new value and refresh
    const codeMirrorValue =
`<!-- Step 1: Place this code on your landing page
where you want comments to appear. -->

<div id="fomments" data-section-id="${sectionId}"${productAttribute}></div>

<!-- Step 2: Include fomments on your page once,
ideally right after the opening <body> tag. -->

<script type="text/javascript" src="http://localhost:8080/fomments.min.js"></script>`;

    this.codemirror.setValue(codeMirrorValue);

    setTimeout(() => {
      this.codemirror.refresh();
    }, 1000);
  }

  initCodeMirror() {
    // Detect tab switching, if section code init code mirror
    this.codemirror = CodeMirror.fromTextArea(this.editor, {
      lineNumbers: true,
      theme: 'elegant',
      mode: 'text/html',
      htmlMode: true,
      readOnly: true,
    });

    this.updateCodeMirrorValueFromProps();
  }

  render() {
    const {
      activeState,
      languages,
      verticals,
    } = this.props;
    const { section } = activeState;
    const vertical = section.vertical ? (verticals[section.vertical]).name : '';
    const flag = section.language ? (languages[section.language]).flag : '';

    return (
      <div>
        <div className="installation-code-header">
          <p>
            <span className={`flag-icon ${flag}`} />
            <span className="capitialize"> {vertical} </span>
            {section.name} in
            <span className="capitialize"> {section.language}</span>
          </p>
        </div>
        <div>
          <textarea ref={(c) => { this.editor = c; }} />
        </div>
        <div className="row">
          <div className="col-sm-6 code-col-section">
            <FeatureHighlights section={section} />
          </div>
          <div className="col-sm-6 code-col-section">
            <PurchaseSection />
          </div>
        </div>
      </div>
    );
  }
}

InstallationInstructions.propTypes = {
  activeState: PropTypes.shape({}),
  languages: PropTypes.shape({}),
  verticals: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  ...state.sections,
});

export default connect(mapStateToProps)(InstallationInstructions);
