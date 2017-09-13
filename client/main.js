import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import bootAppWithRedux from '/imports/startup/client/boot';

global.regeneratorRuntime = require('babel-runtime/regenerator');

Meteor.startup(() => {
  render(bootAppWithRedux(), document.getElementById('fomments-main'));

  const appendFommentsLibrary = () => {
    const { FOMMENTS_CDN } = Meteor.settings.public;
    $('body').append(`<script src="${FOMMENTS_CDN}/fomments.min.js"></script>`);
  };
  appendFommentsLibrary();
});
