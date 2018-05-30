var http = require('http');
var express = require('express');

var fs = require('fs');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.get('/', function (req, res) {

  res.sendFile('employee.json', { root: __dirname });
});


app.post('/', function (req, res) {

  res.end(JSON.stringify(employee.json))
});

app.listen(8000);