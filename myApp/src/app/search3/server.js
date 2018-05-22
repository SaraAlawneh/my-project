var http = require('http');
var express = require('express');

var fs = require('fs');
var bodyparser = require('body-parser');

var app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  next();
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
app.get('/',function(req,res){
	
	
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send(result)
    console.log(result);
    db.close();
  });
});
})
app.listen(8000);