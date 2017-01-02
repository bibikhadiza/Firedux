import React from 'react';
import { Route, IndexRoute } from 'react-router';
import C from './constants'
import App from './App';
import MainContainer from './main/MainContainer';
import LoginFormContainer from './auth/LoginFormContainer';

const requireAuth = (nextState, replace) => {
  if (!C.FIREBASE.auth().currentUser) {
    replace('/login');
  }
}

const requireUnauth = (nextState, replace) => {
  if (C.FIREBASE.auth().currentUser) {
    replace('/');
  }
}

export const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ MainContainer } onEnter={requireAuth} />
    <Route path='/login' component={ LoginFormContainer } onEnter={requireUnauth} />
  </Route>
);
