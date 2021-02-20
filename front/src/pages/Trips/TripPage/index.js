import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';

// common
import { Breadcrumbs, Card, CardContent, Grid, Link, Typography } from '@material-ui/core';
import { Icon, TripCard } from 'components';
import { getTrip } from 'store/trips/actions';

// components
import Passengers from './Passengers';
import Map from './Map';

const TripPage = ({ getTrip, trip, loading }) => {
  const { tripId } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (tripId) {
      getTrip(tripId);
    }
  }, [tripId, getTrip]);

  useEffect(() => {
    if (tripId) {
      global.VK.init({apiId: 7765923, onlyWidgets: true});
      global.VK.Widgets.Comments(`vk_comments_trip${tripId}`, {limit: 10, attach: "*"}, `trip${tripId}`);
    }
  }, [tripId]);

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
            <TripCard trip={trip} loading={loading} />
          )}
          <Card style={{ marginTop: 16 }}>
            <CardContent>
              <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.MessageCircle style={{ marginRight: '8px' }} />
                Пікірлер
              </Typography>
              {tripId && <div id={`vk_comments_trip${tripId}`}></div>}
            </CardContent>
          </Card>
        </Grid>
        {/* SIDEBAR */}
        <Grid item md={4} xs={12}>
          <Passengers list={trip?.passengers} seats={trip?.seats} user={user} />
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
