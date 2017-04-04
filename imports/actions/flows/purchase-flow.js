import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export const PURCHASE_FLOW_USER_LOGIN_ERROR = 'PURCHASE_FLOW_USER_LOGIN_ERROR';

export const loginOrCreateUser = ({ email, password }) => (dispatch) => {
  Meteor.loginWithPassword(email, password, (loginError) => {
    if (loginError) {
      if (loginError.error === 403) {
        if (loginError.reason === 'Incorrect password') {
          dispatch({
            type: PURCHASE_FLOW_USER_LOGIN_ERROR,
            payload: {
              error: loginError,
            },
          });
        } else {
          Accounts.createUser({
            email,
            password,
          }, (createError) => {
            if (createError) {
              dispatch({
                type: PURCHASE_FLOW_USER_LOGIN_ERROR,
                payload: {
                  error: createError,
                },
              });
            }
          });
        }
      }
    }
  });
};
