import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as loginActions from '/imports/actions/user/login';

// you really do want a webhook because if a payment fails then
// we will want to cancel the subscription in fomments
// when we get that event that its canceled we can then add a canceled
// attribute to the purchase.
// then when we cancel the subscription we can just do period end.
// 1. so cancel button -> cancel subsscription at period end
// 2. show that it's active until <DATE>
// 3. Allow re-activate button to be clicked that can re-activate sub
//    while not canceled.
// 4. webook catches the cancel event and adds canceled attribute to the purchase
//    which then removes the purchase. that will show the subscribe form
class UnsubscribeFromFommentsForm extends Component {
  render() {
    return (
      <div className="f-container">
        Current Subscription: <strong>Active</strong>
        <div className="cancel-box clearfix">
          <div className="fl" style={{ width: '265px' }}>
            <a href="" className="red-bg signup-button common-button">
              <i className="fa fa-times-circle mr5"></i>Cancel Subscription
            </a>
            </div>
            <div className="fl" style={{ width: '450px' }}>
            <small>Upon clicking your subscription cancelation will begin processing.
            Please share with us why you are leaving if you haven&apos;t already.
            We really do appreciate your business and hope you the best!</small>
          </div>
        </div>
      </div>
    );
  }
}

UnsubscribeFromFommentsForm.propTypes = {
};

const actions = {
  changePassword: loginActions.changePassword,
  resetChangePasswordErrors: loginActions.resetChangePasswordErrors,
};

const mapStateToProps = state => ({
  changePasswordErrors: state.user.changePassword.errors,
});

export default connect(mapStateToProps, actions)(UnsubscribeFromFommentsForm);
