// For local testing without nginx you can use this
//  to serve the static files AND run app.js with a local socket


// Serve static files
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var port    = 8021;
http.listen(port, function(){
	console.log('http://localhost:'+port+'/');
});
app.use(express.static('static'));
/*
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/static/index.html');
});
app.get("/demo", function (req, res) {
	res.sendFile(__dirname + '/static/demo.html')
});
*/
app.use(function(req, res, next) {
	res.status(404).sendFile(__dirname + '/404.html');
});