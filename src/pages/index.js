import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Icon } from 'components';

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Icon.Camera />
      </Route>
    </Switch>
  )
}

export default Pages;