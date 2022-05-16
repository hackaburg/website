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

const Map = styled.iframe`
  width: 100%;
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
            <Map
              scrolling="no"
              src="https://www.openstreetmap.org/export/embed.html?bbox=12.093780040740969%2C48.99895101491149%2C12.106568813323976%2C49.005672708905124&amp;layer=mapnik&amp;marker=49.00231197530939%2C12.10017442703247"
            ></Map>
          </Column>
        </Row>
      </VenueContainer>
    </Container>
  );
};
