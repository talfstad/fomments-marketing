import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import ValidateLoginSchema from '../../api/meteor/schemas/validation/login';
import ValidateCreateAccountAndPurchaseSchema from '../../api/meteor/schemas/validation/purchase-flow';

export const PURCHASE_FLOW_USER_LOGIN_ERRORS = 'PURCHASE_FLOW_USER_LOGIN_ERROR';
export const PURCHASE_PREVIOUS_ATTEMPT_DATA = 'PURCHASE_PREVIOUS_ATTEMPT_DATA';
export const CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS = 'CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS';

export const resetLoginErrors = () => ({
  type: PURCHASE_FLOW_USER_LOGIN_ERRORS,
  payload: [],
});

export const resetCreateAccountAndPurchaseFlowErrors = () => ({
  type: CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS,
  payload: [],
});

export const createAccountAndPurchase = (
  {
    email,
    fullName,
    password,
    cardInformation,
  },
  previousAttemptData,
  callback,
) => (dispatch) => {
  // validate email, fullName, password
  const validateCreateAccountAndPurchaseContext =
    ValidateCreateAccountAndPurchaseSchema.namedContext();
  validateCreateAccountAndPurchaseContext.validate({
    email,
    password,
    fullName: (fullName === '' ? undefined : fullName),
  });

  if (validateCreateAccountAndPurchaseContext.isValid()) {
    // call method to create user in stripe, attach source, and attach to subscription
    Meteor.call('processSubscription', { email, fullName, cardInformation }, previousAttemptData, (processError) => {
      if (processError) {
        dispatch({
          type: CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS,
          payload: [{
            name: 'password',
            message: processError.reason,
          }],
        });

        dispatch({
          type: PURCHASE_PREVIOUS_ATTEMPT_DATA,
          payload: processError.details, // previous attempt data passed as details
        });
      } else {
        // processed subscription successfully
        Accounts.createUser({
          email,
          password,
          profile: {
            fullName,
          },
        }, (createError) => {
          if (createError) {
            dispatch({
              type: CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS,
              payload: [{
                name: 'password',
                message: createError.reason,
              }],
            });
          } else {
            callback();
          }
        });
      }
    });
  } else {
    // Map simplschema validation errors to error messages
    const validationErrors = _.map(validateCreateAccountAndPurchaseContext.validationErrors(), o =>
      _.extend({ message: validateCreateAccountAndPurchaseContext.keyErrorMessage(o.name) }, o));

    dispatch({
      type: CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS,
      payload: validationErrors,
    });
  }
};

export const loginOrCreateUser = ({ email, password }) => (dispatch) => {
  const loginFormValidationContext = ValidateLoginSchema.namedContext();
  loginFormValidationContext.validate({ email, password });

  if (loginFormValidationContext.isValid()) {
    Meteor.loginWithPassword(email, password, (loginError) => {
      if (loginError) {
        if (loginError.error === 403) {
          if (loginError.reason === 'Incorrect password') {
            dispatch({
              type: PURCHASE_FLOW_USER_LOGIN_ERRORS,
              payload: [{
                message: loginError.reason,
                name: 'password',
              }],
            });
          } else {
            Accounts.createUser({
              email,
              password,
            }, (createError) => {
              if (createError) {
                dispatch({
                  type: PURCHASE_FLOW_USER_LOGIN_ERRORS,
                  payload: [{
                    name: 'password',
                    message: createError.reason,
                  }],
                });
              }
            });
          }
        }
      }
    });
  } else {
    // Map simplschema validation errors to error messages
    const validationErrors = _.map(loginFormValidationContext.validationErrors(), o =>
      _.extend({ message: loginFormValidationContext.keyErrorMessage(o.name) }, o));

    dispatch({
      type: PURCHASE_FLOW_USER_LOGIN_ERRORS,
      payload: validationErrors,
    });
  }
};
