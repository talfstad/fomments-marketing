import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PrivacyProtection from './privacy-protection';
import ExpectationsOfUse from './expectations-of-use';

class OperationTabs extends Component {
  componentDidMount() {
    const { location } = this.props;
    const { state } = location;
    if (!_.isEmpty(state)) {
      const { tab } = state;
      $(this.tabs).find(`a[href="#${tab}"]`).tab('show');
      $(this.tabContent).find(`div#${tab}`).addClass('in active');
    } else {
      // default to privacy protection
      $(this.tabContent).find('div#privacy-protection').addClass('in active');
    }
  }

  render() {
    return (
      <section className="">
        <div className="col-sm-3">
          <nav>
            <ul
              ref={(c) => { this.tabs = c; }}
              className="nav nav-stacked nav-pills"
            >
              <li className="active">
                <a data-toggle="pill" href="#privacy-protection">
                  <i className="fa fa-key" />
                  <span>
                    Your Privacy Protection
                  </span>
                </a>
              </li>
              <li>
                <a data-toggle="pill" href="#expectations-of-use">
                  <i className="fa fa-shopping-cart" />
                  <span>
                    Expectations of Use
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-9">
          <div
            ref={(c) => { this.tabContent = c; }}
            className="tab-content"
          >
            <div id="privacy-protection" className="tab-pane fade">
              <PrivacyProtection />
            </div>
            <div id="expectations-of-use" className="tab-pane fade">
              <ExpectationsOfUse />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

OperationTabs.propTypes = {
  location: PropTypes.shape({}),
};

OperationTabs.defaultProps = {
  location: {},
};

export default withRouter(OperationTabs);
