const express = require('express');
const server = express();
const cors = require('cors');
const port = process.env.PORT || 3333;
const TwitterRequest = require('./src/utils/twitterReqs');
const { json } = require('express');
// https://codebeautify.org/jsonviewer/f83352
const woeid = {
   NY: 2459115,
   PT: 23424925,
   FR: 613858
}

const newYork = woeid.NY;
const portugal = woeid.PT;
const france = woeid.FR;

server.use(json());

server.use(cors({
   origin: '*',
   methods: ['GET'],
   credentials: true
}));

const TT = new TwitterRequest(1)
server.get(`/toptrending`, async (request, response) => {

   const trendingValue = await TT.twitterRequest();

   console.log(trendingValue);

   response.json({ trendingValue });

});

server.listen(port);

