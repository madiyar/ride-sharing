import React from 'react';
import { Grid } from '@material-ui/core';
import { TripCard } from 'components';

export default ({ tab, trips, loading }) => loading
  ? [0,1,2,3].map(item => <Grid item lg={6} xs={12} key={`loader-${item}`}><TripCard loading={loading} /></Grid>)
  : trips.map(trip => (
    <Grid item lg={6} xs={12} key={`trip-${trip.id}`}>
      <TripCard
        trip={trip}
        type={tab}
        user={tab === 'drivers' ? trip?.driver : trip?.user}
        showLink
      />
    </Grid>
  ));
