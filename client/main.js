
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '/imports/startup/client/routes';

global.regeneratorRuntime = require('babel-runtime/regenerator');

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('fomments-main'));
});
