import SimpleSchema from 'simpl-schema';
import { EmailAddress } from '../user';

const LoginValidationSchema = new SimpleSchema({
  email: EmailAddress,
  password: {
    type: String,
    min: 8,
  },
});

export default LoginValidationSchema;
