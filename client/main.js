import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/app';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('fomments-main'));

  $(() => {
    // feature animation
    setTimeout(() => {
      $('.tablet-portrait > div > img').animate({
        top: '-400px',
      }, 2500, () => {
        setTimeout(() => {
          $('.tablet-portrait > div > img').animate({
            top: '0px',
          }, 3000);
        }, 2000);
      });
    }, 500);
  });
});
