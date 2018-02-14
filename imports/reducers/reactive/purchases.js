import {
  PURCHASES_SUBSCRIPTION_CHANGED,
} from '/imports/actions/products/purchases/load';

export default (state = [], action) => {
  switch (action.type) {
    // always keep user purchases up to date.
    // Use this to determine if user is subscribed or not
    case PURCHASES_SUBSCRIPTION_CHANGED: {
      return action.payload;
    }
    default:
      return state;
  }
};
