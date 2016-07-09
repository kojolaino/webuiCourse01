init();

var foods = [{
    animal: {
        minAge: 0,
        maxAge: 3,
        type: "cat"
    },
    name: "Whiskas Young",
    description: "Best food for consumption for young cats!"
}, {
    animal: {
        minAge: 4,
        maxAge: 10,
        type: "cat"
    },
    name: "Whiskas Adult",
    description: "Best food for consumption for middle aged cats!"
}, {
    animal: {
        minAge: 0,
        maxAge: Number.POSITIVE_INFINITY,
        type: "cat"
    },
    name: "Whiskas Old",
    description: "Best food for consumption for old cats!"
}, {
    animal: {
        minAge: 0,
        maxAge: 3,
        type: "dog"
    },
    name: "Dr. Tim’s Dog Food Young",
    description: "Best food for consumption for young dogs!"
}, {
    animal: {
        minAge: 4,
        maxAge: 10,
        type: "dog"
    },
    name: "Dr. Tim’s Dog Food Adult",
    description: "Best food for consumption for middle aged dogs!"
}, {
    animal: {
        minAge: 0,
        maxAge: Number.POSITIVE_INFINITY,
        type: "dog"
    },
    name: "Dr. Tim’s Dog Food Old",
    description: "Best food for consumption for old dogs!"
}];

function init() {
    toggleState('container-home');
    registerEventHandlers();
}

function toggleState(initState) {
    var stateIds = ['container-home', 'container-cats', 'container-dogs'];

    stateIds.map(function (state) {
        state === initState ? $('#' + state).show() : $('#' + state).hide();
    });
}

function registerEventHandlers() {
    // change the source of an img
    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    // Set cat image toggle

    $('img#cat').hover(sourceSwap, sourceSwap);

    $('img#cat').click((event) => {
        var cats = [{
            src: 'british-shot-hair.jpg',
            id: 'british-cat',
            alt: 'british',
            breed: 'British Short Haired'
        }, {
                src: 'juja.jpg',
                id: 'juja-cat',
                alt: 'juja',
                breed: 'Juja'
            }, {
                src: 'siamska.jpg',
                id: 'siamska-cat',
                alt: 'siamska',
                breed: 'Siamese'
            }];

        toggleState('container-cats');
        appendAnimalBreedsHtml(cats, '#container-cats div.row');

        // Attach event handlers
        attachAnimalProfileEvents(cats);
    });

    // Set dog image toggle
    $('img#dog').hover(sourceSwap, sourceSwap);

    $('img#dog').click((event) => {
        let dogs = [{
            src: 'buldog.jpg',
            id: 'buldog-dog',
            alt: 'buldog',
            breed: 'bulldog'
        }, {
                src: 'german-shepard.jpg',
                id: 'germanShepard-dog',
                alt: 'germanShepard',
                breed: 'German Shepard'
            }, {
                src: 'german-dog.jpg',
                id: 'greateDane-dog',
                alt: 'german-dog',
                breed: 'Great Dane'
            }];

        toggleState('container-dogs');
        appendAnimalBreedsHtml(dogs, '#container-dogs div.row');

        // Attach event handlers
        attachAnimalProfileEvents(dogs);
    });

}

function appendAnimalBreedsHtml(animals, selector) {
    $(selector).html(htmlAnimalGenerator(animals));
}

function htmlAnimalGenerator(animals) {
    var html = '';

    animals.map(function (animal) {
        html += `
            <div class="col-xs-12 col-sm-12 col col-md-4" id="container-${animal.id}">
                <div class="animal-img-holder">
                    <img id="img-${animal.id}" src="./imgs/${animal.src}" alt="${animal.alt}" class="animal-img img-resposive img-thumbnail"/>
                    <div id="animal-info-${animal.id}" class="text-center h3 hiden">
                        ${animal.breed}
                        <div>
                            <button class="btn btn-info" id="btn-show-info-${animal.id}">Show info</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    return html;
}

function attachAnimalProfileEvents(animals) {
    animals.map(function (animal) {
        $("#container-" + animal.id).click(function () {
            var el = $(this).find('#animal-info-' + animal.id),
                isVisible = el.is(":visible");

            if (isVisible) {
                el.hide();
            } else {
                el.show();
            }
        });

        $("#btn-show-info-" + animal.id).click(function (event) {
            event.stopPropagation()
            $("#animal-popup-info").show().html(generateAnimalPopupHtml(animal));
        
            $("#get-food").click(() => {
                var foddInput = $("#food-input").val();
                var filteredFoods = foods.filter(food => {
                    return foddInput >= food.animal.minAge && foddInput <= food.animal.maxAge
                });
                $("#food-container").html();
            });

        });
    });

    function generateAnimalPopupHtml(animal) {
        let html = `
            <div class="row" id="container-${animal.id}">
                <div class="animal-img-holder col-xs-12 col-sm-12 col-md-4">
                    <img id="img-${animal.id}" src="./imgs/${animal.src}" alt="${animal.alt}" class="animal-img img-resposive img-thumbnail"/>
                </div>
                <div id="animal-info-${animal.id}" class="col-xs-12 col-sm-12 col-md-8">
                    <div class="animal-popup-info">
                            <h3>${animal.breed}</h3>
                            <p>blablablavblablablablablablablablablablablablablablavvvvvvblablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                    </div>
                </div>
            </div>
            <div class="row form-horizontal padding-10">
                <div class="col-xs-12 col-sm-12 col-md-4 col-md-offset-4">
                    <div class="form-group">
                        <label for="usr" class="control-label col-sm-3">Age:</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="food-input">
                        </div>
                        <div class="col-sm-5">
                            <button id="get-food" type="button" class="btn btn-primary">Get Food</button>
                        </div>
                    </div>    
                </div>
            </div>
            <div class= "row food-container">
            </div>
        `;
        return html;
    }

    function generateFoods(foods) {
        var html= '';
        foods.map();

    }
}