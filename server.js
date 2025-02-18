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
//const PORT = process.env.PORT;
var app = express();
app.use(cors());

app.get('/', function(req, res) {
   console.log("You are inside server.js")
//return res.send('Hello! The API is at http://202.166.197.237:' + port + '/location');

});
// get our request parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// Use the passport package in our application
app.use(passport.initialize());
var passportMiddleware = require('./models/passport');
passport.use(passportMiddleware);

//app.use('/api', routes)
app.use('/api1',routes);
app.get('/api',()=>{
  console.log('hi i am in server');
})
 mongoose.connect(config.db, { useNewUrlParser: true , useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

//connection.on('error', (err) => {
  //  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    //process.exit();
//});

// Start the server


app.listen(3000);
  console.log("Express server listening on port:");


