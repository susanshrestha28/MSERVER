var express     = require('express');
var app = express();

var gpsController = require('./controllers/GpsController')
var routes = express.Router();

console.log('Routes')
routes.get('/get-locations', gpsController.getLocations)
routes.get('/get-bus', gpsController.getBuses)
routes.post('/add-data',gpsController.addData)
routes.post('/datas',gpsController.datas)
module.exports = routes
