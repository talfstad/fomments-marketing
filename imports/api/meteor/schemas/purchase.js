import SimpleSchema from 'simpl-schema';

const PurchaseSchema = new SimpleSchema({
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  customerId: {
    type: String,
    optional: true,
  },
  subscriptionId: {
    type: String,
    optional: true,
  },
  active: {
    type: String,
  },
  currentPeriodEnd: {
    type: Date,
    optional: true,
  },
  pendingCancelation: {
    type: Boolean,
  },
  canceled: {
    type: Boolean,
  },
});

export default PurchaseSchema;
