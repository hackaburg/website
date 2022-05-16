import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { breakpointMobile } from "../constants";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Button } from "./button";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Link } from "./link";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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

const Map = styled(MapContainer)`
  height: 25rem;
  border-radius: 5px;
`;

export const Venue = () => {
  const marker = useScrollSpyMarker(Anchors.Venue);

  return (
    <Container>
      <VenueContainer>
        {marker}
        <Header title="Venue" subtitle="How to get there" />

        <Row>
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

          <Column grow={1}>
            <Map center={[49.00225, 12.10015]} zoom={17} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </Map>
          </Column>
        </Row>
      </VenueContainer>
    </Container>
  );
};
