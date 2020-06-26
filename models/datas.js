var mongoose = require('mongoose');

module.exports = DatasModel = mongoose.model("busdatas", {
    email: String,
    password: String,
    firstName: String,
    profilePic: String
});
