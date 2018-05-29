const Sentry = require('sentry-api').Client;
require('dotenv');

// Create a new client using your Sentry DSN.
const sentry = new Sentry('https://abc123:@app.getsentry.com');

// // If you're using authentication tokens, you'll want to pass the token as
// // a configuration option.
// var sentry = new Sentry('https://abc123:@app.getsentry.com', {
//   token: 'mytoken'
// });

// // You can also leave off the DSN if you're using token authentication and
// // hosted sentry.
// var sentry = new Sentry({
//   token: 'mytoken'
// });

// Retrieve a project using the promise style.
sentry.projects.get('org-slug', 'project-slug')
  .then((project) => {
    console.log(project.name);
  })
  .catch((err) => {
    console.error(err);
  });
