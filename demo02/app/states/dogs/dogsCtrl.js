app.controller('DogsCtrl', ['$scope','animal','$uibModal', function($scope, animal, $uibModal) {
    $scope.animal = animal.getDogs();
    $scope.showButton = false;
    $scope.items = ['item1', 'item2', 'item3'];

  	$scope.open = function (size) {

    var modalInstance = $uibModal.open({
      templateUrl: './app/directives/popUp.html',
      size: size,
      scope: $scope
    });
  };
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/dogs' , {
            templateUrl: '/app/states/animal.html',
            controller: 'DogsCtrl'
        });
});

