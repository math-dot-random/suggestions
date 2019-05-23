var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database');
const path = require('path');

var app = express();
app.use(bodyParser.json() );


app.use(express.static(path.join(__dirname, '../client/public')));


app.get('/api/tesla/suggestions', (req, res) => {
  database.getAll(res);
})

module.exports = {express}