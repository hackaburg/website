if ("google" in window) {
  google.maps.event.addDomListener(window, "load", () => {
    const position = new google.maps.LatLng(49.002131, 12.100056);
    const container = document.querySelector(".venue #map");
    const map = new google.maps.Map(container, {
      center: position,
      scrollwheel: false,
      zoom: 15,

      styles: [
        {
          elementType: "labels.text",
          featureType: "all",
          stylers: [
            {
              color: "#8bc34a",
            },
            {
              weight: 0.37,
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          featureType: "administrative",
          stylers: [
            {
              color: "#444444",
            },
          ],
        },
        {
          elementType: "all",
          featureType: "landscape",
          stylers: [
            {
              color: "#f2f2f2",
            },
          ],
        },
        {
          elementType: "all",
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.icon",
          featureType: "poi.attraction",
          stylers: [
            {
              visibility: "on",
            },
            {
              saturation: 0,
            },
            {
              weight: 2.00,
            },
          ],
        },
        {
          elementType: "labels.icon",
          featureType: "poi.business",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          elementType: "labels.icon",
          featureType: "poi.government",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          elementType: "labels.icon",
          featureType: "poi.park",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          elementType: "labels.icon",
          featureType: "poi.school",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          elementType: "all",
          featureType: "road",
          stylers: [
            {
              saturation: -100,
            },
            {
              lightness: 45,
            },
          ],
        },
        {
          elementType: "all",
          featureType: "road.highway",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          elementType: "labels.icon",
          featureType: "road.arterial",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "all",
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "all",
          featureType: "water",
          stylers: [
            {
              color: "#8bc34a",
            },
            {
              visibility: "on",
            },
          ],
        },
      ],
    });

    return new google.maps.Marker({
      map,
      position,
    });
  });
}
