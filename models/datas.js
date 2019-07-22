var mongoose = require('mongoose');

module.exports = DatasModel = mongoose.model("busdatas", {
    latitude: String,
    longitude: String
});

