// import Meteor from 'meteor/meteor';
import 'simpl-schema';
import sections from './sections';
import purchases from './purchases';
import Schemas from '../schemas';

// Intent: provide a single loading point for all collections to be attached
// to schemas
Meteor.users.attachSchema(Schemas.userSchema);
sections.attachSchema(Schemas.sectionSchema);
purchases.attachSchema(Schemas.purchaseSchema);

export const Sections = sections;
export const Purchases = purchases;
