import React, { Component } from 'react';
import CodeMirror from 'codemirror';

require('../../node_modules/codemirror/lib/codemirror.css');

class InstallationInstructions extends Component {
  componentDidMount() {
    this.initCodeMirror();
  }

  initCodeMirror() {
    // Detect tab switching, if section code init code mirror
    CodeMirror.fromTextArea(this.editor, {
      lineNumbers: true,
      mode: 'htmlmixed',
    });
  }

  render() {
    return (
      <section className="installation-instructions constainer-lg">
        <nav>
          <ul className="nav nav-stacked nav-pills">
            <li className="active">
              <a data-toggle="pill" href="#editor">
                <i className="fa fa-code" />Section Code
              </a>
            </li>
            <li>
              <a data-toggle="pill" href="#help-guide">
                <span><i className="fa fa-question-circle-o" />Help Guide</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="tab-content">
          <div id="editor" className="tab-pane fade in active">
            <textarea ref={(c) => { this.editor = c; }} />
          </div>
          <div id="help-guide" className="tab-pane fade">
            <p>remove me</p>
          </div>
        </div>
      </section>
    );
  }
}

export default InstallationInstructions;
