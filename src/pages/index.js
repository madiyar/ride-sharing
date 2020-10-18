import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact>
        HELLO
      </Route>
    </Switch>
  )
}

export default Pages;