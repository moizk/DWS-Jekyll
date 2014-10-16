// Enable the visual refresh
google.maps.visualRefresh = true;



var contactMap;

function contactInitialize() {
  var dwsCenter = new google.maps.LatLng(40.797795, -73.297847)
  var dwsOffice = new google.maps.LatLng(40.767795, -73.297847)
  var mapOptions = {
    zoom: 10,
    center: dwsCenter,
    draggable: false,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [

        // WATER

        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            color: '#a2daf2'
          }]
        },

        // LANDSCAPE

        {
          featureType: 'landscape.man_made',
          elementType: 'geometry',
          stylers: [{
            color: '#f7f1df'
          }]
        },

        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{
            color: '#d0e3b4'
          }]
        },

        {
          featureType: 'landscape.natural.terrain',
          elementType: 'geometry',
          stylers: [{
            visibility: 'off'
          }]
        },

        // POINTS OF INTEREST

        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{
            color: '#bde6ab'
          }]
        },

        {
          featureType: 'poi.medical',
          elementType: 'geometry',
          stylers: [{
            color: '#fbd3da'
          }]
        },

        {
          featureType: 'poi.business',
          stylers: [{
            visibility: 'off'
          }]
        },

        // ROADS

        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#f1e577'
          }]
        },


        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#efd151'
          }]
        },

        {
          featureType: 'road.highway.controlled_access',
          elementType: 'labels.text',
          stylers: [{
            visibility: 'off'
          }]
        },

        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#ffffff'
          }]
        },

        {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [{
            color: 'black'
          }]
        },

        // TRANSIT

        {
          featureType: 'transit.station.airport',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#cfb2db'
          }]
        }

      ]

  };


  officePin = new google.maps.MarkerImage("http://nooklyn-files.s3.amazonaws.com/map/thirdpin.png", new google.maps.Size(32, 32), new google.maps.Point(0, 0), new google.maps.Point(16, 32));
  contactMap = new google.maps.Map(document.getElementById('dws_contact_page_map'),
      mapOptions);

  var dwsContent = '<div id="map_content">'+
      '<h1 id="firstHeading">DWS Printing</h1>'+
      '<div id="bodyContent">'+
      '<p class="text-center">89 N Industry Ct.<br>' +
      'Deer Park, NY 11729<br><br>'+
      'Phone: (631) 667-6666<br>'+
      '</div>'+
      '</div>';

  var dwsWindow = new google.maps.InfoWindow({
      content: dwsContent
  });

  var mainOffice = new google.maps.Marker({
    position: dwsOffice,
    icon: officePin,
    map: contactMap,
    title: 'DWS Office'
  });

  google.maps.event.addListener(mainOffice, 'click', function() {
    dwsWindow.open(contactMap,mainOffice);
  });

  dwsWindow.open(contactMap, mainOffice);

}

google.maps.event.addDomListener(window, 'load', contactInitialize);