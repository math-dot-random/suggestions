const mysql = require('mysql');
const mysqlConfig = require('./dbconfig.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

// const getAllStockInfo  = (callback) => {
//   connection.query(`SELECT * FROM stock_info`, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
      
//       callback(null,data)
//     }
//   })
// }
// const getAllRelatedInfo = (callback) => {
//   connection.query(`SELECT * FROM related_stocks`, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null,data)
//     }
//   })
// }

const getRelatedStocks = (stock_id, callback) => { 
  connection.query(`select * from stock_info inner join related_stocks where stock_info.id = ${stock_id} AND related_stocks.stock_id = stock_info.id`, (err,data) => {
    if (err) {
      callback(err);
    } else {
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

