// src/server.js



const express    = require('express');    //includes express
const config     = require('./config');   //includes express app config
const router     = require('./routes');   //includes express routes

const mongoose = require('mongoose');  //includes mongoose

const app = express();  //creates an express app called "app"


// creates a server on port 8080
app.listen(config.port, function() {
  console.log("server running on port " + config.port);
});
