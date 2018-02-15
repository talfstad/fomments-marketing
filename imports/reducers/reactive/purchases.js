import {
  PURCHASES_SUBSCRIPTION_CHANGED,
} from '/imports/actions/products/purchases/load';
import { PURCHASE_PREVIOUS_ATTEMPT_DATA } from '/imports/actions/flows/purchase-flow';

const INITIAL_STATE = {
  purchases: [],
  previousAttemptData: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // always keep user purchases up to date.
    // Use this to determine if user is subscribed or not
    case PURCHASES_SUBSCRIPTION_CHANGED: {
      return {
        ...state,
        purchases: action.payload,
      };
    }
    case PURCHASE_PREVIOUS_ATTEMPT_DATA: {
      return {
        ...state,
        previousAttemptData: action.payload,
      };
    }
    default:
      return state;
  }
};
