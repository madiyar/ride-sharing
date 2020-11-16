import { createStyles, makeStyles } from "@material-ui/core";

export default makeStyles(theme => createStyles({
  header: {
    justifyContent: 'space-between',
    minHeight: theme.spacing(8),
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  tab: {
    minHeight: theme.spacing(8),
    textTransform: 'none',
    '& .MuiTab-wrapper': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& span': {
        marginLeft: theme.spacing(1)
      }
    }
  },
  // FORM
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 1)
  },
  modalTitle: {
    '& .MuiTypography-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },
  button: {
    marginTop: theme.spacing(1),
    borderRadius: '999rem',
    minWidth: '200px'
  }
}));
