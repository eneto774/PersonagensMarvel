import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from '../pages/CharacterDetail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/CharacterDetail/:id" component={CharacterDetail} />
    <Route path="*" component={NotFound}/>
  </Switch>
);

export default Routes;