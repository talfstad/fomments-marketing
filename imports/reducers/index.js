import { combineReducers } from 'redux';
import sectionControls from './section-controls';
import sections from './sections';
import user from './user';

const rootReducer = combineReducers({
  sectionControls,
  user,
  sections,
});

export default rootReducer;
