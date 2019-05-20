var mysql = require('mysql');
var mysqlConfig = require('./dbconfig');

var connection = mysql.createConnection(mysqlConfig);

// var getAllUsers = function(res,cb) {
//   connection.query(`Select * FROM users` , cb)
// };

const handleResponse = function(err, data, res) {
  if (err) {
    res.status(500);
    res.send(err);
  } else {
    res.status(200);
    res.send(data);
  }
}


// const getAll = function(res) {
//   connection.query('SELECT * FROM users', (err, data) => {handleResponse(err, data, res)});
// }

const getAll = function(res) {
  connection.query('SELECT * FROM stock_info', (err, data) => {handleResponse(err, data, res)});
}

// CORRECT
// const getAll = function(callback) {
//   connection.query('SELECT * FROM users', (err, data) => {
//     if(err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   })
// }



module.exports ={getAll: getAll}

