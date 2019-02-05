const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.relaischateaux.com/fr/site-map/etablissements';

rp(url)
  .then(function(html){
    //success!
    var text = "France";
    var listeFrance;
    var listeLien=[];
    var listeNom = [];
    var quatre = $("#countryF", html);
    quatre.find('h3').each(function(i,elem){
      if($(this).text()==text){
        listeFrance=$(this).next();
      }
    });
    count=0;
listeFrance.find('li').each(function(i,elem){
  listeLien.push($(this).find('a').attr('href'));

  //console.log($(this).first('a'));
})

    console.log(listeLien);
  })
  .catch(function(err){
    //handle error
  });
