import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF6D00',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f9f4f0',
    },
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: 'none'
      }
    }
  }
});

export default theme;