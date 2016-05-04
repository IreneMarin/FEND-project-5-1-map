// The Model
var places = [{
    category: 'restaurant',
    tags: 'restaurants, pizza, italian',
    icon: 'fa fa-cutlery',
    name: 'Messié',
    address: 'Torrent de Olla, 65',
    web: 'http://messiepizza.es',
    latitude: 41.4009104986,
    longitude: 2.1586897765
}, {
    category: 'restaurant',
    tags: 'restaurants, sushi, japanese',
    icon: 'fa fa-cutlery',
    name: 'Kibuka',
    address: 'Goya, 9',
    web: 'http://kibuka.com',
    latitude: 41.3992606979,
    longitude: 2.1565976534
}, {
    category: 'restaurant',
    tags: 'restaurants, creperies, french',
    icon: 'fa fa-cutlery',
    name: 'Olla del Torrent',
    address: 'Torrent de Olla, 106',
    web: 'http://lolladeltorrent.com',
    latitude: 41.4017836688,
    longitude: 2.1576866303
}, {
    category: 'restaurant',
    tags: 'restaurants, arabian',
    icon: 'fa fa-cutlery',
    name: 'Al Waha',
    address: 'Verdi, 16',
    web: '',
    latitude: 41.4034736423,
    longitude: 2.1573486720
}, {
    category: 'restaurant',
    tags: 'restaurants, pizza, salad',
    icon: 'fa fa-cutlery',
    name: 'I què?',
    address: 'Topazi, 8',
    web: 'http://iquerestaurant.com',
    latitude: 41.4045439362,
    longitude: 2.1554121171
}, {
    category: 'bar',
    tags: 'bars, beerbar',
    icon: 'fa fa-beer',
    name: 'El Otro',
    address: 'Travessera de Gràcia, 167',
    web: 'http://barelotro.com',
    latitude: 41.4015020008,
    longitude: 2.1578636805
}, {
    category: 'bar',
    tags: 'bars, beerbar',
    icon: 'fa fa-beer',
    name: 'Bar Vinilo',
    address: 'Matilde, 2',
    web: '',
    latitude: 41.4004558001,
    longitude: 2.1570482889
}, {
    category: 'bar',
    tags: 'bars, beerbar, cocktailbars',
    icon: 'fa fa-beer',
    name: 'St Germain',
    address: 'Torrent de Olla, 113',
    web: '',
    latitude: 41.4024234482,
    longitude: 2.1567371527
}, {
    category: 'bar',
    tags: 'bars, beerbar',
    icon: 'fa fa-beer',
    name: 'La Maceta',
    address: 'Progrés, 38',
    web: '',
    latitude: 41.3999769565,
    longitude: 2.1605297962
}, {
    category: 'coffee-shop',
    tags: 'coffeeshops',
    icon: 'fa fa-coffee',
    name: 'Suís',
    address: 'Travessera de Gràcia, 151',
    web: 'http://elsuis.com',
    latitude: 41.4008863540,
    longitude: 2.1569678227
}, {
    category: 'books',
    tags: 'bookstores',
    icon: 'fa fa-book',
    name: 'La Memòria',
    address: 'Plaça de la Vila de Gràcia, 19',
    web: '',
    latitude: 41.4000775542,
    longitude: 2.1573486963
}, {
    category: 'books',
    tags: 'bookstores',
    icon: 'fa fa-book',
    name: 'Haiku',
    address: 'Montseny, 7',
    web: 'http://haikubarcelona.com',
    latitude: 41.4021457657,
    longitude: 2.1550527673
}, {
    category: 'books',
    tags: 'bookstores',
    icon: 'fa fa-book',
    name: 'Aldarull',
    address: 'Torrent de Olla, 72',
    web: 'http://acciocultural.org',
    latitude: 41.4007454764,
    longitude: 2.1590653520
}, {
    category: 'books',
    tags: 'bookstores, comicbooks',
    icon: 'fa fa-book',
    name: 'Antifaz Comics',
    address: 'Gran de Gràcia, 239',
    web: 'http://antifazcomic.cat',
    latitude: 41.4053808015,
    longitude: 2.1506217580
}, {
    category: 'games',
    tags: 'videogamestores',
    icon: 'fa fa-gamepad',
    name: 'Game.es',
    address: 'Gran de Gràcia, 116',
    web: 'http://game.es',
    latitude: 41.4012444335,
    longitude: 2.1539155107
}, {
    category: 'games',
    tags: 'tabletopgames',
    icon: 'fa fa-gamepad',
    name: 'The Curiosity Shop',
    address: 'Ramon y Cajal, 13',
    web: 'http://thecuriosityshop.es',
    latitude: 41.4023630493,
    longitude: 2.1581748586
}, {
    category: 'games',
    tags: 'escapegames',
    icon: 'fa fa-gamepad',
    name: 'Roomin Escape',
    address: 'Robí, 6',
    web: '',
    latitude: 41.4044634196,
    longitude: 2.1551922421
}, {
    category: 'cinema & theatre',
    tags: 'theater',
    icon: 'fa fa-video-camera',
    name: 'Teatreneu',
    address: 'Terol, 26',
    web: 'http://teatreneu.com',
    latitude: 41.4032563185,
    longitude: 2.1586683850
}, {
    category: 'cinema & theatre',
    tags: 'theater',
    icon: 'fa fa-video-camera',
    name: 'Teatre Lliure de Gràcia',
    address: 'Montseny, 47',
    web: 'http://teatrelliure.com',
    latitude: 41.4027734718,
    longitude: 2.1560505490
}, {
    category: 'cinema & theatre',
    tags: 'movietheaters',
    icon: 'fa fa-video-camera',
    name: 'Cinemes Girona',
    address: 'Girona, 175',
    web: 'http://cinemesgirona.cat',
    latitude: 41.3998602205,
    longitude: 2.1645477872
}, {
    category: 'cinema & theatre',
    tags: 'movietheaters',
    icon: 'fa fa-video-camera',
    name: 'Bosque Multicines',
    address: 'Rambla del Prat, 16',
    web: 'http://grupbalana.com',
    latitude: 41.4014375772,
    longitude: 2.1518126588
}, {
    category: 'cinema & theatre',
    tags: 'movietheaters',
    icon: 'fa fa-video-camera',
    name: 'Cine Verdi',
    address: 'Torrijos, 14',
    web: 'http://cines-verdi.com',
    latitude: 41.4026929970,
    longitude: 2.1595159631
}];
