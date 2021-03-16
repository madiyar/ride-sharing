import { createStyles, makeStyles } from "@material-ui/core";

export default makeStyles(theme => createStyles({
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  dialogTitle: {
    '& .MuiTypography-root': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  dialogActions: {
    justifyContent: 'center',
    padding: '24px'
  }
}));
