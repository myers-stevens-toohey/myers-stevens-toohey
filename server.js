/**
 * Created by jwarnock on 11/19/15.
 */
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log(req.url);
    next()
});

app.use(express.static('public'));

var server = app.listen(3000, function() {
    console.log('Server is running at http://localhost:' +
    server.address().port);
});