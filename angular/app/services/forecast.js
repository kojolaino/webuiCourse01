(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('forecast', service);

    service.$inject = ['$http'];

    function service($http) {
        return{
            cities:[
                { 
                    city: "Sofia",
                    degrees: 28,
                    state: false,
                    src: "https://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"
                },
                { 
                    city: "Plovdiv",
                    degrees: 36,
                    state: false,
                    src:"http://cdn.tegna-tv.com/wvec/static/broadcast-web-static-761.0/images/weather/rain-light.pngowers.png"
                },
                { 
                    city: "Veliko Tarnovo",
                    degrees: 37,
                    state: false,
                    src:"https://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"
                },
                { 
                    city: "Ruse",
                    degrees: 39,
                    state: false,
                    src:"http://cdn.tegna-tv.com/wvec/static/broadcast-web-static-761.0/images/weather/rain-light.png"
                },
                { 
                    city: "Yambol",
                    degrees: 30,
                    state: false,
                    src:"https://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"
                }
            ]
        }
        
    }

}(angular));