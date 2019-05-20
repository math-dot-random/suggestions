var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database');
var app = express();
app.use(bodyParser.json() );


// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '../client/public'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/api/users', function (req, res) {
//   db.getAllUsers(req.body.name, req.body.id, req.body.balance, res, (err,data) =>{
//     if(err){
//       res.status(500);
//       res.send(err);
//     } else{
//       res.status(200);
//       res.send(data)
//     }
//   })

// });


app.get('/api/tesla/suggestions', (req, res) => {
  database.getAll(res);
})

//CORRECT
// app.get('/api/users', (req, res) => {
//   db.getAll((err, data) => {
//     if (err) {
//       res.status(500);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.send(data);
//     }
//   });
// })

app.listen(3050, function() {
  console.log('listening on port 3050!');
});

// In your express server server/index.js, add a route that will respond to GET requests to /api/users 
// with an array of all users (including name, id, and balance).

module.exports = {express}// nodedbconnection
// create big data File. all insertions inside. mysql -u root .
//