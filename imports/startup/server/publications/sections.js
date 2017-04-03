import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import Sections from '/imports/api/meteor/collections/sections';
import Purchases from '/imports/api/meteor/collections/purchases';
import { SECTIONS_SUB } from '/imports/actions/products/sections/load';

Meteor.publish(SECTIONS_SUB, function () {
  const self = this;

  // sections is keyed by _id
  let sections = {};

  // Parent Sections Collecction Listener
  const sectionsSubHandle = Sections.find({}).observeChanges({
    added(id, fields) {
      sections = {
        ...sections,
        [id]: {
          _id: id,
          ...fields,
        },
      };
      self.added('sections', id, fields);
    },

    changed(id, fields) {
      sections = {
        ...sections,
        [fields._id]: {
          ...sections[fields._id],
          ...fields,
        },
      };
      self.changed('sections', id, fields);
    },

    removed(id) {
      sections = _.pickBy(sections, o => o._id !== id);
      self.removed('sections', id);
    },
  });

  const getSectionIdWithPurchase = purchaseId => Object.keys(sections).filter((sectionId) => {
    const { purchase = {} } = sections[sectionId];
    return (purchase._id === purchaseId);
  });

  // Sub Document purchases!
  const { userId } = this;
  const purchasesSubHandle = Purchases.find({ userId }).observeChanges({
    added(id, fields) {
      const changedSection = {
        ...sections[fields.sectionId],
        purchase: {
          _id: id,
          ...fields,
        },
      };

      // update sections
      sections = {
        ...sections,
        [fields.sectionId]: changedSection,
      };

      self.changed('sections', fields.sectionId, changedSection);
    },

    changed(id, fields) {
      const [sectionIdWithPurchase] = getSectionIdWithPurchase(id);
      const changedSection = {
        ...sections[sectionIdWithPurchase],
        purchase: {
          ...sections[sectionIdWithPurchase].purchase,
          ...fields,
        },
      };

      sections = {
        ...sections,
        [sectionIdWithPurchase]: changedSection,
      };

      self.changed('sections', sectionIdWithPurchase, changedSection);
    },

    removed(id) {
      const [sectionIdWithPurchase] = getSectionIdWithPurchase(id);

      sections = {
        ...sections,
        [sectionIdWithPurchase]: _.omit(sections[sectionIdWithPurchase], ['purchase']),
      };
      // Setting undefined will remove the key (meteor docs: https://docs.meteor.com/api/pubsub.html)
      self.changed('sections', sectionIdWithPurchase, { purchase: undefined });
    },
  });

  self.ready();

  self.onStop(() => {
    sectionsSubHandle.stop();
    purchasesSubHandle.stop();
  });
});
