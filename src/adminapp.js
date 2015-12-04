/**
 * Created by jwarnock on 12/1/15.
 */
var adminApp = angular.module('adminApp', []);

adminApp.controller('adminController', function($scope) {
    $scope.message = 'ADMIN!'
});