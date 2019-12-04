function initMap() {
  var wsuv = {lat: 45.731543, lng: -122.636275};
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 16,
        center: wsuv,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        scaleControl: false,
        fullscreenControl: false,
        gestureHandling: 'none'
      });
}