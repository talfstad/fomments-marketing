import { combineReducers } from 'redux';
import sectionControls from '/imports/reducers/section-controls';
import sections from '/imports/reducers/reactive/sections';
import user from '/imports/reducers/reactive/user';

const rootReducer = combineReducers({
  sectionControls,
  user,
  sections,
});

export default rootReducer;
