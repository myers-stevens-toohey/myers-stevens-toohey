/**
 * Created by jwarnock on 11/19/15.
 */
var express = require('express');
var app = express();
var path = require('path');
//var api = require('./src/api.js');

//app.use('/', api);

app.use(function(req, res, next) {
    console.log(req.url);
    next()
});

//app.use(express.static('public'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/src/css/default.css'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

var server = app.listen(3000, function() {
    console.log('Server is running at http://localhost:' +
    server.address().port);
});