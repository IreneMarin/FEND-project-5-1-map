// Create variables used in the app
var map, marker, query, infowindow, contentString;
var search = function () { };
var placesListLength = places.length;
var markers = [];

// Function to initialize Google Maps 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.4029277, lng: 2.157448 },
        zoom: 17
    });


    contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        '(last visited June 22, 2009).</p>' +
        '</div>' +
        '</div>';

    infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Put list of places in the map
    for (var i = 0; i < placesListLength; i++) {
        marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: new google.maps.LatLng(places[i].latitude, places[i].longitude),
            name: places[i].name
        });
        //markers.push(marker);
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }
}

// Function to toggle the map markers
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}



var viewModel = {

    // Put all the places in the list by default
    // If we put (places) instead of (places.slice(0)), when we removeAll 
    // we will actually delete everything in the array... 
    places: ko.observableArray(places.slice(0)),



    // Observable for the search. Empty because we haven't searched anything yet
    query: ko.observable(''),

    search: function (value) {
        // Remove all the current places, which removes them from the view
        viewModel.places.removeAll();

        // Go through all the places. If the name or the category matches the one
        // in the search, push the place to the visible array
        for (var i = 0; i < placesListLength; i++) {
            if (places[i].name.toLowerCase().indexOf(value.toLowerCase()) >= 0
                || places[i].category.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                viewModel.places.push(places[i]);
            }
        }

/*
        for (var i = 0; i < markers.length; i++) {
            // Take away all the markers:
            markers[i].setVisible(false);
            // Put back some:
            if (markers[i].name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0) {
                markers[i].setVisible(true);
            }
        }*/

    }

};

viewModel.query.subscribe(viewModel.search);

ko.applyBindings(viewModel);



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