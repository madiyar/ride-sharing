import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, createStyles, makeStyles } from '@material-ui/core';
import { Header } from 'components';

import Home from './Home';

const useStyles = makeStyles(theme => createStyles({
  container: {
    marginTop: theme.spacing(11)
  }
}));

const Pages = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="md" className={classes.container} component="main">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </>
  )
}

export default Pages;