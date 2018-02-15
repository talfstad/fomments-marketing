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
  },
  subscriptionId: {
    type: String,
  },
  currentPeriodEnd: {
    type: Date,
  },
  pendingCancelation: {
    type: Boolean,
  },
  canceled: {
    type: Boolean,
  },
});

export default PurchaseSchema;
