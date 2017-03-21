import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import store from '/imports/store';

import AppComponent from '/imports/ui/components/AppComponent';

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppComponent} />
    </Router>
  </Provider>
);
