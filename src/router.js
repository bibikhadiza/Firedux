import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/App';
import MainContainer from './app/MainContainer';

export const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ MainContainer } />
  </Route>
);
