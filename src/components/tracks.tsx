import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Track } from "./track";

const TracksContainer = styled.div`
  margin: 5rem 0;
`;

const TrackContainer = styled.div`
  padding: 1rem 2rem 1rem 0;
`;

export const Tracks = () => {
  const marker = useScrollSpyMarker(Anchors.Tracks);

  return (
    <Container>
      <TracksContainer>
        {marker}
        <Header title="Tracks" subtitle="How you can change the future" />

        <Row>
          <Column grow={1}>
            <TrackContainer>
              <Track
                description="Your device is checking at the entrance gate to the TechBase underground parking and identifies the type of engine between gasoline, diesel and electric. In addition, two- wheelers should be identified and differentiated according to their engine (human, gasoline or electric) too."
                imageURL="images/tracks/sound-of-propulsion.png"
                sponsor="Infineon"
                title="The Sound of Propulsion"
              />
            </TrackContainer>
          </Column>

          <Column grow={1}>
            <TrackContainer>
              <Track
                description="How can digital tools - with regards to situations like the COVID-19 pandemic - elevate collaboration and networking within a company to a whole new level?"
                imageURL="images/tracks/new-ways-to-work.jpg"
                sponsor="Bayernwerk"
                title="New ways to work"
              />
            </TrackContainer>
          </Column>

          <Column grow={1}>
            <TrackContainer>
              <Track
                description="How can we effectively use our plant resources in times with pandemic and climate change?"
                imageURL="images/tracks/smart-sustainability-plant.png"
                sponsor="Continental"
                title="Smart Sustainability Plant"
              />
            </TrackContainer>
          </Column>
        </Row>
      </TracksContainer>
    </Container>
  );
};
