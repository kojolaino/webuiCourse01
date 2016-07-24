app.controller('CatPopUpCtrl', ['$scope', 'animal', 'catid', 'foods', '$uibModalInstance', function ($scope, animal, catid, foods, $uibModalInstance) {
    $scope.foods = [];
    $scope.animal = animal.getCats(catid)
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