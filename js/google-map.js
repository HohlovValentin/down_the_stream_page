function initMap() {
  var uluru = {lat: 44.77598622, lng: -85.36101495};
  var map = new google.maps.Map(document.getElementsByClassName('b-map')[0], 
  {
  zoom: 10,
  center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
