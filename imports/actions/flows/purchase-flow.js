import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import ValidateLoginSchema from '../../api/meteor/schemas/validation/login';

export const PURCHASE_FLOW_USER_LOGIN_ERRORS = 'PURCHASE_FLOW_USER_LOGIN_ERROR';

export const resetLoginErrors = () => ({
  type: PURCHASE_FLOW_USER_LOGIN_ERRORS,
  payload: [],
});

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
