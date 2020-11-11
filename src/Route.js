import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';
import MorePublic from './MorePublic';

const Router = () => {
  const [current, setCurrent] = useState('home');

  useEffect(
    () => {
      setRoute();
      window.addEventListener(
        'hashchange'
        , setRoute
      );

      return () =>  window.removeEventListener(
        'hashchange'
        , setRoute
      );
    }
    , []
  );

  const setRoute = () => {
    // extract current url from the global window object, may be null
    const location = window.location.href.split('/');
    const pathname = location[location.length-1];

    // set current state to path if it exists, otherwise becomes default route
    setCurrent( pathname ? pathname : 'home' );
  }

  return (
    <HashRouter>
      <Nav current={current} />
      
      <Switch>
        <Route
          exact path="/"
          component={Public}
        />

        <Route
          exact path="/protected"
          component={Protected}
        />

        <Route
          exact path="/profile"
          component={Profile}
        />

        <Route
          exact path="/MorePublic"
          component={MorePublic}
        />

        <Route
          component={Public}
        />
      </Switch>
    </HashRouter>
  );
}

export default Router;