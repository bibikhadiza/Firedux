import Immutable from 'immutable';
import C from './constants';

const initialState = Immutable.Map({
  authProvider: null,
  authStatus: C.LOGGING_IN,
  uid: null,
  userName: null,
  email: null,
  photoURL: null
});

const authReducer = (currentState = initialState, action) => {

  switch(action.type) {

    case C.LOGIN_REQUEST:
    console.log('im in reducer-logging');
      return currentState.merge(Immutable.Map({
        authProvider: action.method,
        authStatus: C.LOGGING_IN
      }));

    case C.LOGIN_SUCCESS:
      return currentState.merge(Immutable.Map({
        authStatus: C.LOGGED_IN,
        uid: action.user.uid,
        userName: action.user.displayName,
        email: action.user.email,
        photoURL: action.user.photoURL
      }));

    case C.LOGOUT:
    console.log('im in reducer logged out');
      return currentState.merge(Immutable.Map({
        authProvider: null,
        authStatus: C.LOGGED_OUT,
        uid: null,
        userName: null,
        email: null,
        photoURL: null
      }));

    default:
      return currentState;
  }
};

export default authReducer;
