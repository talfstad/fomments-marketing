import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as loginActions from '/imports/actions/user/login';

import SubscribeToFommentsForm from './subscribe-to-fomments';
import UnsubscribeFromFommentsForm from './unsubscribe-from-fomments';
import ReactivateSubscription from './reactivate-subscription';

class ManageSubscription extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(this.oldPasswordInput).focus();
    });
  }

  componentWillUnmount() {
    const { resetChangePasswordErrors } = this.props;
    resetChangePasswordErrors();
  }

  getErrorForField(field) {
    const { changePasswordErrors } = this.props;
    const error = changePasswordErrors.find(o => o.name === field);
    if (error) {
      if (error.type === 'success') {
        return <small className="form-text text-success text-muted">{error.message}</small>;
      }
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    // Intent: if no error, always show confirm password helper
    if (field === 'confirm-password') {
      return <small className="form-text text-muted">Please confirm your new password</small>;
    }
    return <noscript />;
  }

  render() {
    const { purchases } = this.props;

    const getAccountSubscriptionOptions = () => {
      if (purchases.canceled || _.isEmpty(purchases)) {
        return <SubscribeToFommentsForm />;
      } else if (purchases.pendingCancelation) {
        return <ReactivateSubscription />;
      }
      return <UnsubscribeFromFommentsForm />;
    };

    return (
      <div className="manage-subscription-form">
        <p>Manage Subscription</p>
        { getAccountSubscriptionOptions() }
      </div>
    );
  }
}

ManageSubscription.propTypes = {
  purchases: PropTypes.shape({}),
  changePasswordErrors: PropTypes.arrayOf(PropTypes.object),
  resetChangePasswordErrors: PropTypes.func,
};

ManageSubscription.defaultProps = {
  purchases: {},
  changePasswordErrors: [],
  resetChangePasswordErrors: null,
};

const actions = {
  changePassword: loginActions.changePassword,
  resetChangePasswordErrors: loginActions.resetChangePasswordErrors,
};

const mapStateToProps = state => ({
  changePasswordErrors: state.user.changePassword.errors,
  purchases: state.purchases.purchases,
});

export default connect(mapStateToProps, actions)(ManageSubscription);
