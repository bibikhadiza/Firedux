import { combineReducers } from 'redux-immutable';
import authReducer from './authReducer';
import routing from './routing';

const Reducers = combineReducers({
  auth: authReducer,
  routing: routing
});

export default Reducers;
