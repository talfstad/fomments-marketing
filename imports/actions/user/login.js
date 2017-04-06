import { Meteor } from 'meteor/meteor';

// Intent: thunk, never calls dispatch, just logs user out
export const logUserOut = () => () =>
  Meteor.logout();
