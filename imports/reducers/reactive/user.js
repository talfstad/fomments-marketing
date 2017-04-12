import { USER_REACTIVE_SOURCE_CHANGED } from '/imports/actions/user/load';
import {
  HEADER_LOGIN_ERRORS,
  HEADER_SHOW_CREATE_ACCOUNT,
  HEADER_CREATE_USER_ERRORS,
} from '/imports/actions/user/login';

const initialState = {
  ready: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HEADER_SHOW_CREATE_ACCOUNT: {
      return {
        ...state,
        login: {
          ...state.login,
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
        ...action.payload,
        ready: true,
      };
    }
    default:
      return state;
  }
};
