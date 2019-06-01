const mysql = require('mysql');
const mysqlConfig = require('./dbconfig.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const getRelatedStocks = (stock_id, callback) => { 

  connection.query(`select * from stock_info inner join related_stocks on stock_info.id = ? where related_stocks.stock_id = stock_info.id` , [stock_id], (err,data) => {
    if (err) {
      callback(err);
    } else {
      console.log('data from db',data);
      callback(null,data)
    }
  })
}

const getStockInfo = (callback) => {

  connection.query(`select * from stock_info`, (err,data) => {
    if (err) {
      callback(err);
    } else {
      callback(null,data)
    }
  })
}

module.exports = {
  getRelatedStocks, getStockInfo
}

