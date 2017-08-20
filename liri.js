var twitterPackage = require('twitter');
// var keysFile = require('./keys.js');
var spotifyPackage = require('node-spotify-api');
var spotify = new spotifyPackage({
    id: '76d1860f380640679052083a865afcd0',
    secret: '76e5cb800fb440debba16f70e1164035'
});
var client = new twitterPackage({
    consumer_key: 'qyb95rUdcxHJszFqDLasG0WXH',
    consumer_secret: 'hEvnWusTdIud3v85HrkhTkOI8c5P5fx5bRGoUg4QcafQCCqEm8',
    access_token_key: '896434993660133380-3mDI9cTcoLPyohmVJKeo9AGVKQ4y6cN',
    access_token_secret: 'CVarQswbC9UB49RKPIMXTSR79U6MUxFySvy638pyp2YDK',
});
var fs = require("fs");
var inquirer = require("inquirer");
var command = process.argv[2];


function commandResponse() {
    if (command === "spotify-this-song")
        inquirer.prompt([{
            name: 'song',
            message: 'Type in the name of a song.'

        }]).

    then(function(answers) {
        spotify.search({
            type: 'track',
            query: answers.song,
            limit: 1
        }, function(err, data, answer) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var artist = data.tracks.items[0].album.artists[0].name;
            var song = data.tracks.items[0].name;
            var preview = data.tracks.items[0].album.artists[0].href;
            var album = data.tracks.items[0].album.name;
            
            console.log("                   ")
            console.log("Artist: " + artist)
            console.log("Album: " + album);
            console.log("Preview: " + preview);
            console.log("Song: " + song)
            console.log("                   ")

        });
    });
    // if (command === "my-tweets") {

    //     var params = {
    //         screen_name: 'khayes1993'
    //     };
    //     client.get('statuses/user_timeline', params, function(error, tweets, response) {
    //         if (!error) {
    //             console.log(tweets.text);
    // //         }
    // //     });

    // }
}

commandResponse();


// -------------------------------------




















// //read random.txt file
// fs.readFile("random.txt", "utf8", function(error, data) {

//   if (error) {
//     return console.log(error);
//   }

//   var dataArr = data.split(",");
//   // console.log(data);
// });



