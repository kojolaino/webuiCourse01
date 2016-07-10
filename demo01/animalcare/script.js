init();

var foods = [{
        animal: {
            minAge: 0,
            maxAge: 3,
            type: "cat"
        },
        name: "Whiskas Young",
        description: "Best food for consumption for young cats!",
        src: 'RC_Labretr.jpg',
        id: 'RC_Labretr-food',
        alt: 'RC_Labretr'
        ,
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
            minAge: 11,
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
            minAge: 11,
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

    $('img#cat, #cats-page').click((event) => {
        var cats = [{
            src: 'british-shot-hair.jpg',
            id: 'british-cat',
            alt: 'british',
            breed: 'British Short Haired',
            type: "cat",
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."
        }, {
            src: 'juja.jpg',
            id: 'juja-cat',
            alt: 'juja',
            breed: 'Juja',
            type: "cat",
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."
        }, {
            src: 'siamska.jpg',
            id: 'siamska-cat',
            alt: 'siamska',
            breed: 'Siamese',
            type: "cat",
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."
        }];

        toggleState('container-cats');
        appendAnimalBreedsHtml(cats, '#container-cats div.row');

        // Attach event handlers
        attachAnimalProfileEvents(cats);
    });
    
    // Set dog image toggle
    $('img#dog').hover(sourceSwap, sourceSwap);

    $('img#dog, #dogs-page').click((event) => {
        let dogs = [{
            src: 'buldog.jpg',
            id: 'buldog-dog',
            alt: 'buldog',
            breed: 'bulldog',
            type: "dog",
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."
        }, {
            src: 'german-shepard.jpg',
            id: 'germanShepard-dog',
            alt: 'germanShepard',
            breed: 'German Shepard',
            type: "dog",
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."

        }, {
            src: 'german-dog.jpg',
            id: 'greateDane-dog',
            alt: 'german-dog',
            breed: 'Great Dane',
            type: "dog",
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."

        }];

        toggleState('container-dogs');
        appendAnimalBreedsHtml(dogs, '#container-dogs div.row');

        // Attach event handlers
        attachAnimalProfileEvents(dogs);
    });

    // $(".nav.navbar-nav.navigation-animals li a").click((event)=>{
    //     event.preventDefault();
    //     var href = event.target.dataset.state;
    //     toggleState('container-' + href);
    //     var animals = animalDataset[href];
    // })

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
                    return foddInput >= food.animal.minAge && foddInput <= food.animal.maxAge && food.animal.type == animal.type
                });
                $("#food-container").html(generateFoods(filteredFoods));
                //alert(JSON.stringify(filteredFoods));
            });
            $("#close-button-container").click(function () {
                $("#animal-popup-info").hide();
            });
        });
    });

    function generateAnimalPopupHtml(animal) {
        let html = `
             <div id="close-button-container" class="col-xs-2 col-xs-offset-11 btn-xs">
                <button type="button" class="btn btn-warning">Close</button>
            </div>
            <div class="row" id="container-${animal.id}">
                <div class="animal-img-holder col-xs-12 col-sm-12 col-md-4">
                    <img id="img-${animal.id}" src="./imgs/${animal.src}" alt="${animal.alt}" class="animal-img img-resposive img-thumbnail"/>
                </div>
                <div id="animal-info-${animal.id}" class="col-xs-12 col-sm-12 col-md-8">
                    <div class="animal-popup-info">
                            <h3>${animal.breed}</h3>
                            <p>${animal.desc}</p>
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
            <div class="row" id="food-container">
            </div>
        `;
        return html;
    }

    function generateFoods(foods) {
        var html = '';
        foods.map(function (food) {
            html +=
                `<div id="food-info-container">
                    <div class="food-img-holder col-xs-12 col-sm-8 col-md-2">
                        <img id="img-${food.id}" src="./imgs/${food.src}" alt="${food.alt}" class="food-img img-resposive img-rounded"/>
                    </div>
                    <div id="animal-info-food" class="col-xs-12 col-sm-12 col-md-4">
                        <div class="animal-popup-info">
                                <h4>${food.name}</h4>
                                <p>${food.description}</p>
                        </div>
                    </div>
              </div>      
            `;
        });
        return html;
    }
}


// 1. Init Animal Data
// 2. Generate HTML
// 3. append HTML to the container
// 4. toggleState
// container