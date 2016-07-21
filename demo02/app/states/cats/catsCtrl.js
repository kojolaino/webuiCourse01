app.controller('CatsCtrl', ['$scope','animal', function($scope, animal) {
    $scope.animal = animal.getCats();
    $scope.showButton = false;
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/cats' , {
            templateUrl: '/app/states/animal.html',
            controller: 'CatsCtrl'
        });
});