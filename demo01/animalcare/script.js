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
            src: 'british-short-hair2.jpg',
            id: 'british-cat',
            alt: 'british',
            breed: 'British Short Haired',
            type: "cat",
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."
        }, {
            src: 'exotich-short-hair.jpg',
            id: 'exotich-short-hair-cat',
            alt: 'exotich-short-hair',
            breed: 'Exotich Short Hair',
            type: "cat",
            desc: `The Exotic Shorthair is a breed of cat developed to be a short-haired version of the Persian. The Exotic is similar to the Persian in many ways, including temperament and conformation, with the exception of the short dense coat.
            In the late 1950s, the Persian was used as an outcross by some American Shorthair (ASH) breeders. This was done in secret in order to improve their body type, and crosses were also made with the Russian Blue and the Burmese. The crossbreed look gained recognition in the show ring, but unhappy American Shorthair breeders successfully produced a new breed standard that would disqualify ASH that showed signs of crossbreeding. One ASH breeder who saw the potential of the Persian/ASH cross proposed and eventually managed to get the Cat Fanciers' Association judge and American Shorthair breeder Jane Martinke to recognize them as a new breed in 1966, under the name Exotic Shorthair. Since 1987, the CFA closed the Exotic to shorthair outcrosses, leaving Persians as the only allowable outcross breed.
            Because of the regular use of Persians as outcrosses, some Exotics may carry a copy of the recessive longhair gene. When two such cats mate, there is a 1 in 4 chance of each offspring being longhaired. Ironically, longhaired Exotics are not considered Persians by CFA, although The International Cat Association accepts them as Persians. Other associations like the American Cat Fanciers Association register them as a separate Exotic Longhair breed.`
        }, {
            src: 'siamska.jpg',
            id: 'siamska-cat',
            alt: 'siamska',
            breed: 'Siamese',
            type: "cat",
            desc: `The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the rtgs: wichianmat (Thai: วิเชียรมาศ,  [wí.tɕʰīan.mâːt] ( listen)) landrace, one of several varieties of cat native to Thailand (formerly known as Siam), the Siamese became one of the most popular breeds in Europe and North America in the 20th century. The carefully refined modern Siamese is characterized by blue almond-shaped eyes, a triangular head shape, large ears, an elongated, slender, and muscular body, and point colouration. (Aside from the colouration, it bears little resemblance to the original stock, and the more moderate, traditional or "old-style" Siamese, with a much rounder head and body, has been re-established by multiple registries as the Thai cat.) The International Cat Association describes the modern Siamese as social, intelligent, and playful into adulthood, often enjoying a game of fetch. Siamese tend to seek human interaction and also like companionship from other cats.The Siamese (sometimes in the traditional form) is among the foundation stock of several other breeds developed by crossbreeding with other cats; some examples are the Oriental Shorthair and Colourpoint Shorthair, developed to expand the range of coat patterns; the long-haired variant most often dubbed the Himalayan; and hair-mutation breeds including the Cornish Rex, Sphynx, and Peterbald.`
        }, {
            src: 'scottish-fold.jpg',
            id: 'scottish-fold-cat',
            alt: 'scottish-fold',
            breed: 'Scottish Fold',
            type: "cat",
            desc: `The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to "fold", bending forward and down towards the front of their head, which gives the cat what is often described as an "owl-like" appearance.Originally called lop-eared or lops after the lop-eared rabbit, Scottish Fold became the breed's name in 1966. Depending on registries, longhaired Scottish Folds are varyingly known as Highland Fold, Scottish Fold Longhair, Longhair Fold and Coupari.
            The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susie's ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in Great Britain in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years—42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene.Susie's only reproducing offspring was a female Fold named Snooks who was also white; a second kitten was neutered shortly after birth. Three months after Snooks' birth, Susie was killed by a car. All Scottish Fold cats share a common ancestry to Susie`
        }, {
            src: 'persian.jpg',
            id: 'persian-cat',
            alt: 'persian',
            breed: 'Persian',
            type: "cat",
            desc: `The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. In Britain, it is sometimes called the Longhair or Persian Longhair. It is also known as the Shiraz or Shirazi, particularly in the Middle East. The first documented ancestors of the Persian were imported into Europe from Persia around 1620. Recognized by the cat fancy since the late 19th century, it was developed first by the English, and then mainly by American breeders after the Second World War. Some cat fancier organizations' breed standards subsume the Himalayan and Exotic Shorthair as variants of this breed, while others treat them as separate breeds.The selective breeding carried out by breeders has allowed the development of a wide variety of coat colors, but has also led to the creation of increasingly flat-faced Persians. Favored by fanciers, this head structure can bring with it a number of health problems. As is the case with the Siamese breed, there have been efforts by some breeders to preserve the older type of cat, the traditional breed, having a more pronounced muzzle, which is more popular with the general public. Hereditary polycystic kidney disease is prevalent in the breed, affecting almost half the population in some countries.In 2015 if was ranked as the 2nd most popular breed in the United States according to the Cat Fanciers' Association. [4] The first is the Exotic breed.`
        }, {
            src: 'himalayan.jpg',
            id: 'himalayan-cat',
            alt: 'himalayan',
            breed: 'Himalayan',
            type: "cat",
            desc: `The Himalayan (a.k.a. Himalayan Persian, or Colourpoint Persian as it is commonly referred to in Europe), is a breed or sub-breed of long-haired cat identical in type to the Persian, with the exception of its blue eyes and its point colouration, which were derived from crossing the Persian with the Siamese.`
        }];

        toggleState('container-cats');
        appendAnimalBreedsHtml(cats, '#container-cats ul');

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
        appendAnimalBreedsHtml(dogs, '#container-dogs ul');

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
            <li id="container-${animal.id}">
                <div class="animal-img-holder">
                    <img id="img-${animal.id}" src="./imgs/${animal.src}" alt="${animal.alt}" class="animal-img img-resposive img-thumbnail"/>
                    <div id="animal-info-${animal.id}" class="text-center h3 hiden">
                        ${animal.breed}
                        <div id="btn-info-container">
                            <button class="btn btn-info" id="btn-show-info-${animal.id}">Show info</button>
                        </div>
                    </div>
                </div>
            </li>
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