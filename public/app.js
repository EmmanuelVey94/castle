const rp = require('request-promise');
const $ = require('cheerio');
const castle = require('./castle');
const url = 'https://www.relaischateaux.com';

rp(url)
    .then(function(){

      return castle();
    })
    .then(function(liste){
      console.log(liste);

    })
    .catch(function(err){
      //handle error
});
