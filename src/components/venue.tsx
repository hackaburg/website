import styled from "@emotion/styled";
import * as React from "react";
import { useRef } from "react";
import { Anchors } from "../anchors";
import { useGoogleMaps } from "../hooks/use-google-maps";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Button } from "./button";
import { Container } from "./container";
import { Header } from "./header";
import { Link } from "./link";

const VenueContainer = styled.div`
  margin: 10rem 0;
`;

const Address = styled.div`
  display: inline-block;
  width: 15rem;
  margin-right: 2rem;
`;

const Map = styled.div``;

export const Venue = () => {
  const marker = useScrollSpyMarker(Anchors.Venue);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useGoogleMaps(() => {
    if (!mapRef.current || 1 > 0) {
      return;
    }

    const position = new google.maps.LatLng(49.002131, 12.100056);
    const map = new google.maps.Map(mapRef.current, {
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
              weight: 2.0,
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

    markerRef.current = new google.maps.Marker({
      map,
      position,
    });
  });

  return (
    <VenueContainer>
      <Container>
        {marker}
        <Header title="Venue" subtitle="How to get there" />

        <Address>
          <p>TechBase Regensburg</p>
          <p>
            Franz-Mayer-Straße 1
            <br />
            93053 Regensburg
          </p>

          <Link
            label="Google Maps to Hackaburg"
            target="_blank"
            to="https://www.google.de/maps/dir//TechBase+Regensburg"
          >
            <Button fluid>Directions</Button>
          </Link>
        </Address>
        <Map ref={mapRef} />
      </Container>

      <script
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDN9OfnCw7Q1XPaQ_hNRg7ccNPHO43_6qU"
      ></script>
    </VenueContainer>
  );
};
