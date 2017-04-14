Accounts.urls.resetPassword = token =>
  Meteor.absoluteUrl(`reset-password/${token}`);

Accounts.emailTemplates.resetPassword.from = () => 'no-reply@fomments.com';

process.env.MAIL_URL = 'smtp://trevor@buildcave.com:mK8tzWXY0Z7cAbhV@smtp-relay.sendinblue.com:587';
