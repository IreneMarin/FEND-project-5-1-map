// Create Google Maps and initialize its center in the Vila de Gracia neighborhood
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    	center: { lat: 41.4029277, lng: 2.157448 },
    	zoom: 16
	});
} 
