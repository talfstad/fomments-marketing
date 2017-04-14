import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import bootAppWithRedux from '/imports/startup/client/boot';

global.regeneratorRuntime = require('babel-runtime/regenerator');

Meteor.startup(() => {
  render(bootAppWithRedux(), document.getElementById('fomments-main'));
});
