var express = require('express'),
  right = require('./lib/rightjs/right'),
  jsdom = require('jsdom'),
  server = express.createServer();


server.configure(function () {
  server.use(express.bodyParser());
  server.use(express.static(__dirname + '/../public'));
  server.use(right());
});

server.listen(8080);
