import _ from 'lodash';
import { Meteor } from 'meteor/meteor';

import {
  Sections,
} from '/imports/api/meteor/collections/';

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

  self.ready();

  self.onStop(() => {
    sectionsSubHandle.stop();
  });
});
