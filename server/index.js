const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const database = require('../database/controller.js')
const PORT = 3000;

app.use(express.static('client/public'))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log('Server is listening on port:', PORT);
})