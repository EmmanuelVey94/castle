const rp = require('request-promise');
const $ = require('cheerio');
const urlDepart = 'https://www.relaischateaux.com/fr/site-map/etablissements';

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
