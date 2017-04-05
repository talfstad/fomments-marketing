import { ValidatedMethod } from 'meteor/mdg:validated-method';

import LoginValidationSchema from '../schemas/validation/login';

const LoginOrCreateUser = new ValidatedMethod({
  name: 'signinOrCreateUser',
  validate: LoginValidationSchema.validator(),
  run({ email, password }) {

  },
});

export default LoginOrCreateUser;
