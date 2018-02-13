import SimpleSchema from 'simpl-schema';

const PurchaseSchema = new SimpleSchema({
  userId: {
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
});

export default PurchaseSchema;
