google.maps.event.addDomListener(window, "load", () => {
  const position = new google.maps.LatLng(49.002131, 12.100056),
        container = document.querySelector(".venue #map"),
        map = new google.maps.Map(container, {
          zoom: 15,
          scrollwheel: false,
          center: position,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text",
              stylers: [
                {
                  color: "#8bc34a"
                },
                {
                  weight: 0.37
                }
              ]
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#444444"
                }
              ]
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [
                {
                  color: "#f2f2f2"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi.attraction",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  saturation: 0
                },
                {
                  weight: 2.00
                }
              ]
            },
            {
              featureType: "poi.business",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "poi.government",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "poi.school",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [
                {
                  saturation: -100
                },
                {
                  lightness: 45
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [
                {
                  visibility: "simplified"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  color: "#8bc34a"
                },
                {
                  visibility: "on"
                }
              ]
            }
          ]
        });

  new google.maps.Marker({
    position,
    map
  });
});
