var mongoose = require('mongoose');

module.exports = UserModel = mongoose.model("user", {
    latitude: String,
    longitude: String
});

