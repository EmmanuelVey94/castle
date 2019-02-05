const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin?indirect=278';

rp(url)
  .then(function(html){
    //success!
var temp;
    var listeNom = [];
    var container = $('.poi-search-result',html);
    container.find('li').each(function(i,elem){
    temp = ($(this).find('div').attr('attr-gtm-title'));
    if(temp != null){
      listeNom.push(temp);
    }
      //console.log($(this).first('a'));
    })


  //console.log($(this).first('a'));


    console.log(listeNom);
  })
  .catch(function(err){
    //handle error
  });
