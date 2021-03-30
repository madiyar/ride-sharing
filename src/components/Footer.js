import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#cfe6ee',
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Көлік Керек
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Ақбота Амурбеква © '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
}
