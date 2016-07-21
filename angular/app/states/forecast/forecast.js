(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('forecast', forecast)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('forecast', {
                url: '/forecast',
                template: '<forecast></forecast>'
            });
    }

    function forecast() {
        var directive = {
            templateUrl: './states/forecast/forecast.html',
            restrict: 'E',
            controller: controller,
            scope: {
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'forecast'];
    function controller($scope, forecast) {
        $scope.cities = forecast.cities;
        $scope.showFunct = function (city) {

            city.state = !city.state ;
        };
    }

}(angular));