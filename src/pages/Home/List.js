import React, { useEffect } from 'react';
import { Avatar, Button, Card, CardActions, createStyles, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Icon, Loader } from 'components';
import { connect } from 'react-redux';
import { getTrips } from 'store/trips/actions';
import moment from 'moment';

const useStyles = makeStyles(theme => createStyles({
  title: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2)
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
    <ListItem>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
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
      <Loader open={loading} />
      {trips.map(trip => (
        <Card elevation={2} key={`trip-${trip.id}`}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={7}>
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
                  title="Бос орын саны"
                  value={trip?.seats}
                />
                <Item
                  icon={<Icon.DollarSign />}
                  title="Бағасы"
                  value={`${trip?.price} тг/орын`}
                />
              </List>
            </Grid>
            <Grid item xs={5} className={classes.user}>
              <Avatar className={classes.avatar}>
                <Icon.User size={70} />
              </Avatar>
              <Typography>{trip?.driver?.firstName} {trip?.driver?.lastName}</Typography>
            </Grid>
          </Grid>
          <CardActions>
            <Button size="small" color="primary" startIcon={<Icon.Phone size={16} />}>
              Телефон нөмірі
            </Button>
          </CardActions>
        </Card>
      ))}
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
