import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0880AE',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EBF4F8',
      sidebar: '#FFFFFF'
    },
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: 'none'
      }
    },
    MuiCard: {
      root: {
        borderRadius: '24px',
        boxShadow: '0px 12px 24px rgba(44, 39, 56, 0.02), 0px 24px 48px rgba(44, 39, 56, 0.04)'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: '40px'
      }
    }
  }
});

export default theme;