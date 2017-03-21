import { combineReducers } from 'redux';
import sectionControls from './section-controls';
import user from './user';

const rootReducer = combineReducers({
  sectionControls,
  user,
});

export default rootReducer;
