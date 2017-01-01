import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import MainContainer from './containers/MainContainer';

export const routes = (
  <Route path="/" component={ AppContainer }>
    <IndexRoute component={ MainContainer }/>
  </Route>
);
