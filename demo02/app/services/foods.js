app.factory('foods', function () {
    var foods = [{
        animal: {
            minAge: 0,
            maxAge: 3,
            type: "cat"
        },
        name: "Orijen Dry Food For Kittens",
        description: "Best food for consumption for young cats! Recommended consumption of 3 up to 4 times a day half of the provided cup in the bag",
        src: './resources/imgs/orijen-dry-adult-cat-and-kitten-food.jpg',
        id: 'orijen-dry-adult-cat-and-kitten-food-food',
        alt: 'orijen-dry-adult-cat-and-kitten-food'
        ,
    }, {
            animal: {
                minAge: 4,
                maxAge: 10,
                type: "cat"
            },
            name: "Orijen Dry Food For Kittens For Adult cats",
            description: "Best food for consumption for middle aged cats! Recommended consumption of 2 times a day, full cup, from the provided one in the bag",
            src: './resources/imgs/orijen-dry-adult-cat-and-kitten-food.jpg',
            id: 'orijen-dry-adult-cat-and-kitten-food-food',
            alt: 'orijen-dry-adult-cat-and-kitten-food'
        }, {
            animal: {
                minAge: 4,
                maxAge: 10,
                type: "cat"
            },
            name: "Royal Canin Canned Food",
            description: "Best food for consumption for middle aged cats! Recommended consumption of 2 small cans a day server with the dry food",
            src: './resources/imgs/royal-canin.jpg',
            id: 'royal-canin-food',
            alt: 'royal-canin'
        }, {
            animal: {
                minAge: 11,
                maxAge: Number.POSITIVE_INFINITY,
                type: "cat"
            },
            name: "Orijen Dry Food",
            description: "Best food for consumption for senior cats! Recommended consumption of 2 times a day, full cup, from the provided one in the bag",
            src: './resources/imgs/orijen-dry-adult-cat-and-kitten-food.jpg',
            id: 'orijen-dry-adult-cat-and-kitten-food-food',
            alt: 'orijen-dry-adult-cat-and-kitten-food'
        }, {
            animal: {
                minAge: 0,
                maxAge: 3,
                type: "dog"
            },
            name: "Wellness Core",
            description: "Best food for consumption for young cats! Recommended consumption of 3 up to 4 times a day half of the provided cup in the bag",
            src: './resources/imgs/wellness-core.jpg',
            id: 'wellness-core-food',
            alt: 'wellness-core'
        }, {
            animal: {
                minAge: 4,
                maxAge: 10,
                type: "dog"
            },
            name: "Blue Life Protection Formula",
            description: "Best food for consumption for young cats! Recommended consumption of 3 up to 4 times a day half of the provided cup in the bag",
            src: './resources/imgs/blue-life-protection.jpg',
            id: 'blue-life-protection-food',
            alt: 'blue-life-protection'
        }, {
            animal: {
                minAge: 11,
                maxAge: Number.POSITIVE_INFINITY,
                type: "dog"
            },
            name: "Instinct Rawboost",
            description: "Best food for consumption for senior cats! Recommended consumption of 2 times a day, full cup, from the provided one in the bag",
            src: './resources/imgs/instinct-rawboost.jpg',
            id: 'instinct-rawboost-food',
            alt: 'instinct-rawboost'
        }];
    return {
        getFoods: function (age, type) {
            var filteredFoods = foods.filter(food => {
                return age >= food.animal.minAge && age <= food.animal.maxAge && food.animal.type == type
            })
            return filteredFoods;
        }
    }

})