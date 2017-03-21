import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/elegant.css';

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
      verticals,
      activeState,
    } = this.props;

    const { sectionId } =
      verticals[activeState.vertical]
        .sections[activeState.section]
        .languages[activeState.language];
    const productName = activeState.productName;
    const productAttribute =
      (productName.replace(/ /g, '').length > 0 ? ` product-name="${productName}"` : '');

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
    return (
      <textarea ref={(c) => { this.editor = c; }} />
    );
  }
}

InstallationInstructions.propTypes = {
  verticals: PropTypes.shape({}),
  activeState: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  ...state.sectionControls,
});

export default connect(mapStateToProps)(InstallationInstructions);
