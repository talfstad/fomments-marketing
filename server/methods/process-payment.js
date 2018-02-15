import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Stripe from 'stripe';
import PurchasesCollection from '/imports/api/meteor/collections/purchases';

Meteor.methods({
  processSubscription(args) {
    check(args, { email: String, fullName: String, cardInformation: Object });
    const { email, cardInformation } = args;

    // previous attempt data
    const customerPurchase = PurchasesCollection.findOne({ email });

    let paymentTransactionToSave = {
      ...customerPurchase,
      email,
      createdAt: new Date(),
      pendingCancelation: false,
      canceled: false,
      active: false,
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
              active: true,
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
        .then(() => PurchasesCollection.upsert({
          email,
        }, {
          $set: {
            ...paymentTransactionToSave,
          },
        }))
        .then(() => {
          callback(null);
        })
        .catch(({ message }) => {
          // Error, persist current state of purchase
          PurchasesCollection.upsert({
            email,
          }, {
            $set: {
              ...paymentTransactionToSave,
            },
          });
          callback(new Meteor.Error('subscriptionError', message));
        });
    };

    const runnerSync = Meteor.wrapAsync(runner);
    return runnerSync();
  },
});

export default {};
