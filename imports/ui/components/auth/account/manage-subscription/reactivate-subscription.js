import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { reactivateSubscriptionAction } from '/imports/actions/products/purchases/manage';
import * as loginActions from '/imports/actions/user/login';

class ReactivateSubscriptionForm extends Component {
  handleReactivateSubscription(e) {
    const {
      reactivateSubscription,
      purchases,
    } = this.props;
    reactivateSubscription(purchases);
    e.preventDefault();
  }

  render() {
    const { purchases } = this.props;
    const { currentPeriodEnd } = purchases;

    return (
      <div className="f-container">
        Current Subscription: <strong>Pending Cancelation</strong>
        <div className="cancel-box clearfix">
          <div className="fl" style={{ width: '305px' }}>
            <button
              onClick={e => this.handleReactivateSubscription(e)}
              className="signup-button common-button"
            >
              <i className="fa fa-times-circle mr5" />Reactivate Subscription
            </button>
          </div>
          <div className="fl" style={{ width: '450px' }}>
            <small>
              <strong>It&apos;s not too late!</strong> You can reactivate your subscription
              seamlessly until { moment(currentPeriodEnd).format('dddd MMMM Do') }. If
              you do not, no further charges will be inquired. Thank you for your business!
            </small>
          </div>
        </div>
      </div>
    );
  }
}

ReactivateSubscriptionForm.propTypes = {
  reactivateSubscription: PropTypes.func,
  purchases: PropTypes.shape({}),
};

ReactivateSubscriptionForm.defaultProps = {
  reactivateSubscription: null,
  purchases: {},
};

const actions = {
  changePassword: loginActions.changePassword,
  resetChangePasswordErrors: loginActions.resetChangePasswordErrors,
  reactivateSubscription: reactivateSubscriptionAction,
};

const mapStateToProps = state => ({
  changePasswordErrors: state.user.changePassword.errors,
  purchases: state.purchases.purchases,
});

export default connect(mapStateToProps, actions)(ReactivateSubscriptionForm);
