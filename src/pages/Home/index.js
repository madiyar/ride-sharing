import { Grid } from '@material-ui/core';
import React from 'react';
import List from './List';
import Filter from './Filter';

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <List />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Filter />
      </Grid>
    </Grid>
  )
}

export default Home;
