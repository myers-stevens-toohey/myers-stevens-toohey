/**
 * Created by jwarnock on 12/2/15.
 */

var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('API RUNNING YOU ARE AWESOME!!! also this is where you sign in and admin stuff goes!!')
});

router.get('/sai', function(req, res) {
    var saiOptions = {
        url: 'https://webapp.myers-stevens.com/SAIEnrollmentServices/SAIEnrollmentServices.asmx'
    };
    request(saiOptions, function(error, response, body) {
        res.send(body);
    })
});

router.get('/supply', function(req, res) {
    var supplyOptions = {
        url: 'https://webapp.myers-stevens.com/MSTSupplyServices/MSTSupplyServices.asmx'
    };
    request(supplyOptions, function(error, response, body) {
        res.send(body);
    })
});

router.get('/services', function(req, res) {
    var servicesOptions = {
        url: 'https://webapp.myers-stevens.com/MSTServices/InvoiceQueries.asmx'
    };
    request(servicesOptions, function(error, response, body) {
        res.send(body);
    })
});


module.exports = router;