const rp = require('request-promise');
const cheerio = require('cheerio');
const castle = require('./castle');
const michelin = require('./michelin');
//const castle = require('./allPrices');
const url = 'https://www.relaischateaux.com/fr/site-map/etablissements';


Main();

async function Main(){
  //var allNomChefMichelin = await michelin.grabAllNames();
  var allNomHotelChefCastle = await castle.grabChefName(url);

  console.log(allNomChefMichelin);
  console.log(allNomHotelChefCastle);
  var tri = isInside(allNomHotelChefCastle,allNomChefMichelin);
  console.log(tri);
  console.log(tri.length);
  //var allPricesAndUrlAndChef = await allPrices.grabAllPrices(allNomHotelChefCastle);
  //console.log(allPricesAndUrlAndChef);

}

function isInside(tab1,tab2){
  let tabResultat=[];
  for(let i =0;i<tab1.length;i++){
    for(let j=0;j<tab2.length;j++){
      if(tab1[i].chef==tab2[j]){
        tabResultat.push(tab1[i]);
      }
    }
  }

  return tabResultat;
}
