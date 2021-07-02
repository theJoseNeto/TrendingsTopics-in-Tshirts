//twitter
const Twit = require('twit');
const configKeys = require('../keys');
const twitter = new Twit(configKeys);

class TwitterRequest {

   constructor(woeid) {
      this.data = null;
      this.woeid = woeid;
   }

   dataProcessing(data) {
      let TTtwitter = [];
      let wordsToTshirts = [];

      this.data = data;
      this.data.map((obj) => { TTtwitter.push(obj.trends) });
      TTtwitter[0].map(arr => { wordsToTshirts.push(arr.name) });

      return wordsToTshirts;

   }

   async twitterRequest() {

      let res;

      twitter.get(`https://api.twitter.com/1.1/trends/place.json?id=${this.woeid}`,
         (err, data, response) => {
            if (!err) res = this.dataProcessing(data);
         });

      return res;
   }
}

module.exports = TwitterRequest;



