import React from 'react';
import { Button, Grid, Hidden } from '@material-ui/core';
import { Icon } from 'components';

export default ({ open }) => (
  <Hidden mdUp>
    <Grid item xs={12} container justify="flex-end">
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={() => open(true)}
      >
        <Icon.Search size={12} style={{ marginRight: '8px' }} />
        Іздеу
      </Button>
    </Grid>
  </Hidden>
);