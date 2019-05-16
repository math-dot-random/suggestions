const mysql = require('mysql');
const config = require('./dbconfig.js');
const connection = mysql.createConnection(config);
module.exports = connection;
