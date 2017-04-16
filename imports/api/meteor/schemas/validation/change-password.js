import SimpleSchema from 'simpl-schema';

const ChangePasswordValidationSchema = new SimpleSchema({
  oldPassword: {
    type: String,
    min: 6,
  },
  newPassword: {
    type: String,
  },
});

export default ChangePasswordValidationSchema;
