import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CopyToClipboard from 'react-copy-to-clipboard';

import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/elegant.css';

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
        <img className="clippy" src="/images/clippy-blue.svg" width="13" alt="Copy to clipboard" /> Copy Code
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
      user,
      purchases,
    } = this.props;
    const { section } = activeState;
    const { productName } = activeState;
    const productAttribute =
      (productName.replace(/ /g, '').length > 0 ? ` data-product-name="${productName}"` : '');

    // Intent: add overlay to make sure anytime the value has a 'join-to-unlock'
    // keyword, we blur it!
    this.codemirror.addOverlay({
      token(stream) {
        if (stream.match('join-to-unlock')) {
          return 'blur-text';
        }
        stream.next();
        return null;
      },
    });

    let sectionId = 'join-to-unlock';
    if (!_.isEmpty(purchases)) {
      sectionId = `${user._id}-${section.sectionId}`;
    }
    const { FOMMENTS_CDN } = Meteor.settings.public;

    // set new value and refresh
    const codeMirrorValue =
`<!-- Step 1: Place this code on your landing page
where you want comments to appear. -->

<div id="fomments" data-section-id="${sectionId}"${productAttribute}></div>

<!-- Step 2: Include fomments on your page once,
ideally right before the closing </body> tag. -->

<script type="text/javascript" src="${FOMMENTS_CDN}/fomments.min.js"></script>`;

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
      purchases,
      handleScrollOpenSignin,
      user,
    } = this.props;
    const { section } = activeState;
    const vertical = section.vertical ? (verticals[section.vertical]).name : '';
    const flag = section.language ? (languages[section.language]).flag : '';

    return (
      <section className="installation-instructions constainer-lg">
        <h2><i className="fa fa-tachometer" /> add it to your landing page.</h2>
        <p className="common-body-text">Just a quick copy &amp; paste where your old comments used to be.</p>
        <div className="installation-code-container">
          <div className="clearfix installation-code-header">
            <div className="pull-left title">
              <span className={`flag-icon ${flag}`} />
              <span className="capitialize"> {vertical} </span>
              &middot; {section.name} &middot; <span className="capitialize">{section.language}</span>
            </div>
            { _.isEmpty(purchases) ?
              <button
                className="btn btn-default pull-right"
                onClick={e => handleScrollOpenSignin(e)}
              >
                {_.has(user, '_id') ? <span>Subscribe to Unlock</span> : <span>Sign in </span> }
                <i className="ml5 fa fa-arrow-up" />
              </button>
              :
              <CopyToClipboard
                text={this.getCodeMirrorValue()}
                onCopy={() => this.handleCopyToClipboard()}
              >
                <button className="btn btn-default pull-right">
                  {this.buildCopyToClipboardButton()}
                </button>
              </CopyToClipboard>
            }
          </div>
          <div>
            <textarea ref={(c) => { this.editor = c; }} />
          </div>
        </div>
      </section>
    );
  }
}

InstallationInstructions.propTypes = {
  purchases: PropTypes.arrayOf(PropTypes.object),
  handleScrollOpenSignin: PropTypes.func,
  user: PropTypes.shape({}),
  activeState: PropTypes.shape({}),
  languages: PropTypes.shape({}),
  verticals: PropTypes.shape({}),
};

InstallationInstructions.defaultProps = {
  purchases: [],
  handleScrollOpenSignin: null,
  user: {},
  activeState: {},
  languages: {},
  verticals: {},
};

const mapStateToProps = state => ({
  ...state.sections,
  user: state.user,
  purchases: state.purchases,
});

export default connect(mapStateToProps)(InstallationInstructions);
