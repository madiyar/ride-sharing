import React, { useEffect } from 'react';
import { createStyles, Grid, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { getTrips } from 'store/trips/actions';
import { TripCard } from 'components';

const useStyles = makeStyles(theme => createStyles({
  pagination: {
    marginTop: theme.spacing(3),
    justifyContent: 'center'
  }
}));

const ShareList = ({ trips, loading, getTrips }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!trips.length) {
      getTrips();
    }
  }, [trips, getTrips]);

  return (
    <>
      <Grid container spacing={3}>
        {loading && [0,1,2,3].map(item => <Grid item lg={6} xs={12} key={`loader-${item}`}><TripCard loading={loading} /></Grid>)}
        {trips.map(trip => (
          <Grid item lg={6} xs={12} key={`trip-${trip.id}`}>
            <TripCard trip={trip} showLink />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        shape="rounded"
        classes={{ ul: classes.pagination }}
      />
    </>
  )
}

const mapState = ({ trips }) => ({
  loading: trips.trips.loading,
  trips: trips.trips.data,
});

export default connect(mapState, { getTrips })(ShareList);
