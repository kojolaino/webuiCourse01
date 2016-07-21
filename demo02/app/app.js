var app = angular.module("animal",['ngRoute', 'ui.bootstrap']);

app.controller('MainCtrl', ['$scope', function($scope) {
  /**/
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/' , {
            templateUrl: '/app/states/home/home.html',
        })
});