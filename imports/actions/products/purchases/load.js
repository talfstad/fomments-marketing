import { Meteor } from 'meteor/meteor';
import { startSubscription } from 'meteor-redux-middlewares';

import { Purchases } from '/imports/api/meteor/collections';

export const PURCHASES_SUBSCRIPTION_READY = 'PURCHASES_SUBSCRIPTION_READY';
export const PURCHASES_SUBSCRIPTION_CHANGED = 'PURCHASES_SUBSCRIPTION_CHANGED';
export const PURCHASES_SUB = 'PURCHASES';

export const loadPurchases = () =>
  startSubscription({
    key: PURCHASES_SUB,
    subscribe: () => Meteor.subscribe(PURCHASES_SUB),
    get: () => Purchases.find().fetch(),
  });
