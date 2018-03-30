const express = require('express');
const router = express.Router();

//parser to convert json objects for post requests
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

/*
const {allBoredScenarios} = require('./models');
const {Games} = require('./models');
const {News} = require('./models');
const {Riddles} = require('./models');
const {Crafts} = require('./models');
*/

//Get all the games, news,riddles and crafts for random selection
router.get('/',(req,res) =>{
  //res.json(allBoredScenarios.get());
  res.send('All categories displayed');
});

//Get all games alone
router.get('/games',(req,res) =>{
  //res.json(Games.get());
  res.send('All games displayed');
});

//Get all news alone
router.get('/news',(req,res) =>{
  //res.json(News.get());
  res.send('All news displayed');
});

//Get all riddles alone
router.get('/riddles',(req,res) =>{
  //res.json(Riddles.get());
  res.send('All riddles displayed');
});

//Get all crafts alone
router.get('/crafts',(req,res) =>{
  //res.json(Crafts.get());
  res.send('All crafts displayed');
});


module.exports = router;
