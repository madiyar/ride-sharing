import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';

import { Avatar, Breadcrumbs, Button, Card, CardContent, Grid, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Icon, TripCard } from 'components';
import { getTrip } from 'store/trips/actions';
import { getUserInitials } from 'lib/helpers';
import Map from './Map';
import { Skeleton } from '@material-ui/lab';

const TripPage = ({ getTrip, trip, loading }) => {
  const { tripId } = useParams();

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
          <Card>
            <CardContent style={{ flexDirection: 'column', display: 'flex' }}>
              <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.Users style={{ marginRight: '8px' }} />
                Жолаушылар
              </Typography>
              <List>
                {trip?.passengers?.map(user => (
                  <ListItem key={`passenger-${tripId}-${user.id}`} disableGutters>
                    <ListItemAvatar>
                      <Avatar>
                        {getUserInitials(user.firstName, user.lastName)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${user.firstName} ${user.lastName}`}
                    />
                  </ListItem>
                ))}
              </List>
              {trip?.seats > trip?.passengers?.length && (
                <Button variant="contained" color="primary" size="large" style={{ alignSelf: 'center' }}>
                  Жолаушы болу
                </Button>
              )}
            </CardContent>
          </Card>
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
