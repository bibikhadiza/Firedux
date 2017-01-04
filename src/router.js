import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import MainContainer from './main/MainContainer';

export const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ MainContainer } />
  </Route>
);
