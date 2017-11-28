import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ReactGA from 'react-ga';

import 'font-awesome/css/font-awesome.css';

import AppComponent from './app';

// Intent: load all Schemas onto collectionsttaches schemas to all
import '../../../../imports/api/meteor/collections';

import '../../../../imports/ui/css/app.scss';

ReactGA.initialize('UA-109148552-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => (
  <Router onUpdate={logPageView}>
    <AppComponent />
  </Router>
);

export default App;
