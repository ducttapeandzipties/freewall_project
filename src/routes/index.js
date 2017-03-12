
// src/routes/index.js
const router = require('express').Router();
// const wall = require('../../index.html');
module.exports = router;

router.get('/files', function(req, res, next) {  //creates a route "files"
  console.log("routed!");                        // do work
});          //this rout hangs, not sure why, it I was just playing with routes

router.get('/', function(req, res, next) {  //creates a root route
  console.log("rooted!!!");
  res.send("root stuff");                        // do work
});
