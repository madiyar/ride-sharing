import React, { useEffect } from 'react';
import { createStyles, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { getTrips } from 'store/trips/actions';
import { TripCard } from 'components';

const useStyles = makeStyles(theme => createStyles({
  pagination: {
    marginTop: theme.spacing(3),
    justifyContent: 'center'
  },
  tab: {
    '& .MuiTab-wrapper': {
      fontSize: '1.2em'
    }
  }
}));

const ShareList = ({ trips, loading, getTrips }) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState('drivers');

  useEffect(() => {
    getTrips({ type: tab });
  }, [tab]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(e, tab) => setTab(tab)}
            className={classes.tab}
            centered
          >
            <Tab label="Жүргізушілер" value="drivers" />
            <Tab label="Жолаушылар" value="users" />
          </Tabs>
        </Grid>
        {loading && [0,1,2,3].map(item => <Grid item lg={6} xs={12} key={`loader-${item}`}><TripCard loading={loading} /></Grid>)}
        {trips.map(trip => (
          <Grid item lg={6} xs={12} key={`trip-${trip.id}`}>
            <TripCard
              trip={trip}
              type={tab}
              user={tab === 'drivers' ? trip?.driver : trip?.user}
              showLink
            />
          </Grid>
        ))}
      </Grid>
      {!loading && (
        <Pagination
          count={Math.ceil(trips?.length/4)}
          variant="outlined"
          color="primary"
          shape="rounded"
          classes={{ ul: classes.pagination }}
        />
      )}
    </>
  )
}

const mapState = ({ trips }) => ({
  loading: trips.trips.loading,
  trips: trips.trips.data,
});

export default connect(mapState, { getTrips })(ShareList);
