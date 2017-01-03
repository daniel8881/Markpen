import React from 'react';
import ReactDOM from 'react-dom';
import { Pens } from '../imports/collections/pens';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import PensMain from './components/pens/pens_main';
import PensList from './components/pens/pens_list';
import Home from './components/home';
import LoginPage from './components/auth/loginpage';
import SignupPage from './components/auth/signuppage';


import { isLoggedIn, notLoggedIn } from './components/auth/authIndex';
 
const routes = (
  <Router history={browserHistory}>
    <Route path='login' component={LoginPage} />
    <Route path='signup' component={SignupPage} />
    <Route path='/' component={Home} onEnter={isLoggedIn} />
    <Route path='/u' component={App} onEnter={notLoggedIn}>
      <Route path='pens' component={PensList} />
      <Route path='pens/:penId' component={PensMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.root'));
});