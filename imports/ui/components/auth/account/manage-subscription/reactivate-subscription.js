import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import * as loginActions from '/imports/actions/user/login';

class UnsubscribeFromFommentsForm extends Component {
  componentDidMount() {

  }

  render() {
    const { purchases } = this.props;
    const { currentPeriodEnd } = purchases;

    return (
      <div className="f-container">
        Current Subscription: <strong>Pending Cancelation</strong>
        <div className="cancel-box clearfix">
          <div className="fl" style={{ width: '305px' }}>
            <button className="signup-button common-button">
              <i className="fa fa-times-circle mr5" />Reactivate Subscription
            </button>
          </div>
          <div className="fl" style={{ width: '450px' }}>
            <small>
              <strong>It&apos;s not too late!</strong> You can reactivate your subscription
              seamlessly until { moment(currentPeriodEnd).format('dddd MMMM Do') }.
            </small>
          </div>
        </div>
      </div>
    );
  }
}

UnsubscribeFromFommentsForm.propTypes = {
  purchases: PropTypes.shape({}),
};

UnsubscribeFromFommentsForm.defaultProps = {
  purchases: {},
};

const actions = {
  changePassword: loginActions.changePassword,
  resetChangePasswordErrors: loginActions.resetChangePasswordErrors,
};

const mapStateToProps = state => ({
  changePasswordErrors: state.user.changePassword.errors,
  purchases: state.purchases.purchases,
});

export default connect(mapStateToProps, actions)(UnsubscribeFromFommentsForm);
