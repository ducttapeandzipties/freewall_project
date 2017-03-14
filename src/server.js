// src/server.js



const express = require('express');    //includes express
const config = require('./config');   //includes express app config
const router = require('./routes');   //includes express routes
const mongoose = require('mongoose');  //includes mongoose
const path = require('path');

const app = express();  //creates an express app called "app"

// app.use(express.static(__dirname + '/src'));   //serve static files
app.use(express.static(path.join(__dirname, '../src/public')));

app.use(router);
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// creates a server on port 8080
app.listen(config.port, function() {
  console.log("server running on port " + config.port);
});
