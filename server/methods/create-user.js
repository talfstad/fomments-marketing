// import { ValidatedMethod } from 'meteor/mdg:validated-method';
//
// import LoginValidationSchema from '/imports/api/meteor/schemas/validation/login';
//
// const CreateNewUser = new ValidatedMethod({
//   name: 'createNewUser',
//   validate: LoginValidationSchema.validator(),
//   run({ email, password }) {
//     const userId = Accounts.createUser({ email, password });
//     Accounts.sendEnrollmentEmail(userId);
//   },
// });
//
// export default CreateNewUser;
//

Accounts.onCreateUser((options, user) => ({
  ...user,
  fullName: options.profile.fullName,
}));
