import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import configureStore from 'store';
import theme from 'styles';
import Pages from 'pages';
import { history } from 'lib/helpers';

function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <Pages />
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
