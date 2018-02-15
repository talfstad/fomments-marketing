export const unsubscribeFromFommentsAction = purchases => () => {
  // first call stripe and cancel it, second update the db (on success)
  Meteor.call('cancelSubscription', purchases);
};
