import Immutable from 'immutable';
import C from '../constants';

const initialState = Immutable.Map({
  authProvider: null,
  authStatus: C.LOGGED_OUT,
  uid: null,
  userName: null,
  email: null,
  photoURL: null
});

const authReducer = (currentState = initialState, action) => {

  switch(action.type) {

    case C.LOGIN_REQUEST:
      return currentState.update('authProvider', v => C.LOGGING_IN);

    case C.LOGIN_SUCCESS:
      return currentState.merge(Immutable.Map({
        authStatus: C.LOGGED_IN,
        uid: action.user.uid,
        userName: action.user.displayName,
        email: action.user.email,
        photoURL: action.user.photoURL
      }));

    case C.LOGOUT:
      return initialState;

    default:
      return currentState;
  }
};

export default authReducer;
