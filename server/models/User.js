const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    roles: [{
        type: String,
        required: false
    }],
    attributes: [{
        type: Object,
        required: false
    }],
});

User.plugin(passportLocalMongoose, {
    limitAttempts: true,
    maxAttempts: 10,
    interval: 100,
    iterations: 5000,
    digestAlgorithm: 'sha1',
    maxInterval: 300000,
    usernameField: "email",
    // usernameUnique: false,
    TooManyAttemptsError:
      "Account locked due to too many failed login attempts. Please reset your password to unlock your account.",
  });

module.exports = mongoose.model('User', User);