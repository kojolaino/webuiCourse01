app.controller('CatsCtrl', ['$scope', 'animal', '$uibModal', function ($scope, animal, $uibModal) {
    $scope.animal = animal.getCats();
    $scope.showButton = false;
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size, catid) {
        var modalInstance = $uibModal.open({
            templateUrl: './app/templates/popUp.html',
            size: size,
            scope: $scope,
            controller: 'CatPopUpCtrl',
            resolve: {
                catid: function () {
                    return catid;
                }
            }
        });
    };
    $scope.selected = {
        item: $scope.items[0]
    };
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/cats', {
            templateUrl: '/app/templates/animal.html',
            controller: 'CatsCtrl'
        });
});