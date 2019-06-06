var mongoose = require('mongoose')

var Records = mongoose.Schema({
email:String,
password:String
})

module.exports = mongoose.model('Records', Records)