/*defining the directive image hover which is used to create an expresive html to display images and changed them when the mouse hovers over them*/ 
app.directive('imgHover', function ($location) {
    return {
        restrict: 'E',
        /*the scope of the the directive takes 4 parameters:  */
        scope: {
            fpath: '@',/* first two the url for the images which are changing on mouseove and mouseout */
            spath: '@',
            urlPath: '@',/*the third one is to point to the correct state when cliked on an image */
            classtype: '@'/* change dynamicly the class of elements in the given template*/
        },
        template: `
        <div class= "{{ classtype }}">
            <div class="image-holder" ng-click="goTo(urlPath)">
                <img ng-src="{{ imgpath }}" class="animal-img img-responsive img-thumbnail animal" />
            </div>
        </div>`,
        /* link option included to be able to change the images when the mouse hovers over them via jquery */
        link : function (scope, element, attrs) {
            scope.imgpath = scope.fpath
            $(element).mouseover(function () {
                scope.imgpath = scope.spath;
                scope.$apply()/* include so as angular is able to read jquery objects methods function and etc. */
            });
            $(element).mouseout(function () {
                scope.imgpath = scope.fpath
                scope.$apply()
            });
            /* define a methode to change url to point to the given page when cliked on a image in the home template*/
            scope.goTo = (url) => {
                $location.path('/' + url);
            }
        }
    }
});//change id cat to class animal in stylesheet