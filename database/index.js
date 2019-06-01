const mysql = require('mysql');
const mysqlConfig = require('./dbconfig.js');
// const Sequelize = require('sequelize')

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

// const db = new Sequelize('suggestions', 'root', 'pw' {
//   host: '172.17.0.2',
//   dialect: 'mysql'
// })

// db
//   .authenticate()
//   .then(() => {
//     console.log('Successful');
//   })
//   .catch((err) => {
//     console.error('Error,', err);
//   })

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

// module.exports = db;

