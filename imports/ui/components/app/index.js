import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import AppComponent from './app';

// Intent: load all Schemas onto collectionsttaches schemas to all
import '../../../../imports/api/meteor/collections';

import '../../../../imports/ui/css/app.scss';

const App = () => (
  <Router>
    <AppComponent />
  </Router>
);

export default App;
