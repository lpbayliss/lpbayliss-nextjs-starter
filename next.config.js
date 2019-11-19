require('dotenv').config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    REALTIME_GRAPHQL_ENDPOINT: process.env.REALTIME_GRAPHQL_ENDPOINT,
  },
};
