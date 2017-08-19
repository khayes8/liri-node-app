var twitter = require('twitter');
var twitterApiKey = require('./keys.js');
// console.log(twitterApiKey);

// var spotify = require('node-spotify-api');
// var spotifyApiKey = require('./keys.js')
// console.log(spotifyApiKey);
 
var fs = require("fs")

fs.readFile("random.txt", "utf8", function(error, data) {
  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  // We will then print the contents of data
  // console.log(data);
  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");
  // We will then re-display the content as an array for later use.
  console.log(dataArr[1]);
});


// var spotify = new Spotify({
//   id: '76d1860f380640679052083a865afcd0',
//   secret: '76e5cb800fb440debba16f70e1164035'
// });
 
// spotify.search({ type: 'track', query: searchValue }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });