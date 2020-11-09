import React from 'react';
import { Backdrop, CircularProgress, withStyles } from '@material-ui/core';

const Background = withStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}))(Backdrop);

const Loader = ({ open }) => (
  <Background open={open}>
    <CircularProgress />
  </Background>
);

export default Loader;