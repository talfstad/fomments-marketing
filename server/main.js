import { Meteor } from 'meteor/meteor';

// Import REST API
import '../imports/rest-api/';

Meteor.startup(() => {
  // smtp://USERNAME:PASSWORD@HOST:PORT
  process.env.MAIL_URL = 'smtp://trevor@buildcave.com:mK8tzWXY0Z7cAbhV@smtp-relay.sendinblue.com:587';

  // code to run on server at startup
});
