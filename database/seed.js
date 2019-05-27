const mysql = require('mysql');
const config = require('./dbconfig.js');
const stockData = require('../stockData.js');
const connection = mysql.createConnection(config);

for(var i = 0; i<stockData.stock.length; i++){
connection.query(`INSERT INTO stock_info(stock_name, analyst_buy, current_stock_price, price_change, url) VALUES ("${stockData.stock[i].stockname}",
 "${stockData.stock[i].buyPercentage}", "${stockData.stock[i].currentPrice}", "${stockData.stock[i].changePercent}", "${stockData.stock[i].url}")`);
}



var relatedStock = function (){
  const data = {};
  let stockId = 1;

  for(let i = 1; i <=400; i++){
    data.id= i;
    data.otherStockId=getRandomInt(1,100);
    if(i%4 === 0){
      stockId++
    }
    data.stockId = stockId
// console.log('stockid', stockId)
// console.log('otherstock', data.otherStockId)
    setRelatedId(data.stockId, data.otherStockId);
  }
}

function setRelatedId(primaryId, secondaryId) {
  connection.query(`INSERT INTO related_stocks (stock_id, other_stock_id) VALUES ("${primaryId}", "${secondaryId}")`);
}

// function getRelatedIds(primaryId) {
//   // return an array of all secondary Ids related to the primary Id.
// }

// function getStockPrice(primaryId) {
//   //price


// }


relatedStock()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

connection.end();

module.exports = connection;

