import React, { useState, useEffect } from 'react';
import moment from 'moment';
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

const PER_PAGE = 4;

const TripsList = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [tab, setTab] = React.useState('drivers');
  const [trips, setTrips] = React.useState([]);
  const [page, setPage] = useState(1);

  const { trips: { loading, data } } = useSelector(state => state.trips);
  const dispatch = useDispatch();
  const classes = useStyles();

  // get trips from db
  useEffect(() => {
    dispatch(getTrips({ type: tab }));
  }, [tab, dispatch]);

  // set trips
  useEffect(() => {
    if (data?.length) {
      const startList = (page - 1) * PER_PAGE;
      setTrips(data.slice(startList, startList + PER_PAGE));
    }
  }, [data, page]);

  // pagination
  const handlePageChange = (e, page) => setPage(page);

  // tab
  const changeTab = tab => {
    setTab(tab);
    setPage(1);
  };

  // filtering
  const setFilter = formData => {
    setTrips(data.filter(trip => 
      trip?.fromId === formData?.from?.id &&
      trip?.toId === formData?.to?.id &&
      moment(trip?.day).format('YYYY-MM-DD') === formData?.day
    ));
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
                onChange={(e, tab) => changeTab(tab)}
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
              count={Math.ceil(data?.length / PER_PAGE)}
              variant="outlined"
              color="primary"
              shape="rounded"
              classes={{ ul: classes.pagination }}
              page={page}
              onChange={handlePageChange}
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
