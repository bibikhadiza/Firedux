import { browserHistory } from 'react-router';
import C from './constants';

// Auth actions
export const loginRequest = (method = 'google') => {
  return {
    type: C.LOGIN_REQUEST,
    method
  };
};

export const loginSuccess = (user, nextPath = '/') => {
  browserHistory.replace(nextPath);
  return {
    type: C.LOGIN_SUCCESS,
    user,
    nextPath
  };
};

export const logout = (nextPath = '/') => {
  browserHistory.replace(nextPath);
  return {
    type: C.LOGOUT,
    nextPath
  };
};
