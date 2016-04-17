// Create variables used in the app
var map;
var placesListLength = places.length;

function initMap() {

    // Initialize Google Maps
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.4029277, lng: 2.157448 },
        zoom: 16
    });

    // Put list of places in the map
    for (var i = 0; i < placesListLength; i++) {
        var place = places[i];
        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: new google.maps.LatLng(places[i].latitude, places[i].longitude),
            name: places[i].name
        });
        place.marker = marker;
    }



}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


function ViewModel() {
    var self = this;

    self.locations = ko.observableArray([]);

    for (var i = 0; i < placesListLength; i++) {
        self.locations.push(places[i]);
        console.log(places[i]);
    }

    console.log(self.locations);

    // aquí dins només lo estricte de knowckout
    // tot el mapa fora 


}
ko.applyBindings(new ViewModel());

/*
var ViewModel = function() {

    infowindow = new google.maps.InfoWindow();
    var listLocationsLength = places.length;

    // Placing the icons on the map for every hard-coded location.

    for (var i = 0; i < listLocationsLength; i++) {

        // Changing the icon to a corresponding flag. Along with the size of the icons on the map.        
        var location = places[i];
        var latLng = new google.maps.LatLng(places[i].latitude, places[i].longitude);
        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: latLng,
            name: places[i].name
        });
        //tagList.push(location.name); // Taglist added to be used by auto-complete.
        location.marker = marker;

        marker.addListener('visible_changed', function() { // Added in resubmission, to hide the marker when its visibility changes
            infowindow.close(map, marker);
        });

        // Opening infowindows on clicking the hard-coded markers.

        google.maps.event.addListener(marker, 'click', (function(marker, i) {

            return function() {
                infowindow.open(map, marker);
                toggleBounce(marker);
                loadData(marker, infowindow);
                loadPhoto(marker, infowindow);
            };

            // Animating the markers when clicked

            function toggleBounce(marker) {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout(stopBounce, 2100); // Exactly 3 bounces when clicking

                    function stopBounce() {
                        marker.setAnimation(null);
                    }
                }
            }
        })(marker, i));

    }
    
}
ko.applyBindings(new ViewModel());

*/


/*
var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Taby');
    this.imgSrc = ko.observable('img/xxxx.jpg');
    
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings (new ViewModel());
*/