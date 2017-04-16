import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import ValidateLoginSchema from '../../api/meteor/schemas/validation/login';
import ForgotPasswordValidationSchema from '../../api/meteor/schemas/validation/forgot-password';
import ValidateResetPasswordSchema from '../../api/meteor/schemas/validation/reset-password';
import ValidateChangePasswordSchema from '../../api/meteor/schemas/validation/change-password';

export const HEADER_LOGIN_ERRORS = 'HEADER_LOGIN_ERRORS';
export const HEADER_SHOW_CREATE_ACCOUNT = 'SHOW_CREATE_ACCOUNT';
export const HEADER_CREATE_USER_ERRORS = 'HEADER_CREATE_USER_ERRORS';
export const HEADER_SHOW_FORGOT_PASSWORD = 'HEADER_SHOW_FORGOT_PASSWORD';
export const RESET_PASSWORD_ERRORS = 'RESET_PASSWORD_ERRORS';
export const CHANGE_PASSWORD_ERRORS = 'CHANGE_PASSWORD_ERRORS';

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
      } else {
        dispatch({
          type: HEADER_LOGIN_ERRORS,
          payload: [],
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
        } else {
          dispatch({
            type: HEADER_CREATE_USER_ERRORS,
            payload: [],
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

export const forgotPassword = ({ email }) => (dispatch) => {
  const forgotPasswordValidationSchema = ForgotPasswordValidationSchema.namedContext();
  forgotPasswordValidationSchema.validate({ email });

  if (forgotPasswordValidationSchema.isValid()) {
    Meteor.call('fommentsForgotPassword', { email }, (resetPasswordError) => {
      if (resetPasswordError) {
        dispatch({
          type: HEADER_CREATE_USER_ERRORS,
          payload: [{
            name: 'email',
            message: resetPasswordError.reason,
          }],
        });
      } else {
        // Intent: Map success message the same way we map errors.
        dispatch({
          type: HEADER_CREATE_USER_ERRORS,
          payload: [{
            name: 'email',
            type: 'success',
            message: 'Sent reset password email',
          }],
        });
      }
    });
  } else {
    // Map simplschema validation errors to error messages
    const validationErrors = _.map(forgotPasswordValidationSchema.validationErrors(), o =>
      _.extend({ message: forgotPasswordValidationSchema.keyErrorMessage(o.name) }, o));

    dispatch({
      type: HEADER_CREATE_USER_ERRORS,
      payload: validationErrors,
    });
  }
};

export const showForgotPassword = show => ({
  type: HEADER_SHOW_FORGOT_PASSWORD,
  payload: show,
});

export const resetPassword = ({ token, password, confirmPassword }) => (dispatch) => {
  const resetPasswordFormValidationContext = ValidateResetPasswordSchema.namedContext();
  resetPasswordFormValidationContext.validate({ password, confirmPassword });

  if (resetPasswordFormValidationContext.isValid()) {
    // Intent: verify passwords match
    if (password !== confirmPassword) {
      dispatch({
        type: RESET_PASSWORD_ERRORS,
        payload: [{
          name: 'confirm-password',
          message: 'Passwords do not match',
        }],
      });
    } else {
      Accounts.resetPassword(token, password, (resetError) => {
        if (resetError) {
          dispatch({
            type: RESET_PASSWORD_ERRORS,
            payload: [{
              name: 'confirm-password',
              message: resetError.reason,
            }],
          });
        } else {
          dispatch({
            type: RESET_PASSWORD_ERRORS,
            payload: [],
          });
        }
      });
    }
  } else {
    // Map simplschema validation errors to error messages
    const validationErrors = _.map(resetPasswordFormValidationContext.validationErrors(), o =>
      _.extend({ message: resetPasswordFormValidationContext.keyErrorMessage(o.name) }, o));

    dispatch({
      type: RESET_PASSWORD_ERRORS,
      payload: validationErrors,
    });
  }
};


export const resetChangePasswordErrors = () => ({
  type: CHANGE_PASSWORD_ERRORS,
  payload: [],
});

export const changePassword = ({ oldPassword, newPassword, confirmNewPassword }) => (dispatch) => {
  const changePasswordFormValidationContext = ValidateChangePasswordSchema.namedContext();
  changePasswordFormValidationContext.validate({ oldPassword, newPassword });

  if (changePasswordFormValidationContext.isValid()) {
    // Intent: verify passwords match
    if (newPassword !== confirmNewPassword) {
      dispatch({
        type: CHANGE_PASSWORD_ERRORS,
        payload: [{
          name: 'oldPassword',
          message: 'Passwords do not match',
        }],
      });
    } else {
      Accounts.changePassword(oldPassword, newPassword, (changeError) => {
        if (changeError) {
          dispatch({
            type: CHANGE_PASSWORD_ERRORS,
            payload: [{
              name: 'oldPassword',
              message: changeError.reason,
            }],
          });
        } else {
          dispatch({
            type: CHANGE_PASSWORD_ERRORS,
            payload: [{
              name: 'confirmNewPassword',
              type: 'success',
              message: 'Password has been successfully updated.',
            }],
          });
        }
      });
    }
  } else {
    // Map simplschema validation errors to error messages
    const validationErrors = _.map(changePasswordFormValidationContext.validationErrors(), o =>
      _.extend({ message: changePasswordFormValidationContext.keyErrorMessage(o.name) }, o));

    dispatch({
      type: CHANGE_PASSWORD_ERRORS,
      payload: validationErrors,
    });
  }
};
