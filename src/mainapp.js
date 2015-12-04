/**
 * Created by jwarnock on 12/1/15.
 */

var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider) {
   $routeProvider

       .when('/', {
           templateUrl: 'index.html',
           controller: 'mainController'
       })
        .when('/sai.html', {
            templateUrl: 'sai.html',
            controller: 'saiController'
        })

});

mainApp.controller('mainController', function($scope) {
    $scope.message = 'MAIN!'
});
mainApp.controller('saiController', function($scope) {
   $scope.message = 'SAI!'
});