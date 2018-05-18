let express = require('express');
let app = express();
let bodyParser = require('body-parser');

var url  = 'mongodb://localhost:27017/';
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

var router = express.Router();
var apiKey = 'GBTtwNE$AZe9M=kxh526dd-#yTfXjsv^h';
var dbName = 'alistairfink';
var collections = {
  about: 'About',
  portfolio: 'Portfolio',
  experience: 'Experience',
  education: 'Education'
};

MongoClient.connect("mongodb://localhost:27017/", function(err, database) {
	if (!err) console.log("connected");
	let db = database.db(dbName);

  router.route('/GetAbout')
  	.get(function(req, res) {
      db.collection(collections.about).find({}).toArray(function(err, result) {
          if (err) throw err;
        res.json(result[0].desc);
      });
  	});
  router.route('/GetPortfolioList')
  	.get(function(req, res) {
      db.collection(collections.portfolio).find({}).toArray(function(err, result) {
        if (err) throw err;
        let itemList = [];
        for(let i = 0; i < result.length; i++)
        {
          let tempObj = {
            name: result[i].name,
            dspImg: result[i].dspImg
          };
          itemList.push(tempObj);
        }
        res.json(itemList);
      });
  	});
  router.route('/GetPortfolioItem')
  	.post(function(req, res) {
      let itemId = new mongo.ObjectId(res._id);
      db.collection(collections.portfolio).find({_id: itemId}).toArray(function(err, result) {
        if (err) throw err;
        if(result[0])
        {
          res.json(result[0]);
        }
        else
          res.json({error: "Item not found"});
      });
  	});
  router.route('/GetExperience')
  	.get(function(req, res) {
      db.collection(collections.experience).find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
      });
  	});
  router.route('/GetEducation')
  	.get(function(req, res) {
      db.collection(collections.education).find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
      });
  	});

  router.route('/AddPortfolio')
  	.post(function(req, res) {
      let callKey = res.apiKey;
      if(callKey === apiKey)
      {
        let tempObj = {

        }
        for(let temp in tempObj)
        {
          if(!tempObj[temp]) res.json({error: "All Fields are Required"});
        }
        db.collection(collections.portfolio).insertOne(tempObj, function(err, res) {
          if (err) throw err;
        });
        res.json({message: 'success'})
      }
      else res.json({error: "Incorrect API Key"});
  	});
  router.route('/AddExperience')
  	.post(function(req, res) {
      let callKey = res.apiKey;
      if(callKey === apiKey)
      {
        let tempObj = {

        }
        for(let temp in tempObj)
        {
          if(!tempObj[temp]) res.json({error: "All Fields are Required"});
        }
        db.collection(collections.experience).insertOne(tempObj, function(err, res) {
          if (err) throw err;
        });
        res.json({message: 'success'})
      }
      else res.json({error: "Incorrect API Key"});
  	});
  router.route('/AddEducation')
  	.post(function(req, res) {
      let callKey = res.apiKey;
      if(callKey === apiKey)
      {
        let tempObj = {

        }
        for(let temp in tempObj)
        {
          if(!tempObj[temp]) res.json({error: "All Fields are Required"});
        }
        db.collection(collections.education).insertOne(tempObj, function(err, res) {
          if (err) throw err;
        });
        res.json({message: 'success'})
      }
      else res.json({error: "Incorrect API Key"});
  	});

  router.route('/EditAbout')
  	.post(function(req, res) {
      let res
      let dbUpdate = {
              name: 'sergio2',
              job: 'homeless'
      };
      let id = new mongo.ObjectID("5afe02a795a9331a86c65e2a");
      db.collection('data3').updateOne({_id: id}, {$set:dbUpdate});

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