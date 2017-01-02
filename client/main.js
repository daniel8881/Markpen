import React from 'react';
import ReactDOM from 'react-dom';
import { Pens } from '../imports/collections/pens';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import PensMain from './components/pens/pens_main';
import PensList from './components/pens/pens_list';
import Home from './components/home';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='pens/:penId' component={PensMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.root'));
});