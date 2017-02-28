// src/wall.js



angular.module('freewallApp')   //creates an angular directive to fill the wall
.directive('wall', function(){
  return {
    template: "<br><br><br><br><h1>User content goes here</h1><br><br><br><br><br>"
  };
})
