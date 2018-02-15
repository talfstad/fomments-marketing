import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Stripe from 'stripe';
import PurchasesCollection from '/imports/api/meteor/collections/purchases';

Meteor.methods({
  cancelSubscription({ email, subscriptionId }) {
    check({
      email,
      subscriptionId,
    }, { email: String, subscriptionId: String });

    const { STRIPE_API_KEY } = Meteor.settings; // note this is the private key
    const stripe = Stripe(STRIPE_API_KEY);

    const cancelSubscription = () => new Promise((resolve, reject) => {
      stripe.subscriptions.del(subscriptionId, { at_period_end: true })
        .then(() => resolve())
        .catch(err => reject(err));
    });

    const runner = (callback) => {
      cancelSubscription()
        .then(() => PurchasesCollection.upsert({
          email,
        }, {
          $set: {
            pendingCancelation: true,
          },
        }))
        .then(() => {
          callback(null);
        })
        .catch(({ message }) => {
          callback(new Meteor.Error('subscriptionError', message));
        });
    };

    const runnerSync = Meteor.wrapAsync(runner);
    return runnerSync();
  },
});

export default {};
