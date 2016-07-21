app.controller('DogsCtrl', ['$scope','animal', function($scope, animal) {
    $scope.animal = animal.getDogs();
    $scope.showButton = false;
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/dogs' , {
            templateUrl: '/app/states/animal.html',
            controller: 'DogsCtrl'
        });
});