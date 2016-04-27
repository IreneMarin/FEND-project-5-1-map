// Create variables used in the app
var map;
var query;
var search = function(){};
var placesListLength = places.length;

// Function to initialize Google Maps 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.4029277, lng: 2.157448 },
        zoom: 17
    });

    // Put list of places in the map
    /*for (var i = 0; i < placesListLength; i++) {        
        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: new google.maps.LatLng(places[i].latitude, places[i].longitude),
            name: places[i].name
        });
    }*/
}

// Function to toggle the map markers
/*
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}*/



var viewModel = {
  
  // Put all the places in the list by default
  places: ko.observableArray(places.slice(0)),
  
  // Observable for the search. Empty because we haven't searched anything yet
  query: ko.observable(''),
  
  search: function(value) {
    // Remove all the current places, which removes them from the view
    viewModel.places.removeAll();

    for(var i = 0; i < placesListLength; i++) {
      if (places[i].name.toLowerCase().indexOf(value.toLowerCase()) >= 0 
      || places[i].category.toLowerCase().indexOf(value.toLowerCase()) >= 0)  {
        viewModel.places.push(places[i]);
      }
    }
  }
  
};

viewModel.query.subscribe(viewModel.search);

ko.applyBindings(viewModel);





/*
// ViewModel Knockout
function ViewModel() {
    var self = this;

    // Put all the places in the list by default
    self.places = ko.observableArray([]);
    
    self.places = ko.observableArray(places)

    for (var i = 0; i < placesListLength; i++) {
        self.places.push(places[i]);        
    }
   
    this.toggleMarker = function() {
        console.log('hi');
        // aquí posarem el toggle per fer que es vergi nomes el marker aquest 
    };     
    
    
    
    // Observable for the search. Empty because we haven't searched anything by default
    self.query = ko.observable(''); 

    self.search = function(value) {
        // remove all the current beers, which removes them from the view
        viewModel.places.removeAll();

        for(var x in places) {
            if(places[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                self.places.push(places[x]);
            }
        }
    }
    
    
    self.results = ko.computed(function () {
        return ko.utils.arrayFilter(self.places(), function (list) {
            //Match search with items in sortedLocations() observable array
            var listFilter = list.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
            if (listFilter) { //if user input matches any of the brewery names, show only the matches
                toggleMarker.marker.setVisible(true);
            } else {
                toggleMarker.marker.setVisible(false); //hide markers and list items that do not match results
            }

            return listFilter;

        });
    });
   
    
}

viewModel.query.subscribe(viewModel.search);

ko.applyBindings(new ViewModel());
*/


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