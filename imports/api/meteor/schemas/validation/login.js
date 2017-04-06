import SimpleSchema from 'simpl-schema';
import { EmailAddress } from '../user';

const LoginValidationSchema = new SimpleSchema({
  email: EmailAddress,
  password: {
    type: String,
  },
});

export default LoginValidationSchema;
