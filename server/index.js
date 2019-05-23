var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database');
const path = require('path');

var app = express();
app.use(bodyParser.json() );


app.use(express.static(path.join(__dirname, '../client/public')));


app.listen(3050, function() {
  console.log('listening on port 3050!');
});
module.exports = {express}/