import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as loginActions from '/imports/actions/user/login';

class SubscribeToFommentsForm extends Component {
  render() {
    return (
      <div className="f-container">
        Current Subscription: <strong>Not Active</strong>
        <div className="cancel-box clearfix">
          <div className="fl" style={{ width: '265px' }}>
            <a href="" className="signup-button common-button">
              <i className="fa fa-times-circle mr5"></i>Start Subscription
            </a>
            </div>
            <div className="fl" style={{ width: '450px' }}>
            <small>Upon clicking your subscription will begin processing.
            Please chat with us if you have any further questions or suggestions.
            We appreciate your business and hope you the best!</small>
          </div>
        </div>
      </div>
    );
  }
}

SubscribeToFommentsForm.propTypes = {
};

const actions = {
  changePassword: loginActions.changePassword,
  resetChangePasswordErrors: loginActions.resetChangePasswordErrors,
};

const mapStateToProps = state => ({
  changePasswordErrors: state.user.changePassword.errors,
});

export default connect(mapStateToProps, actions)(SubscribeToFommentsForm);
