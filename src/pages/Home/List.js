import React, { useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, createStyles, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Icon, Loader } from 'components';
import { connect } from 'react-redux';
import { getTrips } from 'store/trips/actions';
import moment from 'moment';
import LoadingCard from './LoadingCard';

const useStyles = makeStyles(theme => createStyles({
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  button: {
    display: 'flex',
    alignItems: 'center'
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  pagination: {
    marginTop: theme.spacing(3),
    justifyContent: 'center'
  }
}));

const Item = ({ icon, title, value }) => {
  return (
    <ListItem disableGutters>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} secondary={value} />
    </ListItem>
  );
};

const ShareList = ({ trips, loading, getTrips }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!trips.length) {
      getTrips();
    }
  }, [trips]);

  return (
    <>
      <Grid container spacing={3}>
        {loading && [0,1].map(item => <Grid item md={6} xs={12} key={`loader-${item}`}><LoadingCard /></Grid>)}
        {trips.map(trip => (
          <Grid item md={6} xs={12} key={`trip-${trip.id}`}>
            <Card>
              <CardHeader
                avatar={<Avatar>MD</Avatar>}
                title={`${trip.driver.firstName} ${trip.driver.lastName}`}
                action={<IconButton><Icon.Star /></IconButton>}
              />
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  {trip?.from?.name} <Icon.ArrowRight size={20} /> {trip?.to?.name}
                </Typography>
                <List>
                  <Item
                    icon={<Icon.Calendar />}
                    title="Шығу уақыты"
                    value={moment(trip?.day).format('DD.MM.YYYY, H:mm')}
                  />
                  <Item
                    icon={<Icon.Users />}
                    title="Орын саны"
                    value={trip?.seats}
                  />
                  <Item
                    icon={<Icon.DollarSign />}
                    title="Бағасы"
                    value={`${trip?.price} тг/орын`}
                  />
                </List>
              </CardContent>
              <CardActions disableSpacing>
                <Button className={classes.button}>
                  <Icon.Phone size={16} />
                  Телефон номірі
                </Button>
                <IconButton aria-label="add to favorites">
                  <Icon.Phone />
                </IconButton>
                <IconButton aria-label="share">
                  <Icon.User />
                </IconButton>
              </CardActions>
            </Card>
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
