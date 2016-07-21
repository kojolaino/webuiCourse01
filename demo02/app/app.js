var app = angular.module("animal",['ngRoute']);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.p = 'kak e we';
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/' , {
            templateUrl: '/app/states/home/home.html',
        })
});