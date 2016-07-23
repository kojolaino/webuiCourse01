app.factory('animal', function() {
    var cats = [{
            src: './resources/imgs/british-short-hair2.jpg',
            id: 'british-cat',
            alt: 'british',
            breed: 'British Short Haired',
            type: "cat",
            show: false,
            desc: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the 'British Blue', a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into the UK by the invading Romans in the first century AD. In modern times it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. In the more modern era, a blue British Shorthair is the subject of the original  image, credited with popularising the lolcat phenomenon."
        }, {
                src: './resources/imgs/exotich-short-hair.jpg',
                id: 'exotich-short-hair-cat',
                alt: 'exotich-short-hair',
                breed: 'Exotich Short Hair',
                type: "cat",
                show: false,
                desc: `The Exotic Shorthair is a breed of cat developed to be a short-haired version of the Persian. The Exotic is similar to the Persian in many ways, including temperament and conformation, with the exception of the short dense coat.
            In the late 1950s, the Persian was used as an outcross by some American Shorthair (ASH) breeders. This was done in secret in order to improve their body type, and crosses were also made with the Russian Blue and the Burmese. The crossbreed look gained recognition in the show ring, but unhappy American Shorthair breeders successfully produced a new breed standard that would disqualify ASH that showed signs of crossbreeding. One ASH breeder who saw the potential of the Persian/ASH cross proposed and eventually managed to get the Cat Fanciers' Association judge and American Shorthair breeder Jane Martinke to recognize them as a new breed in 1966, under the name Exotic Shorthair. Since 1987, the CFA closed the Exotic to shorthair outcrosses, leaving Persians as the only allowable outcross breed.
            Because of the regular use of Persians as outcrosses, some Exotics may carry a copy of the recessive longhair gene. When two such cats mate, there is a 1 in 4 chance of each offspring being longhaired. Ironically, longhaired Exotics are not considered Persians by CFA, although The International Cat Association accepts them as Persians. Other associations like the American Cat Fanciers Association register them as a separate Exotic Longhair breed.`
            }, {
                src: './resources/imgs/siamska.jpg',
                id: 'siamska-cat',
                alt: 'siamska',
                breed: 'Siamese',
                type: "cat",
                show: false,
                desc: `The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the rtgs: wichianmat (Thai: วิเชียรมาศ,  [wí.tɕʰīan.mâːt] ( listen)) landrace, one of several varieties of cat native to Thailand (formerly known as Siam), the Siamese became one of the most popular breeds in Europe and North America in the 20th century. The carefully refined modern Siamese is characterized by blue almond-shaped eyes, a triangular head shape, large ears, an elongated, slender, and muscular body, and point colouration. (Aside from the colouration, it bears little resemblance to the original stock, and the more moderate, traditional or "old-style" Siamese, with a much rounder head and body, has been re-established by multiple registries as the Thai cat.) The International Cat Association describes the modern Siamese as social, intelligent, and playful into adulthood, often enjoying a game of fetch. Siamese tend to seek human interaction and also like companionship from other cats.The Siamese (sometimes in the traditional form) is among the foundation stock of several other breeds developed by crossbreeding with other cats; some examples are the Oriental Shorthair and Colourpoint Shorthair, developed to expand the range of coat patterns; the long-haired variant most often dubbed the Himalayan; and hair-mutation breeds including the Cornish Rex, Sphynx, and Peterbald.`
            }, {
                src: './resources/imgs/scottish-fold.jpg',
                id: 'scottish-fold-cat',
                alt: 'scottish-fold',
                breed: 'Scottish Fold',
                type: "cat",
                show: false,
                desc: `The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to "fold", bending forward and down towards the front of their head, which gives the cat what is often described as an "owl-like" appearance.Originally called lop-eared or lops after the lop-eared rabbit, Scottish Fold became the breed's name in 1966. Depending on registries, longhaired Scottish Folds are varyingly known as Highland Fold, Scottish Fold Longhair, Longhair Fold and Coupari.
            The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susie's ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in Great Britain in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years—42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene.Susie's only reproducing offspring was a female Fold named Snooks who was also white; a second kitten was neutered shortly after birth. Three months after Snooks' birth, Susie was killed by a car. All Scottish Fold cats share a common ancestry to Susie`
            }, {
                src: './resources/imgs/persian.jpg',
                id: 'persian-cat',
                alt: 'persian',
                breed: 'Persian',
                type: "cat",
                show: false,
                desc: `The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. In Britain, it is sometimes called the Longhair or Persian Longhair. It is also known as the Shiraz or Shirazi, particularly in the Middle East. The first documented ancestors of the Persian were imported into Europe from Persia around 1620. Recognized by the cat fancy since the late 19th century, it was developed first by the English, and then mainly by American breeders after the Second World War. Some cat fancier organizations' breed standards subsume the Himalayan and Exotic Shorthair as variants of this breed, while others treat them as separate breeds.The selective breeding carried out by breeders has allowed the development of a wide variety of coat colors, but has also led to the creation of increasingly flat-faced Persians. Favored by fanciers, this head structure can bring with it a number of health problems. As is the case with the Siamese breed, there have been efforts by some breeders to preserve the older type of cat, the traditional breed, having a more pronounced muzzle, which is more popular with the general public. Hereditary polycystic kidney disease is prevalent in the breed, affecting almost half the population in some countries.In 2015 if was ranked as the 2nd most popular breed in the United shows according to the Cat Fanciers' Association.  The first is the Exotic breed.`
            }, {
                src: './resources/imgs/himalayan.jpg',
                id: 'himalayan-cat',
                alt: 'himalayan',
                breed: 'Himalayan',
                type: "cat",
                show: false,
                desc: `The Himalayan (a.k.a. Himalayan Persian, or Colourpoint Persian as it is commonly referred to in Europe), is a breed or sub-breed of long-haired cat identical in type to the Persian, with the exception of its blue eyes and its point colouration, which were derived from crossing the Persian with the Siamese.`
            }];
        var dogs = [{
                src: './resources/imgs/buldog.jpg',
                id: 'buldog-dog',
                alt: 'buldog',
                breed: 'Bulldog',
                type: "dog",
                show: false,
                desc: `The Bulldog is a medium-sized breed of dog commonly referred to as the English Bulldog or British Bulldog. Other Bulldog breeds include the American Bulldog, Old English Bulldog (now extinct), Leavitt Bulldog, Olde English Bulldogge, and the French Bulldog. The Bulldog is a muscular, hefty dog with a wrinkled face and a distinctive pushed-in nose. The American Kennel Club (AKC), The Kennel Club (UK), and the United Kennel Club (UKC) oversee breeding records. Bulldogs were the fourth most popular purebreed in the United States in 2015 according to the American Kennel Club.A 2004 UK survey of 180 Bulldog deaths puts the median age at death at 6 years 3 months. The leading cause of death of Bulldogs in the survey was cardiac related (20%), cancer (18%), and old age (9%). Those that died of old age had an average lifespan of 10 to 11 years. A 2013 UK vet clinic survey of 26 Bulldogs puts the median lifespan at 8.4 years with an interquartile range of 3.2–11.3 years.[3] The UK Bulldog Breed Council website lists the average life span of the breed as 8–10 years.Statistics from the Orthopedic Foundation for Animals indicate that of the 467 Bulldogs tested between 1979 and 2009 (30 years), 73.9% were affected by hip dysplasia, the highest amongst all breeds.[15] Similarly, the breed has the worst score in the British Veterinary Association/Kennel Club Hip Dysplasia scoring scheme, although only 22 Bulldogs were tested in the scheme.[16] Patellar luxation affects 6.2% of Bulldogs.Some individuals of this breed are prone to interdigital cysts—cysts that form between the toes. These cause the dog some discomfort, but are treatable either by vet or an experienced owner. They may also suffer from respiratory problems. Other problems can include cherry eye, a protrusion of the inner eyelid (which can be corrected by a veterinarian), allergies, and hip issues in older Bulldogs.Over 80% of Bulldog litters are delivered by Caesarean section[18] because their characteristically large heads can become lodged in the mother's birth canal. The folds, or "rope", on a Bulldog's face should be cleaned daily to avoid infections caused by moisture accumulation. Some Bulldogs' naturally curling tails can be so tight to the body as to require regular cleaning and ointment.Like all dogs, Bulldogs require daily exercise. If not properly exercised it is possible for a Bulldog to become overweight, which could lead to heart and lung problems, as well as stress on the joints.Bulldog about to sleepBulldogs have very small nasal cavities and thus have great difficulty keeping their bodies cool. Bulldogs are very sensitive to heat. Extra caution should be practiced in warmer climates and during summer months. Bulldogs must be given plenty of shade and water, and must be kept out of standing heat. Air conditioning and good ventilation are required to keep them healthy and safe. Bulldogs actually do most of their sweating through the pads on their feet and accordingly enjoy cool floors. Like all brachycephalic, or "short faced", breeds, Bulldogs can easily become overheated and even die from hyperthermia. (see Brachycephalic syndrome) Bulldog owners can keep these issues under control by staying aware and protecting their Bulldog(s) from these unsafe conditions. They can be heavy breathers, and they tend to be loud snorers.In 2014 the Dutch Kennel Club implemented some breeding rules to improve the health of the Bulldog. Among these is a fitness test where the dog has to walk 1 km (0.62 miles) in 12 minutes. Its temperature and heart rate has to recover after 15 minutes.[20] In January 2009, after the BBC documentary Pedigree Dogs Exposed, The Kennel Club introduced revised breed standards for the British Bulldog, along with 209 other breeds, to address health concerns. Opposed by the British Bulldog Breed Council, it was speculated by the press that the changes would lead to a smaller head, fewer skin folds, a longer muzzle, and a taller thinner posture, in order to combat problems with respiration and breeding due to head size and width of shoulders.`
        }, {
                src: './resources/imgs/german-shepard.jpg',
                id: 'germanShepard-dog',
                alt: 'germanShepard',
                breed: 'German Shepard',
                type: "dog",
                show: false,
                desc: `The German Shepherd (German: Deutscher Schäferhund, German pronunciation: [ˈʃɛːfɐˌhʊnt]) is a breed of medium to large-sized working dog that originated in Germany. The breed's officially recognized name is German Shepherd Dog in the English language, sometimes abbreviated as GSD and was also formerly known as the Alsatian in Britain. The German Shepherd is a relatively new breed of dog, with their origin dating to 1899. As part of the Herding Group, German Shepherds are working dogs developed originally for herding sheep. Since that time, however, because of their strength, intelligence, trainability, and obedience, German Shepherds around the world are often the preferred breed for many types of work, including disability assistance, search-and-rescue, police and military roles, and even acting.[6] The German Shepherd is the second-most popular breed of dog in the United States and fourth-most popular in the United Kingdom.Many common ailments of the German Shepherds are a result of the inbreeding practiced early in the breed's life (although this was necessary to preserve other traits for the breed). One such common ailment is hip and elbow dysplasia which may lead to the dog experiencing pain in later life and may cause arthritis. A study conducted by the University of Zurich found that 45% of the police working dogs were affected by degenerative spinal stenosis, although the sample studied was small. The Orthopedic Foundation for Animals found that 19.1% of German Shepherd are affected by hip dysplasia. Due to the large and open nature of their ears, German Shepherds are not prone to ear infections because there is no hair in the outer ear canal to hold debris or moisture. According to a recent survey in the UK, the median life span of German Shepherds is 10.95 years, which is normal for a dog of their size.Degenerative myelopathy, a neurological disease, occurs with enough regularity specifically in the breed to suggest that the breed is predisposed to it. A very inexpensive DNA saliva test is now available to screen for degenerative myelopathy. The test screens for the mutated gene that has been seen in dogs with degenerative myelopathy. A small study in the UK showed 16% of young asymptomatic GSDs to be homozygous for the mutation, with a further 38% being carriers. Now that a test is available the disease can be bred out of breeds with a high preponderance. The test is only recommended for predisposed breeds, but can be performed on DNA from any dog on samples collected through swabbing the inside of the animal's cheek with a sterile cotton swab. Now that there is a test available, prospective German Shepherd buyers can request the test from the breeder or buy from a breeder known to test their dogs.
                Additionally, German Shepherds have a higher than normal incidence of Von Willebrand disease, a common inherited bleeding disorder, and exocrine pancreatic insufficiency (EPI), a degenerative disease of the pancreas. It is estimated that 1% of the UK GSD population suffers from this disease. Treatment is usually in the form of pancreatic supplements being given with food.`

            }, {
                src: './resources/imgs/german-dog.jpg',
                id: 'greateDane-dog',
                alt: 'german-dog',
                breed: 'Great Dane',
                type: "dog",
                show: false,
                desc: `The Great Dane is a large German breed of domestic dog known for its giant size. The German name of the breed is Deutsche Dogge, or German Mastiff. The French name is Dogue Allemand.
                The Great Dane is one of the tallest dog breeds. The record holder for tallest dog was a Great Dane called Zeus (died September 2014; aged 5), that measured 111.8 cm (44.0 in) from paw to shoulder.[
                Great Danes, like most giant dogs, have a fairly slow metabolism. This results in less energy and less food consumption per pound of dog than in small breeds. They have some health problems that are common to large breeds, including bloat (gastric dilatation volvulus). Their average lifespan is 6 to 8 years; however, some Great Danes have been known to reach 10 years of age or more.[46][47] Like many larger breeds, Great Danes are at particular risk for hip dysplasia.
                Dilated cardiomyopathy and many congenital heart diseases are also commonly found in the Great Dane, leading to its nickname: the heartbreak breed, in conjunction with its shorter lifespan. Great Danes also may carry the merle gene, which is part of the genetic makeup that creates the harlequin coloring.[48] The merle gene is an incomplete dominant, meaning only one copy of the gene is needed to show the merle coloring; two merle genes produce excessive white markings and many health issues such as deafness, blindness, or other debilitating ocular issues. Great Danes can also develop wobbler disease, a condition affecting the vertebral column. Since these dogs do grow at a rapid rate, the bones in their vertebae can push up against the spinal cord and cause weakness in the legs. This can be treated with surgery or may heal itself over time.`
            }];
    return {
        getCats: function(catid) {
            if (catid){
                var filteredCat = cats.filter(function(cat) {
                    return catid === cat.id;
                })
                return filteredCat[0]
            } else {
                return cats;
            };
        },
      getDogs: function(dogid) {
            if (dogid){
                var filteredDog = dogs.filter(function(dog) {
                    return dogid === dog.id;
                })
                return filteredDog[0]
            } else {
                return dogs;
            };
        } 
    }
})