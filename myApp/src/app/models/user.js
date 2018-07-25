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
  id: {
    type: string
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('user', User);