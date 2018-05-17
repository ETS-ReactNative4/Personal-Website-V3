let express = require('express');
let app = express();
let bodyParser = require('body-parser');

var url  = 'mongodb://localhost:27017/';
var MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

var router = express.Router();
var apiKey = '';
var dbName = 'alistairfink';
var aboutCollection = 'About';
var portfolioCollection = 'Portfolio';
var experienceCollection = 'Experience';
var educationCollection = 'Education'



MongoClient.connect("mongodb://localhost:27017/", function(err, database) {
	if (!err) console.log("connected");
	let db = database.db(dbName);

  router.route('/GetAbout')
  	.get(function(req, res) {

  	});
  router.route('/GetPortfolioList')
  	.get(function(req, res) {

  	});
  router.route('/GetPortfolioItem')
  	.get(function(req, res) {

  	});
  router.route('/GetExperience')
  	.get(function(req, res) {

  	});
  router.route('/GetEducation')
  	.get(function(req, res) {

  	});

  router.route('/UpdateAbout')
  	.post(function(req, res) {

  	});
  router.route('/AddPortfolio')
  	.post(function(req, res) {

  	});
  router.route('/AddExperience')
  	.post(function(req, res) {

  	});
  router.route('/AddEducation')
  	.post(function(req, res) {

  	});

  router.route('/EditAbout')
  	.post(function(req, res) {

  	});
  router.route('/EditPortfolio')
  	.post(function(req, res) {

  	});
  router.route('/EditExperience')
  	.post(function(req, res) {

  	});
  router.route('/EditEducation')
  	.post(function(req, res) {

  	});

  app.use('/', router);
  app.listen(port);

});