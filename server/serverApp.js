const express = require('express');
const path = require('path');
const database = require('../database');

const app = express();

app.use(express.static('./client/public'));

app.get('/:stock_id/suggestions', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public', 'index.html'))
})

// /api/:stockname/suggestions  /api/stocks/23/suggestions
app.get('/api/stocks/:stock_id/suggestions', (req, res) => {

    database.getRelatedStocks(req.params.stock_id, (err1,data1) => {
        if (err1) {
            res.status(500).send(err1)
        } else {
        database.getStockInfo((err2, data2)=>{
            if (err2){
                res.status(500).send(err2);
            } else {
                let output = {data1:data1, data2:data2}
                res.status(200).send(output)
            }
        }) 
    }

})
})


module.exports = app;
