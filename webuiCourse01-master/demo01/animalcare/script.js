init();

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
    $(function () {
        $('img#cat').hover(sourceSwap, sourceSwap);
    });

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
            breed:'bulldog'
        }, {
            src: 'german-shepard.jpg',
            id: 'germanShepard-dog',
            alt: 'germanShepard',
            breed:'German Shepard'
        }, {
            src: 'german-dog.jpg',
            id: 'greateDane-dog',
            alt: 'german-dog',
            breed:'Great Dane'
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

    animals.map(function(animal) {
        html += `
            <div class="col-xs-4" id="container-${animal.id}">
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
    animals.map( function (animal) {
        $("#container-" + animal.id).click(function() {
            var el = $(this).find('#animal-info-' + animal.id),
                isVisible = el.is(":visible");

            if (isVisible) {
                el.hide();
            } else {
                el.show();
            }
        });

        $("#btn-show-info-"+animal.id).click(function(event) {
            event.stopPropagation()
            $("#animal-popup-info").show().html(generateAnimalPopupHtml(animal.id));

             
        });
    });  

    function generateAnimalPopupHtml(animalData) { 
        var html = '';
        animalData.map(function(animalData) {
        html += `
            <div class="col-xs-4" id="container-${animalData.id}">
                <div class="animal-img-holder">
                    <img id="img-${animalData.id}" src="./imgs/${animalData.src}" alt="${animalData.alt}" class="animal-img img-resposive img-thumbnail"/>
                    <div id="animal-info-${animalData.id}" class="text-center h3 hiden">
                        ${animalData.breed}
                        <div>
                            <button class="btn btn-info" id="btn-show-info-${animalData.id}">Show info</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    return html;
    }
}