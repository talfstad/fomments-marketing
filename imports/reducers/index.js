import { combineReducers } from 'redux';
import sections from '/imports/reducers/reactive/sections';
import user from '/imports/reducers/reactive/user';
import purchaseFlow from '/imports/reducers/purchase-flow';

const rootReducer = combineReducers({
  user,
  sections,
  purchaseFlow,
});

export default rootReducer;
