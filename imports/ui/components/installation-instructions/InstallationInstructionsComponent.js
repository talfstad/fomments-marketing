import React, { Component, PropTypes } from 'react';

import PurchaseSection from './purchase-section';
import InstallationCodeComponent from './InstallationCodeComponent';
import Signup from '../signup';

export class InstallationInstructionsComponent extends Component {

  buildInstallationSection() {
    const {
      verticals,
      activeState,
      user,
    } = this.props;
    const {
      price,
    } = verticals[activeState.vertical]
          .sections[activeState.section]
          .languages[activeState.language];

    if (price > 0) {
      // if (user) {
        // Logged in, if showing we do not have the product
        return <PurchaseSection />;
      // }
      // Not logged in, show create account
      // return <Signup />;
    }

    return (
      <InstallationCodeComponent
        verticals={verticals}
        activeState={activeState}
      />
    );
  }

  render() {
    return (
      <section className="installation-instructions constainer-lg">
        <h2><i className="fa fa-tachometer" /> Landing Page Installation</h2>
        <nav>
          <ul className="nav nav-stacked nav-pills">
            <li className="active">
              <a data-toggle="pill" href="#installation">
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
          <div id="installation" className="tab-pane fade in active">
            {this.buildInstallationSection()}
          </div>
          <div id="help-guide" className="tab-pane fade">
            <div className="wistia_embed wistia_async_e47iwqtqdl" style={{ height: '413px', width: '735px' }}>&nbsp;</div>
          </div>
        </div>
      </section>
    );
  }
}

InstallationInstructionsComponent.propTypes = {
  verticals: PropTypes.shape({}),
  activeState: PropTypes.shape({
    price: PropTypes.number,
  }),
  user: PropTypes.shape({}),
};
