import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { unsubscribeFromFommentsAction } from '/imports/actions/products/purchases/manage';
import * as loginActions from '/imports/actions/user/login';

// 4. need to subscribe if logged in but not subscribed.
//
// 5. need to set up a rest endpoint to consume a stripe webhook and deploy
// on lambda. this needs to update db to canceled when it is triggered.
// 6. need to update fomments-app to not show a section if account not activated
class UnsubscribeFromFommentsForm extends Component {
  handleUnsubscribe(e) {
    const { purchases } = this.props;
    e.preventDefault();
    const { unsubscribeFromFomments } = this.props;
    unsubscribeFromFomments(purchases);
  }

  render() {
    return (
      <div className="f-container">
        Current Subscription: <strong>Active</strong>
        <div className="cancel-box clearfix">
          <div className="fl" style={{ width: '265px' }}>
            <button
              onClick={e => this.handleUnsubscribe(e)}
              className="red-bg signup-button common-button"
            >
              <i className="fa fa-times-circle mr5" />Cancel Subscription
            </button>
          </div>
          <div className="fl" style={{ width: '450px' }}>
            <small>Upon clicking your subscription cancelation will begin processing.
            Please share with us why you are leaving if you haven&apos;t already.
            We really do appreciate your business and hope you the best!
            </small>
          </div>
        </div>
      </div>
    );
  }
}

UnsubscribeFromFommentsForm.propTypes = {
  unsubscribeFromFomments: PropTypes.func,
  purchases: PropTypes.shape({}),
};

UnsubscribeFromFommentsForm.defaultProps = {
  unsubscribeFromFomments: null,
  purchases: {},
};

const actions = {
  changePassword: loginActions.changePassword,
  resetChangePasswordErrors: loginActions.resetChangePasswordErrors,
  unsubscribeFromFomments: unsubscribeFromFommentsAction,
};

const mapStateToProps = state => ({
  changePasswordErrors: state.user.changePassword.errors,
  purchases: state.purchases.purchases,
});

export default connect(mapStateToProps, actions)(UnsubscribeFromFommentsForm);
