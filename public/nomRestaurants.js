const rp = require('request-promise');
const $ = require('cheerio');

const nomRestaurants = function(url){

  return rp(url)
    .then(function(html){
      //success!
      var temp;
      var listeNom = [];
      var container = $('.poi-search-result',html);
      container.find('li').each(function(i,elem){
      temp = ($(this).find('div').attr('attr-gtm-title'));
        if(temp != null){
          listeNom.push(temp);
        //  console.log(temp);
        }
      })
      return listeNom;
    })
    .catch(function(err){
      //handle error
    });
}
module.exports = nomRestaurants;
