const rp = require('request-promise');
//const $ = require('cheerio');
//const urlDepart = 'https://www.relaischateaux.com/fr/site-map/etablissements';
const cheerio = require('cheerio');

exports.grabChefName = async function grabChefName (url){
  const option = {
    uri: url,
    transform: function (body){
      return cheerio.load(body);
    }
  };
  var text = "France";
  var listeFrance;
  var listeLienEtChef=[];
  try{
    let $ = await rp(option);
    $("#countryF").find('h3').each(function(i,elem){
      if($(this).text()==text){
        listeFrance=$(this).next().find('li').each(function(i,elem){
          var urlHotel = String($(this).find('a').attr('href'));
          var chef = String($(this).find('a').next().attr('href'));
          if(chef.slice(34,38)=="chef"){
            chef = chef.slice(39);
            var nomPrenom = chef.split('-');
            chef='';
            for(let i=0;i<nomPrenom.length-1;i++){
              chef=chef + nomPrenom[i]+" ";
            }
            chef = chef + nomPrenom[nomPrenom.length-1];

          }else{
            chef="";
          }
          if(chef != ""){

            listeLienEtChef.push({urlHotel,chef});
          }
        });
      }
    });
    //console.log($(this).first('a'));
  }
  catch(error){
    console.log(error);
  }

  return listeLienEtChef;
}
/*
const castle = function(){
  return rp(urlDepart)
    .then(function(html){
      var text = "France";
      var listeFrance;
      var listeLien=[];
      var quatre = $("#countryF", html);
      quatre.find('h3').each(function(i,elem){
        if($(this).text()==text){
          listeFrance=$(this).next();
        }
      });
      count=0;
      listeFrance.find('li').each(function(i,elem){
        var urlHotel = String($(this).find('a').attr('href'));
        var chef = String($(this).find('a').next().attr('href'));
        if(chef.slice(34,38)=="chef"){
          chef = chef.slice(39);
        }else{
          chef="";
        }
        if(chef != ""){
          listeLien.push({urlHotel,chef});
        }
      //console.log($(this).first('a'));
      })
      return listeLien;
    })
    .catch(function(err){
      //handle error
    });
}
module.exports = castle;
*/
