import React from 'react';
import { Route, Switch } from 'react-router-dom';

// PAGES
import { NotFound } from 'components';
import Home from './Trips/TripsList';
import TripPage from './Trips/TripPage';
import AddPage from './Add';
import User from './User';
import Search from './Search';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/trip/drivers/:tripId" render={() => <TripPage type="drivers" />} />
    <Route path="/trip/users/:tripId" render={() => <TripPage type="users" />} />
    <Route path="/user/:userId" component={User} />
    <Route path="/add" component={AddPage} />
    <Route path="/search/from/:cityId" render={() => <Search type='from' />} />
    <Route path="/search/to/:cityId" render={() => <Search type='to' />} />
    <Route path="*" exact={true} component={NotFound} />
  </Switch>
);

export default Routes;
