import { Grid } from '@material-ui/core';
import React from 'react';
import List from './List';
import Filter from './Filter';

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <List />
      </Grid>
      <Grid item xs={4}>
        <Filter />
      </Grid>
    </Grid>
  )
}

export default Home;
