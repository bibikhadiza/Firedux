import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router";

import { routes } from "./router.js";
import { store, history } from "./store.js";
// Styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router
        history={ history }
        onUpdate={ () => window.scrollTo(0, 0) }
        routes={ routes }
      />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
