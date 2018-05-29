const Raven = require('raven');
require('dotenv').load();

Raven.config(process.env.SENTRY_CONFIG).install();

const isError = process.argv.slice(2).toString();

try {
  if (isError) {
    throw new Error(`A very bad error occured on ${new Date().toISOString()}`);
  }
} catch (e) {
  Raven.captureException(e);
}
