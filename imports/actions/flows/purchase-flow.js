import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import ValidateLoginSchema from '../../api/meteor/schemas/validation/login';
import ValidateCreateAccountAndPurchaseSchema from '../../api/meteor/schemas/validation/purchase-flow';

export const PURCHASE_FLOW_USER_LOGIN_ERRORS = 'PURCHASE_FLOW_USER_LOGIN_ERROR';
export const CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS = 'CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS';

export const resetLoginErrors = () => ({
  type: PURCHASE_FLOW_USER_LOGIN_ERRORS,
  payload: [],
});

export const resetCreateAccountAndPurchaseFlowErrors = () => ({
  type: CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS,
  payload: [],
});

export const createAccountAndPurchase = ({
  email,
  fullName,
  password,
  cardInformation,
}, callback) => (dispatch) => {
  // validate email, fullName, password
  const validateCreateAccountAndPurchaseContext =
    ValidateCreateAccountAndPurchaseSchema.namedContext();
  validateCreateAccountAndPurchaseContext.validate({
    email,
    password,
    fullName: (fullName === '' ? undefined : fullName),
  });

  if (validateCreateAccountAndPurchaseContext.isValid()) {
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
        // now that we're successfull we should remove all errors that were there
        dispatch(resetCreateAccountAndPurchaseFlowErrors());

        // call method to create user in stripe, attach source, and attach to subscription
        Meteor.call('processSubscription', { email, fullName, cardInformation }, (processError) => {
          if (processError) {
            dispatch({
              type: CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS,
              payload: [{
                name: 'password',
                message: processError.reason,
              }],
            });
          } else {
            callback();
          }
        });

        // TODO: if the user is logged in publish the user's purchases
      }
    });
    // in method:
    // 3. create user in db, if fail return else continue
    // 4. add customer to user object
    // 5. server: create customer in stripe
    // 5. server: add source to customer in stripe
    // 6. server: add customer to subscription
    // 7. respond success or failure. adding to sub will throw error if not charged
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
