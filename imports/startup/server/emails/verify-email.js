import { Accounts } from 'meteor/accounts-base';

Accounts.emailTemplates.verifyEmail.html = () => {
  // Overrides the value set in `Accounts.emailTemplates.from` when resetting
  // passwords.
  return 'THIS IS THE CUSTOM ENROLLMENT HTML';
};
