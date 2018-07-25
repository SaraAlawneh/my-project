const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
/*
// Connect


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};
*/
// Response handling

/*let response = {
    status: 200,
    data: [],
    message: null
};*/
/*var url = 'mongodb://localhost:27017/mydb';
var Schema = MongoClient.Schema;  
 
var UsersSchema = new Schema({      
 firstName: { type: String   }, 
 lastName: { type: String   },      
 id: { type: String   },   
},{ versionKey: false });  
   */
  
//var model = MongoClient.model('customers', UsersSchema, 'customers');
// Get users

//var customer = require ('../models/customer');
module.exports = function(router){
    router.post('/customers' , function(req, res){ 
    console.log(req.body);
    var customer = new customer();
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.id = req.body.id;
    customer.save(function(err, data){
        if(err)
        throw err;
        res.json(data);
    });
});
router.get('/customers', function (req, res) {
  
  customer.find({}, function(err, data) {
      res.json(data);
  });
}); 
router.delete('/customer', function (req , res){
    customer.remove({}, function(err){
        res.json({result: err ? 'error' : 'ok'})

    });
});

router.get('/customers/:id', function (req, res) {
  
    customer.findOne({id:req.body.id}, function(err, data) {
        res.json(data);
    });
  }); 

  router.delete('/customer/:id', function (req , res){
    customer.remove({id:req.body.id}, function(err){
        res.json({result: err ? 'error' : 'ok'})

    });
});
router.post('/customers/:id', function(req, res){
    customer.findOne({id:req.body.id}, function(err, data) {
       var customer = data;
       customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.id = req.body.id;
    customer.save(function(err, data){
        if(err)
        throw err;
        res.json(data);
    });
    });
  }); 
}

//module.exports = router;
 