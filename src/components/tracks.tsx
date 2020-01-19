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
          <Column>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>

          <Column>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>
        </Row>

        <Row>
          <Column>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>

          <Column>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>
        </Row>

        <Row>
          <Column>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>

          <Column>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>
        </Row>
      </TracksContainer>
    </Container>
  );
};
