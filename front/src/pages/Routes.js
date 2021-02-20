import React from 'react';
import { Route, Switch } from 'react-router-dom';

// PAGES
import Home from './Trips/TripsList';
import TripPage from './Trips/TripPage';
import AddPage from './Add';
import User from './User';
import { NotFound } from 'components';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/trip/:tripId" component={TripPage} />
    <Route path="/user/:userId" component={User} />
    <Route path="/add" component={AddPage} />
    <Route path="*" exact={true} component={NotFound} />
  </Switch>
);

export default Routes;
