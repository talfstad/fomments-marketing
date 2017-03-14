import React, { Component, PropTypes } from 'react';
import CodeMirror from 'codemirror';
import { connect } from 'react-redux';

// required for syntax highlighting
require('../../node_modules/codemirror/mode/xml/xml');

// required codemirror css
require('../../node_modules/codemirror/lib/codemirror.css');
require('../../node_modules/codemirror/theme/elegant.css');

class InstallationInstructions extends Component {
  componentDidMount() {
    this.initCodeMirror();
  }

  componentDidUpdate() {
    this.updateCodeMirrorValueFromProps();
  }

  updateCodeMirrorValueFromProps() {
    const {
      verticals,
      activeState,
    } = this.props;

    const sectionId =
      verticals[activeState.vertical]
        .sections[activeState.section]
        .languages[activeState.language];

    // set new value and refresh
    const codeMirrorValue =
`<!-- Step 1: Place this code on your landing page
where you want comments to appear. -->

<div id="fomments" data-section-id="${sectionId}" product-name="skin cream"></div>

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
      <section className="installation-instructions constainer-lg">
        <h2><i className="fa fa-tachometer" /> Landing Page Installation</h2>
        <nav>
          <ul className="nav nav-stacked nav-pills">
            <li className="active">
              <a data-toggle="pill" href="#editor">
                <i className="fa fa-code" />
                <span>
                  Code
                </span>
              </a>
            </li>
            <li>
              <a data-toggle="pill" href="#help-guide">
                <i className="fa fa-video-camera" />
                <span>
                  15 Second Video
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="tab-content">
          <div id="editor" className="tab-pane fade in active">
            <textarea ref={(c) => { this.editor = c; }} />
          </div>
          <div id="help-guide" className="tab-pane fade">
            <div className="wistia_embed wistia_async_e47iwqtqdl" style={{ height: '413px', width: '735px' }}>&nbsp;</div>
          </div>
        </div>
      </section>
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
