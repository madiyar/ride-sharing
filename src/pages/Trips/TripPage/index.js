import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';

import { Avatar, Breadcrumbs, Card, CardContent, Grid, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Icon, TripCard } from 'components';
import { getTrip } from 'store/trips/actions';
import { getUserInitials } from 'lib/helpers';

const TripPage = ({ getTrip, trip, loading }) => {
  const { tripId } = useParams();

  useEffect(() => {
    if (tripId) {
      getTrip(tripId);
    }
  }, [tripId, getTrip]);

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
        <Grid item md={8} xs={12}>
          {(loading || trip) && (
            <TripCard trip={trip} loading={loading} />
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <Card>
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.MessageCircle style={{ marginRight: '8px' }} />
                Пікірлер
              </Typography>
            </CardContent>
          </Card>
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
