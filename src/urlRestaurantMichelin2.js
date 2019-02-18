const rp = require('request-promise');
const cheerio = require('cheerio');
const nomChefMichelin2 = require('./nomChefMichelin2');

exports.grabUrlAndName = async function grabUrlAndName (url){
  const option = {
    uri: url,
    transform: function (body){
      return cheerio.load(body);
    }
  };
  var temp;
  var listeUrl = [];
  var listeChefEtEtoile=[];
  try{
    let $ = await rp(option);
    var container = $('.poi-card-link').each(function(){
      temp = ($(this).attr('href'));
      listeUrl.push("https://restaurant.michelin.fr"+temp);
    });

    for(var i=0;i<listeUrl.length;i++){
      var nomChefEtEtoile = await nomChefMichelin2.grabChefName(listeUrl[i]);
      listeChefEtEtoile.push(nomChefEtEtoile);
    }
  }
  catch(error){
    console.log(error);
  }

  return listeChefEtEtoile;
}
