import React, { Component } from 'react';
import ChangePassword from './change-password';
import ManageSubscription from './manage-subscription';

class AccountTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: '#purchases',
    };
  }

  componentDidMount() {
    $(this.tabs).on('shown.bs.tab', (e) => {
      const currentTab = $(e.target).attr('href');
      this.setCurrentTab(currentTab);
    });
  }

  setCurrentTab(tab) {
    this.setState({ currentTab: tab });
  }

  render() {
    return (
      <section className="">
        <div className="col-sm-3">
          <nav>
            <ul
              className="nav nav-stacked nav-pills"
              ref={(c) => { this.tabs = c; }}
            >
              <li className="active">
                <a data-toggle="pill" href="#change-password">
                  <i className="fa fa-key" />
                  <span>
                    Change Password
                  </span>
                </a>
              </li>
              <li>
                <a data-toggle="pill" href="#subscription">
                  <i className="fa fa-shopping-cart" />
                  <span>
                    Manage Subscription
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-9">
          <div className="tab-content">
            <div id="change-password" className="tab-pane fade in active">
              <ChangePassword />
            </div>
            <div id="subscription" className="tab-pane fade">
              <ManageSubscription />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AccountTabs;
