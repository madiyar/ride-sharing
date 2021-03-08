import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Grid, Hidden, Tab, Tabs, makeStyles, createStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { getTrips } from 'store/trips/actions';

import MenuButton from './MenuButton';
import List from './List';
import Filter from './Filter';

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

const TripsList = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [tab, setTab] = React.useState('drivers');
  const [trips, setTrips] = React.useState([]);

  const { trips: { loading, data } } = useSelector(state => state.trips);
  const dispatch = useDispatch();
  const classes = useStyles();

  // get trips from db
  useEffect(() => {
    dispatch(getTrips({ type: tab }));
  }, [tab, dispatch]);

  // set trips after request
  useEffect(() => {
    if (data?.length) {
      setTrips(data);
    }
  }, [data]);

  const setFilter = data => {
    console.log(data);
  };

  return (
    <>
      <Grid container spacing={3}>
        <MenuButton open={setIsFiltersOpen} />
        <Grid item md={8} xs={12}>
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
            <List
              tab={tab}
              trips={trips}
              loading={loading}
            />
          </Grid>
          {!loading && (
            <Pagination
              count={Math.ceil(data?.length/4)}
              variant="outlined"
              color="primary"
              shape="rounded"
              classes={{ ul: classes.pagination }}
            />
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <Hidden smDown>
            <Filter setFilter={setFilter} />
          </Hidden>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Drawer anchor="right" variant="temporary" open={isFiltersOpen} onClose={() => setIsFiltersOpen(false)}>
          <Filter setFilter={setFilter} />
        </Drawer>
      </Hidden>
    </>
  )
}

export default TripsList;
