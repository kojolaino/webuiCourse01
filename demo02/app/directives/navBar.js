app.directive('navBar', function () {
    return {
        restrict: 'E',
        scope: false,
        template:` 
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">AnimalCare</a>
                </div>
                <ul class="nav navbar-nav navigation-animals">
                    <li class="active"><a href="#/" id="home-page">Home</a></li>
                    <li><a href="#/dogs" id="dogs-page">Dogs</a></li>
                    <li><a href="#/cats" id="cats-page">Cats</a></li>
                </ul>
            </div>
        </nav>`
    }
})