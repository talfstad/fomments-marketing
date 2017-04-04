import SimpleSchema from 'simpl-schema';

const SectionSchema = new SimpleSchema({
  createdAt: {
    type: Date,
  },
  lastUpdated: {
    type: Date,
  },
  name: {
    type: String,
  },
  vertical: {
    type: String,
  },
  language: {
    type: String,
  },
  price: {
    type: Number,
  },
  sectionId: {
    type: String,
  },
});

export default SectionSchema;
