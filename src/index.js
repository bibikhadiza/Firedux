import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router";

import { store, history } from "./store.js";
import { routes } from "./router.js";

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={ history }
      onUpdate={ () => window.scrollTo(0, 0) }
      routes={ routes }
    />
  </Provider>,
  document.getElementById('root')
);
