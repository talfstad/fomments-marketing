import {
  PURCHASE_FLOW_USER_LOGIN_ERROR,
} from '/imports/actions/flows/purchase-flow';

const initialState = {
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_FLOW_USER_LOGIN_ERROR: {
      console.log(action.payload);
      return {
        ...state,
        loginError: action.payload,
      };
    }
    default:
      return state;
  }
};
