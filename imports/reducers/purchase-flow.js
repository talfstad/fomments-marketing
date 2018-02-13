import {
  PURCHASE_FLOW_USER_LOGIN_ERRORS,
  CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS,
} from '/imports/actions/flows/purchase-flow';

const initialState = {
  login: {
    errors: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_FLOW_USER_LOGIN_ERRORS: {
      return {
        ...state,
        login: {
          errors: action.payload,
        },
      };
    }
    case CREATE_ACCOUNT_AND_PURCHASE_FLOW_ERRORS: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};
