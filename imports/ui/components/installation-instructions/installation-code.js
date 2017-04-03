import React, { Component, PropTypes } from 'react';

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

  buildPurchaseArea() {
    const { activeState } = this.props;
    const { section } = activeState;

    const englishSectionContent = () => (
      <div>
        <div className="col-sm-1 lock-box">
          <i className="fa fa-unlock" />
        </div>
        <div className="col-sm-11">
          <p>
            This section is unlocked. English sections for all verticals are free to use.
          </p>
        </div>
      </div>
    );

    const purchasedSectionContent = () => (
      <div>
        <div className="col-sm-1 lock-box">
          <i className="fa fa-unlock" />
        </div>
        <div className="col-sm-11">
          <p>
            This section has been unlocked and is now ready to use.
          </p>
        </div>
      </div>
    );

    const purchaseFormSectionContent = () => (
      <div>
        <div className="col-sm-1 unlock-box">
          <i className="fa fa-lock" />
        </div>
        <div className="col-sm-11">
          <p>
            Instant unlock $97
            use on all landing pages
            no limitation
            <button className="common-button purchase-section-button">
              Purchase
            </button>
          </p>
        </div>
      </div>
    );

    if (section.language === 'english') {
      return englishSectionContent();
    }

    if (section.purchase) {
      return purchasedSectionContent();
    }

    return purchaseFormSectionContent();
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
      <div>
        <textarea ref={(c) => { this.editor = c; }} />
        <div className="row info-box">
          {this.buildPurchaseArea()}
        </div>
      </div>
    );
  }
}

InstallationInstructions.propTypes = {
  activeState: PropTypes.shape({}),
};

export default InstallationInstructions;
