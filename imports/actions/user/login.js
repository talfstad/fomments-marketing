import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import ValidateLoginSchema from '../../api/meteor/schemas/validation/login';

export const HEADER_LOGIN_ERRORS = 'HEADER_LOGIN_ERRORS';
export const HEADER_SHOW_CREATE_ACCOUNT = 'SHOW_CREATE_ACCOUNT';
export const HEADER_CREATE_USER_ERRORS = 'HEADER_CREATE_USER_ERRORS';

// Intent: thunk, never calls dispatch, just logs user out
export const logUserOut = () => () =>
  Meteor.logout();

export const logUserIn = ({ email, password }) => (dispatch) => {
  const loginFormValidationContext = ValidateLoginSchema.namedContext();
  loginFormValidationContext.validate({ email, password });

  if (loginFormValidationContext.isValid()) {
    Meteor.loginWithPassword(email, password, (loginError) => {
      if (loginError) {
        dispatch({
          type: HEADER_LOGIN_ERRORS,
          payload: [{
            name: 'password',
            message: loginError.reason,
          }],
        });
      }
    });
  } else {
    // Map simplschema validation errors to error messages
    const validationErrors = _.map(loginFormValidationContext.validationErrors(), o =>
      _.extend({ message: loginFormValidationContext.keyErrorMessage(o.name) }, o));

    dispatch({
      type: HEADER_LOGIN_ERRORS,
      payload: validationErrors,
    });
  }
};

export const createAccount = ({ email, password, confirmPassword }) => (dispatch) => {
  const loginFormValidationContext = ValidateLoginSchema.namedContext();
  loginFormValidationContext.validate({ email, password });

  if (loginFormValidationContext.isValid()) {
    // Intent: verify passwords match
    if (password !== confirmPassword) {
      dispatch({
        type: HEADER_CREATE_USER_ERRORS,
        payload: [{
          name: 'confirm-password',
          message: 'Passwords do not match',
        }],
      });
    } else {
      Accounts.createUser({
        email,
        password,
      }, (createError) => {
        if (createError) {
          dispatch({
            type: HEADER_CREATE_USER_ERRORS,
            payload: [{
              name: 'confirm-password',
              message: createError.reason,
            }],
          });
        }
      });
    }
  } else {
    // Map simplschema validation errors to error messages
    const validationErrors = _.map(loginFormValidationContext.validationErrors(), o =>
      _.extend({ message: loginFormValidationContext.keyErrorMessage(o.name) }, o));

    dispatch({
      type: HEADER_CREATE_USER_ERRORS,
      payload: validationErrors,
    });
  }
};

export const showCreateAccount = show => ({
  type: HEADER_SHOW_CREATE_ACCOUNT,
  payload: show,
});
