import Purchases from '/imports/api/meteor/collections/purchases';
import { PURCHASES_SUB } from '/imports/actions/products/purchases/load';

Meteor.publish(PURCHASES_SUB, function () {
  return Purchases.find({
    userId: this.userId,
  });
});
