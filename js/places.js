// The Model
var places = [{
    category: 'restaurant',
    icon: 'fa fa-cutlery',
    name: 'Messie Pizza',
    address: 'Torrent de Olla, 65',
    web: 'messiepizza.es',
    latitude: 41.4009036,
    longitude: 2.1565914
}, {   
    category: 'restaurant',
    icon: 'fa fa-cutlery',
    name: 'Kibuka Goya',
    address: 'Goya, 9',
    web: 'kibuka.com',
    latitude: 41.4002376,
    longitude: 2.1585076        
}, {   
    category: 'restaurant',
    icon: 'fa fa-cutlery',
    name: 'Olla del Torrent',
    address: 'Torrent de Olla, 106',
    web: 'lolladeltorrent.com',
    latitude: 41.4014729,
    longitude: 2.1570592
}, {   
    category: 'restaurant',
    icon: 'fa fa-cutlery',
    name: 'Restaurant Toyo',
    address: 'Torrent de Olla, 10',
    web: 'restaurantetoyo.com',
    latitude: 41.3987222,
    longitude: 2.1593477
}, {   
    category: 'restaurant',
    icon: 'fa fa-cutlery',
    name: 'Ramen-ya Hiro',
    address: 'Girona, 164',
    web: '',
    latitude: 41.3996514,
    longitude: 2.1631275
}, {   
    category: 'restaurant',
    icon: 'fa fa-cutlery',
    name: 'Al Waha',
    address: 'Verdi, 16',
    web: '',
    latitude: 41.403459,
    longitude: 2.1567388
}, {   
    category: 'restaurant',
    icon: 'fa fa-cutlery',
    name: 'I què?',
    address: 'Topazi, 8',
    web: 'iquerestaurant.com',
    latitude: 41.4045422,
    longitude: 2.154889
}, {
    category: 'bar',
    icon: 'fa fa-beer',
    name: 'Bar El Otro',
    address: 'Travessera de Gràcia, 167',
    web: 'barelotro.com',
    latitude: 41.401468,
    longitude: 2.155701
}, {
    category: 'bar',
    icon: 'fa fa-beer',
    name: 'Bar Vinil()',
    address: 'Matilde, 2',
    web: '',
    latitude: 41.4001986,
    longitude: 2.1571333
}, {
    category: 'bar',
    icon: 'fa fa-beer',
    name: 'Bar St. Germain',
    address: 'Torrent de Olla, 113',
    web: '',
    latitude: 41.4714437,
    longitude: 2.1146087
}, {
    category: 'bar',
    icon: 'fa fa-beer',
    name: 'La Maceta',
    address: 'Progrés, 38',
    web: '',
    latitude: 41.4005163,
    longitude: 2.1592543
}, {
    category: 'coffee-shop',
    icon: 'fa fa-coffee',
    name: 'Cafe Camelia',
    address: 'Verdi, 79',
    web: '',
    latitude: 41.4051147,
    longitude: 2.1548722
}, {
    category: 'coffee-shop',
    icon: 'fa fa-coffee',
    name: 'Oh! Caffe',
    address: 'Gran de Gràcia',
    web: '',
    latitude: 41.3989692,
    longitude: 2.1476088
}, {
    category: 'coffee-shop',
    icon: 'fa fa-coffee',
    name: 'Cafè Godot',
    address: 'Sant Domènec, 19',
    web: 'cafegodot.com',
    latitude: 41.4001678,
    longitude: 2.1564141
}, {
    category: 'coffee-shop',
    icon: 'fa fa-coffee',
    name: 'Cafetería El Suís',
    address: 'Travessera de Gràcia, 151',
    web: 'elsuis.com',
    latitude: 41.4009243,
    longitude: 2.156545
}, {
    category: 'books',
    icon: 'fa fa-book',
    name: 'La Memòria',
    address: 'Plaça de la Vila de Gràcia, 19',
    web: '',
    latitude: 41.4001503,
    longitude: 2.157419
}, {
    category: 'books',
    icon: 'fa fa-book',
    name: 'Haiku',
    address: 'Montseny, 7',
    web: 'haikubarcelona.com',
    latitude: 41.4009524,
    longitude: 2.1565492
}, {
    category: 'books',
    icon: 'fa fa-book',
    name: 'Aldarull',
    address: 'Torrent de Olla, 72',
    web: 'acciocultural.org',
    latitude: 41.4005898,
    longitude: 2.1570969
}, {
    category: 'books',
    icon: 'fa fa-book',
    name: 'Antifaz Comics',
    address: 'Gran de Gràcia, 239',
    web: 'antifazcomic.cat',
    latitude: 41.4053551,
    longitude: 2.148452
}, {
    category: 'games',
    icon: 'fa fa-gamepad',
    name: 'Game.es',
    address: 'Gran de Gràcia, 116',
    web: 'game.es',
    latitude: 41.3989547,
    longitude: 2.1496657
}, {
    category: 'games',
    icon: 'fa fa-gamepad',
    name: 'The Curiosity Shop',
    address: 'Ramon y Cajal, 13',
    web: 'thecuriosityshop.es',
    latitude: 41.4009263,
    longitude: 2.1504057
}, {
    category: 'games',
    icon: 'fa fa-gamepad',
    name: 'Roomin Escape',
    address: 'Robí, 6',
    web: '',
    latitude: 41.404547,
    longitude: 2.1547458
}, {
    category: 'cinema & theatre',
    icon: 'fa fa-video-camera',
    name: 'Teatreneu',
    address: 'Terol, 26',
    web: 'teatreneu.com',
    latitude: 41.4032351,
    longitude: 2.1564512
}, {
    category: 'cinema & theatre',
    icon: 'fa fa-video-camera',
    name: 'Teatre Lliure de Gràcia',
    address: 'Montseny, 47',
    web: 'teatrelliure.com',
    latitude: 41.4027398,
    longitude: 2.1538444
}, {
    category: 'cinema & theatre',
    icon: 'fa fa-video-camera',
    name: 'Cinemes Girona',
    address: 'Girona, 175',
    web: 'cinemesgirona.cat',
    latitude: 41.399656,
    longitude: 2.1623361
}, {
    category: 'cinema & theatre',
    icon: 'fa fa-video-camera',
    name: 'Cine Texas',
    address: 'Bailèn, 205',
    web: 'cinemestexas.cat',
    latitude: 41.4020494,
    longitude: 2.1614495
}, {
    category: 'cinema & theatre',
    icon: 'fa fa-video-camera',
    name: 'Bosque Multicines',
    address: 'Rambla del Prat, 16',
    web: 'grupbalana.com',
    latitude: 41.4015154,
    longitude: 2.1496618
}, {
    category: 'cinema & theatre',
    icon: 'fa fa-video-camera',
    name: 'Cine Verdi',
    address: 'Torrijos, 14',
    web: 'cines-verdi.com',
    latitude: 41.4040056,
    longitude: 2.1546641
}];