app.directive('imgHover', function ($location) {
    return {
        restrict: 'E',
        scope: {
            fpath: '@',
            spath: '@',
            urlPath: '@',
            classtype: '@'
        },
        template: `
        <div class= "{{ classtype }}">
            <div class="image-holder" ng-click="goTo(urlPath)">
                <img ng-src="{{ imgpath }}" class="animal-img img-responsive img-thumbnail animal" />
            </div>
        </div>`,
        link : function (scope, element, attrs) {
            scope.imgpath = scope.fpath
            $(element).mouseover(function () {
                scope.imgpath = scope.spath;
                scope.$apply()
            });
            $(element).mouseout(function () {
                scope.imgpath = scope.fpath
                scope.$apply()
            });

            scope.goTo = (url) => {
                $location.path('/' + url);
            }
        }
    }
});//change id cat to class animal in stylesheet