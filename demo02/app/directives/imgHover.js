app.directive('imgHover', function ($location) {
    return {
        restrict: 'E',
        scope: {
            fpath: '@',
            spath: '@',
            urlPath: '@'
        },
        template: `
        <div class="col-xs-12 col-sm-4 col-sm-offset-2">
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