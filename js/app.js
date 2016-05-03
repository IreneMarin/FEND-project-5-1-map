// The ViewModel

// Create the Google Maps, centered in the neighbourhood and empty
var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.4029277, lng: 2.157448 },
    zoom: 17
});

// Create a function that will return us a place, with all its characteristics
var Place = function (data) {
    this.category = data.category;
    this.address = data.address;
    this.icon = data.icon;
    this.web = data.web;
    this.name = data.name;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.marker = null;
};


// Create a function for the infoWindow

// Create the KO function, where we will put all the app
var ViewModel = function () {
    var self = this;

    // Create empty array, to put later the list of all the places
    self.allPlaces = [];

    // Loop through all the places in the places.js to put them on screen
    // This way, we have all the places loaded at the beginning
    places.forEach(function (place) {

        // Put the places into the list
        self.allPlaces.push(new Place(place));

    });

    self.allPlaces.forEach(function (place) {
        // Put the places into the Google Maps with markers
        place.marker = new google.maps.Marker({
            map: map,
            position: { lat: place.latitude, lng: place.longitude },
            title: place.name + ' (' + place.category + ')',
            animation: google.maps.Animation.DROP
        });

        // Add listener onto the marker, to bounce the marker when clicked
        place.marker.addListener('click', toggleMarker);

        // Create a function to bounce the marker, when we click into it or into the list
        function toggleMarker() {
            if (place.marker.getAnimation() !== null) {
                place.marker.setAnimation(null);
            } else {
                place.marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function () {
                    place.marker.setAnimation(null);
                }, 2000);
            }
        }

    });
    
    // In the HTML, we have put the click databind in the <li> so that, when clicked, this will initiate
    // We trigger the bounce in the map marker
    self.list = function (place, marker) {
        google.maps.event.trigger(place.marker, 'click'); 
    };

    // Places that should be visible, based on user input.
    self.filteredPlaces = ko.observableArray();

    // All places should be visible at first, so we put them in the visible list
    self.allPlaces.forEach(function (place) {
        self.filteredPlaces.push(place);
    });

    // Create empty variable, which will give us the user's search
    self.query = ko.observable('');

    // Function to filter
    self.filter = function () {

        // First we remove everything from the visible list
        self.filteredPlaces.removeAll();

        // For each of the items in our allPlaces array... 
        self.allPlaces.forEach(function (place) {

            // First we remove the marker
            place.marker.setVisible(false);

            // Then we compare the name of the place in the array, with the name in our search
            if (place.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0) {

                // If its the same, we push the place in the visible array (which we cleared)
                self.filteredPlaces.push(place);
            }
        });

        // Now we have the list of all the visible places, based on our query search
        self.filteredPlaces().forEach(function (place) {

            // And we put the markers visible for these places
            place.marker.setVisible(true);
        });
    };
};

ko.applyBindings(new ViewModel());