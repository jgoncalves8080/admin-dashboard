import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Team from '../pages/Team';
import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
