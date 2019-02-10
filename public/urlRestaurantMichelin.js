const rp = require('request-promise');
const $ = require('cheerio');
const nomChefMichelin = require('./nomChefMichelin');

const urlRestaurantMichelin = function(url){

  return rp(url)
    .then(function(html){
      //success!
      var temp;
      var listeUrl = [];
      var container = $('.poi-search-result',html);
      container.find('li').each(function(i,elem){
      temp = ($(this).find('div').children().attr('href'));
        listeUrl.push("https://restaurant.michelin.fr"+temp)
      })
      console.log(listeUrl);
      return listeUrl;
    })
    .then(function(listeUrl){
        listeChef=[];
        for(var i=0;i<listeUrl.length;i++){

          listeChef.push(nomChefMichelin(listeUrl[i]));
        }
        return listeChef
    })
    .catch(function(err){
      //handle error
    });
}
module.exports = urlRestaurantMichelin;
