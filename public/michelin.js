const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin?indirect=278';
const nomRestaurants = require('./nomRestaurants');




rp(url)
    .then(function(html){
      const listeUrl = [];
      for(var i=1;i<36;i++){
        listeUrl.push("https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i+"?indirect=278")
      }
      return Promise.all(
        listeUrl.map(function(url){
          return nomRestaurants(url);
        })
      );
    })
    .then(function(listeNom){
      console.log(listeNom);
    })
    .catch(function(err){
      //handle error
});
