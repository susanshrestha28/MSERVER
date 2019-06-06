var express     = require('express');
var app = express();

var gpsController = require('./controllers/GpsController')
var routes = express.Router();

console.log('Routes')
routes.get('/get-locations', gpsController.getLocations)
routes.post('/add-data',gpsController.addData)

module.exports = routes
