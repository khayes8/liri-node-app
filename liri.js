var twitter = require('twitter');
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var fs = require("fs")

fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  var dataArr = data.split(",");
});


