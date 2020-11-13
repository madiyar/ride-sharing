import React from 'react';
import { Route, Switch } from 'react-router-dom';

// PAGES
import Home from './Trips/TripsList';
import TripPage from './Trips/TripPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/trip/:tripId" component={TripPage} />
  </Switch>
);

export default Routes;
