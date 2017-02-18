var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39, lng: -104},
    zoom: 6
  });
}
