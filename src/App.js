import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import configureStore from 'store';
import theme from 'styles';
import Pages from 'pages';

function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Pages />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
