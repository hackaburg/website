import styled from "@emotion/styled";
import * as React from "react";
import { useCallback, useRef } from "react";
import Helmet from "react-helmet";
import { Anchors } from "../anchors";
import { breakpointMobile } from "../constants";
import {
  useGoogleMapsApiKey,
  useGoogleMapsWhenLoaded,
} from "../hooks/use-google-maps";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Button } from "./button";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Link } from "./link";

const VenueContainer = styled.div`
  margin: 10rem 0;
`;

const Address = styled.div`
  display: inline-block;
  width: 15rem;
  margin-right: 2rem;

  @media screen and (max-width: ${breakpointMobile}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Map = styled.div`
  height: 15rem;
  border-radius: 5px;
`;

export const Venue = () => {
  const marker = useScrollSpyMarker(Anchors.Venue);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const apiKey = useGoogleMapsApiKey();
  const setupGoogleMaps = useCallback(() => {
    if (!mapRef.current) {
      return;
    }

    const position = new window.google.maps.LatLng(49.002131, 12.100056);
    const map = new window.google.maps.Map(mapRef.current, {
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

    markerRef.current = new window.google.maps.Marker({
      map,
      position,
    });
  }, []);

  useGoogleMapsWhenLoaded(setupGoogleMaps);

  return (
    <Container>
      <Helmet>
        <script
          type="text/javascript"
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
        ></script>
      </Helmet>

      <VenueContainer>
        {marker}
        <Header title="Venue" subtitle="How to get there" />

        <Row center>
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

          <Column>
            <Map ref={mapRef} />
          </Column>
        </Row>
      </VenueContainer>
    </Container>
  );
};
