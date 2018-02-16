import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Stripe from 'stripe';
import PurchasesCollection from '/imports/api/meteor/collections/purchases';

Meteor.methods({
  reactivateSubscription({ email, subscriptionId }) {
    check({
      email,
      subscriptionId,
    }, { email: String, subscriptionId: String });

    const {
      STRIPE_API_KEY,
      FOMMENTS_STRIPE_PLAN_ID,
    } = Meteor.settings; // note this is the private key
    const stripe = Stripe(STRIPE_API_KEY);

    const getSubscription = () => new Promise((resolve, reject) => {
      stripe.subscriptions.retrieve(subscriptionId)
        .then(subscription => resolve(subscription))
        .catch(err => reject(err));
    });

    const reactivateSubscription = () => new Promise((resolve, reject) => {
      getSubscription()
        .then(subscription =>
          stripe.subscriptions.update(subscriptionId, {
            items: [{
              id: subscription.items.data[0].id,
              plan: FOMMENTS_STRIPE_PLAN_ID,
            }],
          })
            .then(() => resolve())
            .catch(err => reject(err)));
    });

    const runner = (callback) => {
      reactivateSubscription()
        .then(() => PurchasesCollection.upsert({
          email,
        }, {
          $set: {
            pendingCancelation: false,
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
