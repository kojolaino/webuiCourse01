/*difining the cat controller CatsCtrl attaching to its scope animal service and the $uibModal*/
app.controller('CatsCtrl', ['$scope', 'animal', '$uibModal', function ($scope, animal, $uibModal) {
    $scope.animal = animal.getCats();
    $scope.showButton = false;/* adding additional scope showButton so as to be able to toggle state for showing and hiding the show info button and the given pet's breed*/
    $scope.items = ['item1', 'item2', 'item3'];
    /* methode open so as we can use it when show info button is cliked to genrate the modal or popUp for the given pet*/
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
/* configuration of the route to point to the cat page when cliked on the cat tab in the nav bar or on the cat image */
app.config(function ($routeProvider) {
    $routeProvider
        .when('/cats', {
            templateUrl: '/app/templates/animal.html',
            controller: 'CatsCtrl'
        });
});