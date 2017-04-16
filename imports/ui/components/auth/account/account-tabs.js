import React, { Component, PropTypes } from 'react';

class AccountTabs extends Component {
  render() {
    return (
      <section className="">
        <div className="col-sm-3">
          <nav>
            <ul className="nav nav-stacked nav-pills">
              <li className="active">
                <a data-toggle="pill" href="#purchases">
                  <i className="fa fa-shopping-cart" />
                  <span>
                    Purchases
                  </span>
                </a>
              </li>
              <li>
                <a data-toggle="pill" href="#change-password">
                  <i className="fa fa-key" />
                  <span>
                    Change Password
                  </span>
                </a>
              </li>
              <li>
                <a data-toggle="pill" href="#support">
                  <i className="fa fa-phone" />
                  <span>
                    Support
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-9">
          <div className="tab-content">
            <div id="purchases" className="tab-pane fade in active">
              <h2>purchases</h2>
            </div>
            <div id="change-password" className="tab-pane fade">
              <div>
                <h2>Change Password</h2>
              </div>
            </div>
            <div id="support" className="tab-pane fade">
              <div>
                <h2>suppport</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AccountTabs;
