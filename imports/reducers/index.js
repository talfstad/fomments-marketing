import { combineReducers } from 'redux';
import sections from '/imports/reducers/reactive/sections';
import user from '/imports/reducers/reactive/user';

const rootReducer = combineReducers({
  user,
  sections,
});

export default rootReducer;
