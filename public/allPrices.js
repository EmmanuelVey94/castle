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
      lesPrix.push({url,chef,prix});
    }
  }
  catch(error){
    console.log(error);
  }

  return lesPrix;
}
