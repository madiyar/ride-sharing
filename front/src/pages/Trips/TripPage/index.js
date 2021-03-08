import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';

// common
import { Breadcrumbs, Grid, Link, Typography } from '@material-ui/core';
import { Comment, TripCard } from 'components';
import { getTrip } from 'store/trips/actions';
import { currentUser } from 'lib/helpers';

// components
import Passengers from './Passengers';
import Map from './Map';
import Route from './Route';

const TripPage = ({ type, getTrip, trip, loading }) => {
  const { tripId } = useParams();
  const user = currentUser();

  useEffect(() => {
    if (tripId) {
      getTrip({ tripId, type });
    }
  }, [tripId, type, getTrip]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›">
            <Link component={RouterLink} color="inherit" to="/">
              Басты бет
            </Link>
            <Typography color="textPrimary">Сапар</Typography>
          </Breadcrumbs>
        </Grid>
        {/* CONTENT */}
        <Grid item md={8} xs={12}>
          {(loading || trip) && (
            <TripCard
              trip={trip}
              user={type === 'drivers' ? trip?.driver : trip?.user}
              type={type}
              loading={loading}
            />
          )}
          <Comment id={`${type}${tripId}`} />
        </Grid>
        {/* SIDEBAR */}
        <Grid item md={4} xs={12}>
          {type === 'drivers' && (
            <Passengers
              list={trip?.passengers}
              seats={trip?.seats}
              user={user}
              isCurrent={trip?.driver?.id === user?.id}
            />
          )}
          <Route from={trip?.from?.name} to={trip?.to?.name} />
          <Map city={trip?.to?.name} url={trip?.to?.map} loading={loading} />
        </Grid>
      </Grid>
    </>
  );
};

const mapState = ({ trips }) => ({
  loading: trips.trip.loading,
  trip: trips.trip.data,
});

export default connect(mapState, { getTrip })(TripPage);
