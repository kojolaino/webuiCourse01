var app = angular.module("animal",['ngRoute', 'ui.bootstrap']); /*defining the  module or the app scope attaching to it angular-route and boostrap module  */
/*defining main controller*/
app.controller('MainCtrl', ['$scope', function($scope) {
  /**/
}]);
/* configuration of the angular-route to point to home.hmtl when the page is loaded*/
app.config(function($routeProvider) {
    $routeProvider
        .when('/' , {
            templateUrl: '/app/templates/home.html',
        })
});