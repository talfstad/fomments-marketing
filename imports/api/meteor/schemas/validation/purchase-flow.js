import SimpleSchema from 'simpl-schema';
import { EmailAddress } from '../user';

const CreateAccountAndPurchaseSchema = new SimpleSchema({
  email: EmailAddress,
  password: {
    type: String,
    min: 8,
  },
  fullName: {
    type: String,
  },
});

export default CreateAccountAndPurchaseSchema;
