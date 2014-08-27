// Enable the visual refresh
google.maps.visualRefresh = true;



var contactMap;

function aboutInitialize() {
  var dwsCenter = new google.maps.LatLng(20.5505084, 7.4843037)
  var dwsOffice = new google.maps.LatLng(40.767795, -73.297847)
  var mapOptions = {
    zoom: 3,
    center: dwsCenter,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {},
    {
        "featureType": "road",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    }
]

  };

  contactMap = new google.maps.Map(document.getElementById('dws_about_page_map'),
      mapOptions);

  var dwsContent = '<div id="map_content">'+
      '<h1 id="firstHeading">DWS Printing</h1>'+
      '<div id="bodyContent">'+
      '<p class="text-center">89 N Industry Ct.<br>' +
      'Deer Park, NY 11729<br><br>'+
      'Phone: (631) 667-6666<br>'+
      'Hours: M-F: 7am - 11pm</p>'+
      '</div>'+
      '</div>';

  var dwsWindow = new google.maps.InfoWindow({
      content: dwsContent
  });

  var mainOffice = new google.maps.Marker({
    position: dwsOffice,
    map: contactMap,
    title: 'DWS Office'
  });

  google.maps.event.addListener(mainOffice, 'click', function() {
    dwsWindow.open(contactMap,mainOffice);
  });

}

google.maps.event.addDomListener(window, 'load', aboutInitialize);