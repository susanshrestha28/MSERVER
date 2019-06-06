var express     = require('express');
var bodyParser  = require('body-parser');
var passport	= require('passport');
var mongoose    = require('mongoose');
var config      = require('./config');
var http = require('http');
var cors        = require('cors'); 
var routes      = require('./routes');
var records     = require('./models/record');
var gpsController = require('./controllers/GpsController');
var app = express();
app.use(cors());

app.get('/', function(req, res) {
    return res.send('Hello! The API is at http://202.166.197.237:' + port + '/location');
});
// get our request parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// Use the passport package in our application
app.use(passport.initialize());
var passportMiddleware = require('./models/passport');
passport.use(passportMiddleware);

app.use('/api', routes)


mongoose.connect(config.db, { useNewUrlParser: true , useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});

// Start the server
app.set('port', process.env.PORT || 22);
app.set('host', process.env.HOST || '202.166.197.237');

app.listen(3000);
  console.log("Express server listening on port " + app.get('port'));


