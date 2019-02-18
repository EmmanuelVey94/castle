const rp = require('request-promise');
const cheerio = require('cheerio');
const minPriceHotel = require('./minPriceHotel');

exports.grabAllPrices = async function grabAllPrices (tableauURL){


  var lesPrix=[];
  try{
    for(var i=0;i<tableauURL.length;i++){
      var prix = await minPriceHotel.grabPriceHotel(tableauURL[i].urlHotel);
      var url = tableauURL[i].urlHotel;
      var chef = tableauURL[i].chef;
      var nom = tableauURL[i].nom;
      var etoile = tableauURL[i].etoile;
      if(prix!=0){
        lesPrix.push({nom,url,chef,prix,etoile});
      }
      console.log("Récupération du prix de l'élément "+i+" des hotels ayant un restaurant étoilé");

    }
  }
  catch(error){
    console.log(error);
  }

  return lesPrix;
}
