import React from 'react';
import { Switch, Route } from 'react-router-dom'

import App from '../containers/App';
import NotFound from '../containers/404';

const Routes = () => (
  <Switch>
    <Route path="/" component={App} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
