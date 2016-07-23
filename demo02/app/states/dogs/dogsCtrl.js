app.controller('DogsCtrl', ['$scope', 'animal', '$uibModal',function ($scope, animal, $uibModal) {
  $scope.animal = animal.getDogs();
  $scope.showButton = false;
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size, dogid) {
    var modalInstance = $uibModal.open({
      templateUrl: './app/templates/popUp.html',
      size: size,
      scope: $scope,
      controller: 'DogPopUpCtrl',
      resolve: {
        dogid: function () {
          return dogid;
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
    .when('/dogs', {
      templateUrl: '/app/templates/animal.html',
      controller: 'DogsCtrl'
    });
});

