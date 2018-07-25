var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  userName: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);