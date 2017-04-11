import { USER_REACTIVE_SOURCE_CHANGED } from '/imports/actions/user/load';
import { HEADER_LOGIN_ERRORS } from '/imports/actions/user/login';

const initialState = {
  ready: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
