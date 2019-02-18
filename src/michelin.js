const rp = require('request-promise');
const $ = require('cheerio');
//const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin?indirect=278';
//const urlRestaurantMichelin = require('./urlRestaurantMichelin');
const urlRestaurantMichelin2 = require('./urlRestaurantMichelin2');


exports.grabAllNames = async function grabAllNames (){

  const listeChefEtEtoile=[];
  const listeUrl = [];
  for(var i=1;i<36;i++){
    listeUrl.push("https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i+"?indirect=278")
  }

  try{

    for(var i=0;i<listeUrl.length;i++){
      var nomChefEtEtoile = await urlRestaurantMichelin2.grabUrlAndName(listeUrl[i]);
      for(let j=0;j<nomChefEtEtoile.length;j++){

        listeChefEtEtoile.push(nomChefEtEtoile[j]);
      }
      console.log("Analyse de la page "+(i+1)+"/35 du site michelin");

    }
  }
  catch(error){
    console.log(error);
  }

  return listeChefEtEtoile;
}
/*
rp(url)
    .then(function(html){
      const listeUrl = [];
      for(var i=1;i<36;i++){
        listeUrl.push("https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i+"?indirect=278")
      }
      return Promise.all(
        listeUrl.map(function(url){
          return urlRestaurantMichelin(url);
        })
      );
    })
    .then(function(listeNom){
      console.log(listeNom);
    })
    .catch(function(err){
      //handle error
});*/
