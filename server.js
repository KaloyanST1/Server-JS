/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');           // Used to easily direct requests 
	var mongojs = require('mongojs');           // Javascript interface to mongodb
	var bodyParser = require('body-parser');    // Parses post request data for us
	var app = express();

	// Create mongo connection
	app.db = mongojs('game_server', ['scores']);

	// Tell the app to parse the body of incoming requests
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(bodyParser.json());

	// This will be called when a user submits a new score
	app.post("/submitScore", function(req, res)
	{
		console.log("Submit Score Called");
		res.send("What's up");
	});

	// This will be called when a user requests a list of scores
	app.post("/highScores", function(req, res)
	{
		console.log("Highscores Called");
		res.send("What's up");
	});

	// Start the server
	var server = app.listen(2222, function()
	{ 
		console.log('Listening on port %d', server.address().port);
	});
