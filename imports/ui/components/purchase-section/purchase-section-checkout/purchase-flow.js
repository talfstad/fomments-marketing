import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as purchaseFlowActions from '/imports/actions/flows/purchase-flow.js';

import StripePurchaseForm from './stripe-purchase-form';
import SigninOrCreateUserAndLogin from './signin-or-create-user-and-login';

const PurchaseForm = (props) => {
  const {
    setShowPurchaseFlow,
    loginOrCreateUser,
    user,
    section,
  } = props;

  if (user._id) {
    return <StripePurchaseForm />;
  }

  return (
    <SigninOrCreateUserAndLogin
      setShowPurchaseFlow={val => setShowPurchaseFlow(val)}
      section={section}
      loginOrCreateUser={loginOrCreateUser}
    />);
};

PurchaseForm.propTypes = {
  setShowPurchaseFlow: PropTypes.func,
  loginOrCreateUser: PropTypes.func,
  user: PropTypes.shape({}),
  section: PropTypes.shape({}),
};

const actions = {
  loginOrCreateUser: purchaseFlowActions.loginOrCreateUser,
};

const mapStateToProps = state => ({
  user: state.user,
  section: state.sections.activeState.section,
});

export default connect(mapStateToProps, actions)(PurchaseForm);
