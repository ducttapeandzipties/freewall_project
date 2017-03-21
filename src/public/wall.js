// src/wall.js



angular.module('freewallApp')   //creates an angular directive to fill the wall
.directive('wall', function(){
  return {
    template: "<br><br><br><br><h1>User content goes here</h1><br><br><br><br><br>"
// this is where I need to GET the data and display it on the page
  };
})
