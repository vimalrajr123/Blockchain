var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//importing blockchain
const Blockchain= require('./blockchain');
//creating instance
const bitcoin = new Blockchain();

//this endpoint give the entire blockchain
app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

//this endpoint create a new transaction
app.post('/transaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender,req.body.recipient);
    res.json({note:`transaction will be added in block 4{blockindex}.`});
});

//this endpoint mine a new block
app.get('/mine', function (req, res) {

});

app.listen(3000, function(){
    console.log('listening on port 3000k....');
});