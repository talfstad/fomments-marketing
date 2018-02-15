import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Stripe from 'stripe';
import PurchasesCollection from '/imports/api/meteor/collections/purchases';

// TODO: we can get duplicate customers if charge fails still if they refresh
// to avoid this we need to persist customerId with purchase. need to make sure
// we know the purchase has a key for this product type and that it states
// the product is not active. we can call find one on the collection for the
// input email and boom we have customerId.
Meteor.methods({
  processSubscription(args, previousAttemptData = {}) {
    check(args, { email: String, fullName: String, cardInformation: Object });
    const { email, cardInformation } = args;

    let paymentTransactionToSave = {
      ...previousAttemptData,
      email,
      createdAt: new Date(),
    }; // Object will hold our final payment info
    const updatePaymentTransactionToSave = (newInfo) => {
      paymentTransactionToSave = {
        ...paymentTransactionToSave,
        ...newInfo,
      };
    };

    const { STRIPE_API_KEY } = Meteor.settings; // note this is the private key
    const stripe = Stripe(STRIPE_API_KEY);

    const createCustomer = () => new Promise((resolve, reject) => {
      const { customerId } = paymentTransactionToSave;
      if (!customerId) {
        stripe.customers.create({
          email,
          source: cardInformation.source.id,
        })
          .then(({ id }) => {
            updatePaymentTransactionToSave({
              customerId: id,
            });
            resolve();
          })
          .catch(err => reject(err));
      } else {
        // Update customer's source to incoming source
        stripe.customers.update(customerId, {
          source: cardInformation.source.id,
        })
          .then(() => {
            resolve();
          })
          .catch(err => reject(err));
      }
    });

    const attachCustomerToSubscription = () => new Promise((resolve, reject) => {
      const { subscriptionId } = paymentTransactionToSave;
      if (!subscriptionId) {
        stripe.subscriptions.create({
          customer: paymentTransactionToSave.customerId,
          items: [
            {
              plan: 'fomments',
            },
          ],
        })
          .then((response) => {
            updatePaymentTransactionToSave({
              subscriptionId: response.id,
              currentPeriodEnd: new Date(response.current_period_end * 1000), // unix timestamp
              canceled: false,
              pendingCancelation: false,
            });
            resolve();
          })
          .catch(err => reject(err));
      } else {
        resolve();
      }
    });

    const runner = (callback) => {
      createCustomer()
        .then(() => attachCustomerToSubscription())
        .then(() => PurchasesCollection.insert(paymentTransactionToSave))
        .then(() => {
          callback(null);
        })
        .catch(({ message }) => {
          callback(new Meteor.Error('subscriptionError', message, paymentTransactionToSave));
        });
    };

    const runnerSync = Meteor.wrapAsync(runner);
    return runnerSync();
  },
});

export default {};
