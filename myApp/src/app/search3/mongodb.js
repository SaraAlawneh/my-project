

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/';

// Use connect method to connect to the server

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  var dbo = db.db("mydb");
  var names = [{"id":"135","firstName":"Sara","lastName":"Alawneh"},
  {"id":"144","firstName":"Someone First Name","lastName":"Yoda"},
  {"id":"154","firstName":"Luke","lastName":"Moliku"},
  {"id":"155","firstName":"Louis","lastName":"Whateveryournameis"},
  {"id":"156","firstName":"Someone First Name","lastName":"Lara"},
  {"id":"157","firstName":"Zed","lastName":"Kyle"}
];
  dbo.collection("customers").insertMany(names, function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify('Successfully inserted!' ));
    
    });
    
});