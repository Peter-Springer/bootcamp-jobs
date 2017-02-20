import { combineReducers } from 'redux';
import user from './user';
import userData from './userData';

const rootReducer = combineReducers({
  user,
  userData
});

export default rootReducer;
