// Enable the visual refresh
google.maps.visualRefresh = true;



var contactMap;

function aboutInitialize() {
  var dwsCenter = new google.maps.LatLng(40.1545531, -99.1376119)
  var dwsOffice = new google.maps.LatLng(40.767795, -73.297847)
  var mapOptions = {
    zoom: 4,
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

    new google.maps.Marker({ position: new google.maps.LatLng(41.03,-73.63), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(37.6312485,-120.9804121), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(30.2584883,-89.4595319), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(40.2347855,-74.4522874), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(43.3050865,-70.8449035), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(40.8742345,-73.4149914), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(33.6432375,-84.444672), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.7881396,-78.699105), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(42.3904949,-85.194764), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(42.0360345,-88.412133), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(40.0293725,-75.7191), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(32.8946349,-117.049719), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(27.9350544,-82.3815985), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(44.0460449,-71.1197925), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(37.8918359,-122.0386904), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(33.9922081,-84.649447), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(44.2694236,-74.4842015), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(37.8800664,-122.265198), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(36.1164715,-94.0518999), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(36.151423,-86.7912164), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(37.4142965,-107.4775915), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(42.349717,-71.0332459), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(39.0838455,-94.582942), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(40.092957,-75.3913579), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(43.9966805,-73.1480624), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(43.9737954,-71.2552189), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.4912856,-76.1001354), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(43.660943,-70.260332), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(36.062515,-79.8235095), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(41.7902674,-71.6917895), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(43.9792796,-75.9087928), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.6356059,-90.669669), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(40.123304,-82.3851), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(41.7166834,-86.3413705), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(39.1582147,-75.5233588), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.828143,-104.8326766), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(41.3917999,-83.3140541), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(43.03,-87.92), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.68053,-123.42889), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(45.0702489,-87.141063), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.2725545,-85.625635), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(41.8172344,-71.4095425), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(42.7659543,-86.1069814), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(37.288464,-80.0669265), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(39.2847064,-76.6204859), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(40.4313684,-79.9805005), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(43.098369,-75.2281009), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.2891751,-122.3063215), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(36.9209557,-121.767273), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.9227306,-119.9785145), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(36.217517,-115.1207038), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(38.7931405,-104.9543185), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(44.4030225,-109.5779295), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(49.2569777,-123.123904), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(45.7819194,-108.5636845), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(18.3848264,-66.0583415), map: contactMap });
    new google.maps.Marker({ position: new google.maps.LatLng(45.6119975,-73.5697534), map: contactMap });


  google.maps.event.addListener(mainOffice, 'click', function() {
    dwsWindow.open(contactMap,mainOffice);
  });

}

google.maps.event.addDomListener(window, 'load', aboutInitialize);