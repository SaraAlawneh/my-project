const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};
var url = 'mongodb://localhost:27017/mydb';

// Get users
router.get('/', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var collection = dbo.collection("customers").find({}).toArray() .then((users) => {
        response.data = users;
        res.json(response);
    })
  });
}); 
router.post('/', function(req, res){
  //Save into orders
  var dbo = db.db("mydb");
  dbo.collection('customers').save(req.body, function(err, result) {
    res.send(true);
    //res.json(result);
    //res.redirect('/');
  });
});

module.exports = router;
 