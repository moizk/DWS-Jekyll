// Enable the visual refresh
google.maps.visualRefresh = true;



var contactMap;

function contactInitialize() {
  var dwsCenter = new google.maps.LatLng(40.777795, -73.297847)
  var dwsOffice = new google.maps.LatLng(40.767795, -73.297847)
  var mapOptions = {
    zoom: 10,
    center: dwsCenter,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };

  contactMap = new google.maps.Map(document.getElementById('dws_contact_page_map'),
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

  dwsWindow.open(contactMap, mainOffice);

}

google.maps.event.addDomListener(window, 'load', contactInitialize);