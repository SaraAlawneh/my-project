var express = require('express');

var fs = require('fs');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', function (req, res) {
	
	res.sendFile('login.html', {root : __dirname});
});


app.post('/login', function (req, res) {
  
   if(req.body.username =='sara' && req.body.password =='123456'){

   fs.readFile('Users.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();});
  }

   else {
   		res.end('error');
   }
  
});


  app.listen(8080);