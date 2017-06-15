import React from 'react';
import { Switch, Route } from 'react-router-dom'

import App from '../containers/App';
import SourceArticle from '../containers/SourceArticle';
import NotFound from '../containers/404';

const Routes = () => (
  <Switch>
    <Route path="/" component={App} />
    <Route path="/:source" component={SourceArticle} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
