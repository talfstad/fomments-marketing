import { Meteor } from 'meteor/meteor';
import { Sections } from '/imports/api/collections/products/sections';
import { SECTIONS_SUB } from '/imports/actions/products/sections/load';

Meteor.publish(SECTIONS_SUB, () => Sections.find());
