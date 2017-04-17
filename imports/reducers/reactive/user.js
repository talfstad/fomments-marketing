import {
  USER_REACTIVE_SOURCE_CHANGED,
} from '/imports/actions/user/load';

import {
  HEADER_LOGIN_ERRORS,
  HEADER_SHOW_CREATE_ACCOUNT,
  HEADER_SHOW_FORGOT_PASSWORD,
  HEADER_CREATE_USER_ERRORS,
  RESET_PASSWORD_ERRORS,
  CHANGE_PASSWORD_ERRORS,
} from '/imports/actions/user/login';

const initialState = {
  resetPassword: {
    errors: [],
  },
  changePassword: {
    errors: [],
  },
  login: {
    errors: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_ERRORS: {
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          errors: action.payload,
        },
      };
    }
    case RESET_PASSWORD_ERRORS: {
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          errors: action.payload,
        },
      };
    }
    case HEADER_SHOW_FORGOT_PASSWORD: {
      // Intent: reset errors
      return {
        ...state,
        login: {
          ...state.login,
          errors: [],
          isShowingCreateAccount: false,
          isShowingForgotPassword: action.payload,
        },
      };
    }
    case HEADER_SHOW_CREATE_ACCOUNT: {
      // Intent: reset errors
      return {
        ...state,
        login: {
          ...state.login,
          errors: [],
          isShowingCreateAccount: action.payload,
        },
      };
    }
    case HEADER_CREATE_USER_ERRORS:
    case HEADER_LOGIN_ERRORS: {
      return {
        ...state,
        login: {
          ...state.login,
          errors: action.payload,
        },
      };
    }

    case USER_REACTIVE_SOURCE_CHANGED: {
      return {
        ...initialState,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
