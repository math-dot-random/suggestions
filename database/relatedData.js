const mysql = require('mysql');
const config = require('./dbconfig.js');
// const faker = require('faker')
// const stockData = require('../stockData.js');
const connection = mysql.createConnection(config);


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
    connection.query(`INSERT INTO related_stocks (stock_id, other_stock_id) VALUES ("${data.stockId}", "${data.otherStockId}")`);
  }
}


relatedStock()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

connection.end();


//1 month = 21 trading days
//1 month worth of 17 data points a day
//8 hours, 2 data points / hour
//total data points: 100*30*17=51,000

module.exports = connection;

