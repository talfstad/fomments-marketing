import { Meteor } from 'meteor/meteor';
import { startSubscription } from 'meteor-redux-middlewares';
import { Sections } from '/imports/api/collections/products/sections';

export const SECTIONS_SUBSCRIPTION_READY = 'SECTIONS_SUBSCRIPTION_READY';
export const SECTIONS_SUBSCRIPTION_CHANGED = 'SECTIONS_SUBSCRIPTION_CHANGED';
export const SECTIONS_SUB = 'sections';

export const loadItems = () =>
  startSubscription({
    key: SECTIONS_SUB,
    subscribe: () => Meteor.subscribe(SECTIONS_SUB),
    get: () => Sections.find().fetch(),
  });
