import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { handleError } from '/imports/api/meteor/methods-common/method-helpers';
import Stripe from 'stripe';
import PurchasesCollection from '/imports/api/meteor/collections/purchases';

Meteor.methods({
  processSubscription(args) {
    check(args, { email: String, fullName: String, cardInformation: Object });
    const { email, cardInformation } = args;

    const user = Accounts.findUserByEmail(email);
    if (!user) {
      handleError('User not found');
    }

    let paymentTransactionToSave = {
      userId: user._id,
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
      stripe.customers.create({
        email,
        source: cardInformation.source.id,
      })
        .then(({ id }) => resolve(id))
        .catch(err => reject(err));
    });

    const attachCustomerToSubscription = () => new Promise((resolve, reject) => {
      stripe.subscriptions.create({
        customer: paymentTransactionToSave.customerId,
        items: [
          {
            plan: 'fomments',
          },
        ],
      })
        .then(({ id }) => resolve(id))
        .catch(err => reject(err));
    });

    createCustomer()
      .then(id => updatePaymentTransactionToSave({
        customerId: id,
      }))
      .then(() => attachCustomerToSubscription())
      .then(id => updatePaymentTransactionToSave({
        subscriptionId: id,
      }))
      .then(() => PurchasesCollection.insert(paymentTransactionToSave))
      .catch(err => handleError(err));
  },
});

export default {};
