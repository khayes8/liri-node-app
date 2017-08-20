var twitterPackage = require('twitter');
var keysFile = require('./keys.js');
var spotifyPackage = require('node-spotify-api');
var spotify = new spotifyPackage({
  id: '76d1860f380640679052083a865afcd0',
  secret: '76e5cb800fb440debba16f70e1164035'
});
var fs = require("fs");
var inquirer = require("inquirer");
//-------------------------------------
inquirer.prompt([
    {
      name: 'song',
      message: 'What song would you like to hear?'

    }
  ]).then(function(answers){
spotify.search({ type: 'track', query: answers.song, limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  var albumInfo = data.tracks.items[0].album; 
  console.log(albumInfo);
  });
//-------------------------------------
  //spotify schtuff

 

// console.log(albumInfo);
});
//-------------------------------------









// //read random.txt file
// fs.readFile("random.txt", "utf8", function(error, data) {

//   if (error) {
//     return console.log(error);
//   }

//   var dataArr = data.split(",");
//   // console.log(data);
// });



