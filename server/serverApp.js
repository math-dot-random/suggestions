const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./client/public'));

// /api/:stockname/suggestions
app.get('/api/:stock_id/suggestions', (req, res) => {
    database.getRelatedStocks(req.params.stock_id, (err, data)=>{
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    })
})

app.get('/api/:stock_id/suggestions/:related_stock', (req, res) => {
    database.getStockInfo((err, data)=>{
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    })
})

app.get('/:stock_id/suggestions', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public', 'index.html'))})
    // Route path: /users/:userId/books/:bookId
    // Request URL: http://localhost:3000/users/34/books/8989
    // req.params: { "userId": "34", "bookId": "8989" }
    // To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
    
    // app.get('/users/:userId/books/:bookId', function (req, res) {
    //   res.send(req.params)
    // })


//   database.getAllStockInfo((err1, data1) => {
//       if (err1) {  
//           res.status(500).send(err1)
//       } else {
//         database.getAllRelatedInfo( (err2, data2)=>{
//             if (err2){
//                 res.status(500).send(err2);
//             } else {
//                 res.status(200).send({data1, data2})
//             }
//         })
          
//       }
//   })





module.exports = app;