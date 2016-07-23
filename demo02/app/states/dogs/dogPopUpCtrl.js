app.controller('DogPopUpCtrl', ['$scope', 'animal', 'dogid', 'foods', '$uibModalInstance', function ($scope, animal, dogid, foods, $uibModalInstance) {
    $scope.foods = [];
    $scope.animal = animal.getDogs(dogid)
    $scope.getFoods = function getFoods(age, type) {
        $scope.foods = foods.getFoods(age, type)
    }
    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);