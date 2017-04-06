import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as purchaseFlowActions from '/imports/actions/flows/purchase-flow.js';

import StripePurchaseForm from './stripe-purchase-form';
import LoginOrCreateUserAndLogin from './login-or-create-user-and-login';

const PurchaseForm = (props) => {
  const {
    setShowPurchaseFlow,
    resetLoginErrors,
    loginOrCreateUser,
    user,
    purchaseFlow,
    section,
  } = props;

  if (user._id) {
    return <StripePurchaseForm />;
  }

  return (
    <LoginOrCreateUserAndLogin
      errors={purchaseFlow.login.errors}
      resetLoginErrors={() => resetLoginErrors()}
      setShowPurchaseFlow={val => setShowPurchaseFlow(val)}
      section={section}
      loginOrCreateUser={loginOrCreateUser}
    />);
};

PurchaseForm.propTypes = {
  resetLoginErrors: PropTypes.func,
  setShowPurchaseFlow: PropTypes.func,
  loginOrCreateUser: PropTypes.func,
  user: PropTypes.shape({}),
  purchaseFlow: PropTypes.shape({}),
  section: PropTypes.shape({}),
};

const actions = {
  loginOrCreateUser: purchaseFlowActions.loginOrCreateUser,
  resetLoginErrors: purchaseFlowActions.resetLoginErrors,
};

const mapStateToProps = state => ({
  user: state.user,
  section: state.sections.activeState.section,
  purchaseFlow: state.purchaseFlow,
});

export default connect(mapStateToProps, actions)(PurchaseForm);
