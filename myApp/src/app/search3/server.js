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

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  var dbo = db.db("mydb");
  var names = [{"id":"135","firstName":"Sara","lastName":"Alawneh"},
  {"id":"144","firstName":"Someone First Name","lastName":"Yoda"},
  {"id":"154","firstName":"Luke","lastName":"Moliku"},
  {"id":"155","firstName":"Louis","lastName":"Whateveryournameis"},
  {"id":"156","firstName":"Someone First Name","lastName":"Lara"},
  {"id":"157","firstName":"Zed","lastName":"Kyle"},
  {"id":"161","firstName":"Foo","lastName":"Lara"},
  {"id":"167","firstName":"Toto","lastName":"Someone Last Name"},
  {"id":"171","firstName":"Superman","lastName":"Kyle"},
  {"id":"175","firstName":"Luke","lastName":"Moliku"},
  {"id":"184","firstName":"Toto","lastName":"Bar"},
  {"id":"187","firstName":"Someone First Name","lastName":"Bar"},
  {"id":"188","firstName":"Superman","lastName":"Bar"},
  {"id":"198","firstName":"Foo","lastName":"Bar"},
  {"id":"199","firstName":"Foo","lastName":"Moliku"},
  {"id":"203","firstName":"Zed","lastName":"Kyle"},
  {"id":"208","firstName":"Luke","lastName":"Someone Last Name"},
  {"id":"212","firstName":"Foo","lastName":"Moliku"},
  {"id":"221","firstName":"Zed","lastName":"Lara"},
  {"id":"222","firstName":"Foo","lastName":"Moliku"},
  {"id":"223","firstName":"Toto","lastName":"Yoda"},
  {"id":"225","firstName":"Toto","lastName":"Titi"},
  {"id":"228","firstName":"Superman","lastName":"Someone Last Name"},
  {"id":"233","firstName":"Someone First Name","lastName":"Moliku"},
  {"id":"240","firstName":"Luke","lastName":"Yoda"},
  {"id":"243","firstName":"Superman","lastName":"Someone Last Name"},
  {"id":"244","firstName":"Zed","lastName":"Titi"},
  {"id":"247","firstName":"Zed","lastName":"Kyle"},
  {"id":"252","firstName":"Cartman","lastName":"Moliku"},
  {"id":"255","firstName":"Louis","lastName":"Kyle"},
  {"id":"258","firstName":"Someone First Name","lastName":"Moliku"},
  {"id":"260","firstName":"Toto","lastName":"Lara"},
  {"id":"274","firstName":"Toto","lastName":"Lara"},
  {"id":"275","firstName":"Louis","lastName":"Kyle"},
  {"id":"282","firstName":"Luke","lastName":"Lara"},
  {"id":"283","firstName":"Batman","lastName":"Someone Last Name"},
  {"id":"286","firstName":"Batman","lastName":"Moliku"},
  {"id":"287","firstName":"Someone First Name","lastName":"Bar"},
  {"id":"291","firstName":"Louis","lastName":"Titi"},
  {"id":"294","firstName":"Batman","lastName":"Bar"},
  {"id":"299","firstName":"Superman","lastName":"Kyle"},
  {"id":"302","firstName":"Louis","lastName":"Whateveryournameis"},
  {"id":"304","firstName":"Luke","lastName":"Someone Last Name"},
  {"id":"305","firstName":"Luke","lastName":"Yoda"},
  {"id":"306","firstName":"Luke","lastName":"Whateveryournameis"},
  {"id":"307","firstName":"Cartman","lastName":"Bar"},
  {"id":"308","firstName":"Louis","lastName":"Kyle"},
  {"id":"318","firstName":"Superman","lastName":"Yoda"},
  {"id":"319","firstName":"Foo","lastName":"Whateveryournameis"},
  {"id":"321","firstName":"Luke","lastName":"Kyle"},
  {"id":"326","firstName":"Louis","lastName":"Bar"},
  {"id":"327","firstName":"Toto","lastName":"Bar"},
  {"id":"334","firstName":"Batman","lastName":"Someone Last Name"},
  {"id":"339","firstName":"Foo","lastName":"Bar"},
  {"id":"344","firstName":"Louis","lastName":"Lara"},
  {"id":"349","firstName":"Someone First Name","lastName":"Whateveryournameis"},
  {"id":"355","firstName":"Foo","lastName":"Moliku"},
  {"id":"356","firstName":"Batman","lastName":"Kyle"},
  {"id":"359","firstName":"Superman","lastName":"Moliku"},
  {"id":"375","firstName":"Someone First Name","lastName":"Bar"},
  {"id":"381","firstName":"Luke","lastName":"Yoda"},
  {"id":"382","firstName":"Someone First Name","lastName":"Bar"},
  {"id":"390","firstName":"Superman","lastName":"Lara"},
  {"id":"392","firstName":"Someone First Name","lastName":"Lara"},
  {"id":"395","firstName":"Luke","lastName":"Bar"}
];
  dbo.collection("customers").insertMany(names, function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    app.get('/', function (req, resp) {
		resp.sendFile('res', {root : __dirname});
	
    });
    
    app.post('/', function (req, resp) {
  

        resp.end(JSON.stringify(res.json));});
      
    db.close();
  });
});

app.listen(8080);
/*

app.get('/', function (req, res) {
	
	
});


app.post('/', function (req, res) {
  

    res.end(JSON.stringify(names));});
  

   

  app.listen(8080);*/