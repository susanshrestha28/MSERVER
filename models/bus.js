var mongoose =require('mongoose')

module.exports = BusModel = mongoose.model("bus", {
    latitude: String,
    longitude: String,
    id:String
});