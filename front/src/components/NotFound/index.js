import React from 'react';
import { Typography, makeStyles, Container, Link } from '@material-ui/core';
import { Icon } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setError } from 'store/helpers/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  homeLink: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginLeft: theme.spacing(1)
    }
  }
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Парақша табылмады
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Сіз ашып отырған парақша біздің сайтымызда жоқ. Сілтемені тексеріп көріңіз немесе басты бетке көшіңіз.
        </Typography>
        <Link
          variant="body1"
          className={classes.homeLink}
          component={RouterLink}
          onClick={() => dispatch(setError(null))}
          to="/"
        >
          Басты бетке көшу <Icon.ArrowRight />
        </Link>
      </Container>
    </div>
  );
};