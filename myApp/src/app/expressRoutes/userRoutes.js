// coinRoutes.js

var express = require('express');
var userRoutes = express.Router();

// Require Item model in our routes module
var user = require('../models/User');

// Defined store route
coinRoutes.route('/add').post(function (req, res) {
  var user = new User(req.body);
   User.save()
    .then(item => {
    res.status(200).json({'user': 'user added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
coinRoutes.route('/').get(function (req, res) {
   Coin.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
coinRoutes.route('/update/:id').post(function (req, res) {
   Coin.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.id = req.body.id;
      

      user.save().then(coin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
coinRoutes.route('/delete/:id').get(function (req, res) {
   Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;
