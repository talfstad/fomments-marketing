import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CopyToClipboard from 'react-copy-to-clipboard';

import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/elegant.css';

import PurchaseSection from '../../purchase-section';
import FeatureHighlights from '../feature-highlights';

class InstallationInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  componentDidMount() {
    this.initCodeMirror();
  }

  componentDidUpdate() {
    this.updateCodeMirrorValueFromProps();
  }

  componentWillUnmount() {
    this.codemirror.toTextArea();
  }

  setCopied(copied) {
    this.setState({ copied });
  }

  getCodeMirrorValue() {
    if (this.codemirror) {
      return this.codemirror.getValue();
    }
    return '';
  }

  buildCopyToClipboardButton() {
    const { copied } = this.state;
    if (copied) {
      return (
        <span className="green">
          <img src="/images/clippy-green.svg" width="13" alt="Copy to clipboard" /> Copied!
        </span>
      );
    }

    return (
      <span>
        <img className="clippy" src="/images/clippy-blue.svg" width="13" alt="Copy to clipboard" /> Clipboard
      </span>
    );
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

  handleCopyToClipboard() {
    const { copied } = this.state;

    if (!copied) {
      this.setCopied(true);

      setTimeout(() => {
        this.setCopied(false);
      }, 4000);
    }
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
        <div className="clearfix installation-code-header">
          <div className="pull-left title">
            <span className={`flag-icon ${flag}`} />
            <span className="capitialize"> {vertical} </span>
            &middot; {section.name} &middot; <span className="capitialize">{section.language}</span>
          </div>
          <CopyToClipboard
            text={this.getCodeMirrorValue()}
            onCopy={() => this.handleCopyToClipboard()}
          >
            <button className="btn btn-default pull-right">
              {this.buildCopyToClipboardButton()}
            </button>
          </CopyToClipboard>
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
