import Purchases from '/imports/api/meteor/collections/purchases';
import { PURCHASES_SUB } from '/imports/actions/products/purchases/load';

Meteor.publish(PURCHASES_SUB, () => {
  const user = Meteor.user();
  if (user) {
    const { emails = [{}] } = user;
    const [email] = emails;

    return Purchases.find({
      email: email.address,
      canceled: false,
    });
  }
});
