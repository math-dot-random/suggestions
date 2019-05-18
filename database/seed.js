const mysql = require('mysql');
const config = require('./dbconfig.js');
// const faker = require('faker')
const stockData = require('../stockData.js');
const connection = mysql.createConnection(config);

// for(var i = 0; i < stockData.stock.length; i++){
//   connection.query(`INSERT INTO stock_info (stock_name, analyst_buy, current_stock_price, price_change) VALUES 
//   ('${stockData.stock[i].stockname}','${stockData.stock[i].buyPercentage}', '${stockData.stock[i].currentPrice}', '${stockData.stock[i].changePercent}')`)
// }
for(var i = 0; i<stockData.stock.length; i++){
connection.query(`INSERT INTO stock_info(stock_name, analyst_buy, current_stock_price, price_change) VALUES ("${stockData.stock[i].stockname}",
 "${stockData.stock[i].buyPercentage}", "${stockData.stock[i].currentPrice}", "${stockData.stock[i].changePercent}")`);
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


// CREATE TABLE stock_info ( 
//   id INT AUTO_INCREMENT PRIMARY KEY,ß
//   stock_name VARCHAR(255),
//   analyst_buy INT NOT NULL,
//   current_stock_price INT NOT NULL,
//   price_change INT NOT NULL
//   );
  
  
//   CREATE TABLE related_stocks (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   stock_id INT,
//   other_stock_id INT NOT NULL,
//   FOREIGN KEY (stock_id) REFERENCES stock_info (id)
//   )
  








module.exports = connection;

