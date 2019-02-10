const rp = require('request-promise');
const $ = require('cheerio');

const nomChefMichelin = function(url){

return  rp(url)
    .then(function(html){
      //success!
      var chef='';

      var container = $('.field--name-field-chef',html);
      chef = container.find('div').children().text();
      return chef;
      })
    .catch(function(err){
      //handle error
    });
}
module.exports = nomChefMichelin;
