import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import authReducer from './auth/reducer';

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});

const routing = (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }
  return state;
};

const Reducers = combineReducers({
  auth: authReducer,
  routing: routing
});

export default Reducers;
