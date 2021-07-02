require('dotenv').config();

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;


const keys = {
   consumer_key: CONSUMER_KEY,
   consumer_secret: CONSUMER_SECRET,
   access_token: ACCESS_TOKEN,
   access_token_secret: ACCESS_TOKEN_SECRET,
   timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
   strictSSL: true,     // optional - requires SSL certificates to be valid.
}

module.exports = keys;
