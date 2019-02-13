const rp = require('request-promise');
const cheerio = require('cheerio');
const nomChefMichelin2 = require('./minPriceHotel');

exports.grabAllPrices = async function grabAllPrices (tableauURL){
  const option = {
    uri: url,
    transform: function (body){
      return cheerio.load(body);
    }
  };
  var temp;

  var lesPrix=[];
  try{
    for(var i=0;i<tableauURL.length;i++){
      var prix = await minPriceHotel.grabPriceHotel(tableauURL[i].urlHotel);

      lesPrix.push({tableauURL[i].urlHotel,tableauURL[i].chef,prix});
    }
  }
  catch(error){
    console.log(error);
  }

  return lesPrix;
}
