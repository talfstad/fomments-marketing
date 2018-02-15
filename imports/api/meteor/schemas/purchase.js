import SimpleSchema from 'simpl-schema';

const PurchaseSchema = new SimpleSchema({
  email: {
    type: String,
    optional: true,
  },
  createdAt: {
    type: Date,
    optional: true,
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
    optional: true,
  },
  currentPeriodEnd: {
    type: Date,
    optional: true,
  },
  pendingCancelation: {
    type: Boolean,
    optional: true,
  },
  canceled: {
    type: Boolean,
    optional: true,
  },
});

export default PurchaseSchema;
