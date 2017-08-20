var twitterPackage = require('twitter');
var spotifyPackage = require('node-spotify-api');
var keysFile = require('./keys.js');
var twitterApiKey = keysFile.keys;
var spotifyApiKey = keysFile.spotifyKey;
var fs = require("fs")

fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  var dataArr = data.split(",");
  // console.log(data);
});


console.log(twitterApiKey);