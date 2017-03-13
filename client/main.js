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
    const $el = $('.tablet-portrait > div');
    setTimeout(() => {
      $el.animate({
        scrollTop: 450,
      }, 2500, () => {
        setTimeout(() => {
          $el.animate({
            scrollTop: 50,
          }, 3000);
        }, 3000);
      });
    }, 500);
  });
});
