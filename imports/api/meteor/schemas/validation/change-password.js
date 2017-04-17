import SimpleSchema from 'simpl-schema';

const ChangePasswordValidationSchema = new SimpleSchema({
  oldPassword: {
    type: String,
  },
  newPassword: {
    type: String,
    min: 6,
  },
});

export default ChangePasswordValidationSchema;
