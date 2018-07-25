const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./api');
const api1 = require('./api1');
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  next();
});

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


  


// API location
app.use('/api', api);
app.use('/api1', api1);

// Send all other requests to the Angular app
var body = app.get('*', function (req, res) {

  res.sendFile('api.js', { root: __dirname });
});


var body1 = app.get('*', function (req, res) {

  res.sendFile('api1.js', { root: __dirname });
});


app.post('/get', function (req, res) {

  res.end(JSON.stringify(body))
});

app.post('/delete', function (req, res) {

  res.end(JSON.stringify(body1))
});
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));