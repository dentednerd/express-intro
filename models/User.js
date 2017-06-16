const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  avatarUrl: String
});

module.exports = mongoose.model('User', UserSchema);

// THIS IS THE MODEL