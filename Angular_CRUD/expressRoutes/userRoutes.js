var express = require('express');
var userRoutes = express.Router();

// Require Item model in our routes module
var User = require('../models/User');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  var user = new User(req.body);
   user.save()
    .then(item => {
    res.status(200).json({'user': 'User added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
   User.find(function (err, users){
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
  user.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
   user.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.userName = req.body.userName;
      user.password = req.body.password;

      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
   User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;
