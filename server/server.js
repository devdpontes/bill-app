var express = require("express"),
	app = express(),
	http = require("http"),
	httpServer = http.Server(app),
	path = require("path"),
	host = 'localhost',
	port = '4000';

app.use(express.static("client"));

app.listen(port, host);

console.log('App Ready on http://'+host+':'+port+'/');
