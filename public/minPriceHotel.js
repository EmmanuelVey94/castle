const rp = require('request-promise');
const cheerio = require('cheerio');

exports.grapPriceHotel = async function grabPriceHotel (url){
  const option = {
    uri: url,
    transform: function (body){
      return cheerio.load(body);
    }
  };
  let prix;
  try{
    let $ = await rp(option);
    prix = $('.price').text();
  }
  catch(error){
    console.log(error);
  }

  return prix;
}
