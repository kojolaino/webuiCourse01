app.directive('food', function () {
    return {
        restrict: 'E',
        scope: {
            'food': '='
        },
        template:`
        <div id="food-info-container">
            <div class="food-img-holder col-xs-12 col-sm-8 col-md-2">
                <img id="img-{{food.id}}" ng-src="{{food.src}}" alt="{{food.alt}}" class="food-img img-resposive img-rounded"/>
            </div>
            <div id="animal-info-food" class="col-xs-12 col-sm-12 col-md-4">
                <div class="animal-popup-info">
                    <h4>{{food.name}}</h4>
                    <p>{{food.description}}</p>
                </div>
            </div>
        </div>`
    }
});