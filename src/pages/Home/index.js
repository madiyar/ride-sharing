import { Button, Drawer, Grid, Hidden } from '@material-ui/core';
import React, { useState } from 'react';
import List from './List';
import Filter from './Filter';
import { Icon } from 'components';

const Home = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  return (
    <>
      <Grid container spacing={3}>
        <Hidden mdUp>
          <Grid item xs={12} container justify="flex-end">
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => setIsFiltersOpen(true)}
            >
              <Icon.Search size={12} style={{ marginRight: '8px' }} />
              Іздеу
            </Button>
          </Grid>
        </Hidden>
        <Grid item md={8} xs={12}>
          <List />
        </Grid>
        <Grid item md={4} xs={12}>
          <Hidden smDown>
            <Filter />
          </Hidden>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Drawer anchor="right" variant="temporary" open={isFiltersOpen} onClose={() => setIsFiltersOpen(false)}>
          <Filter />
        </Drawer>
      </Hidden>
    </>
  )
}

export default Home;
