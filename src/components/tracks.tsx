import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Container } from "./container";
// @ts-ignore
import { Column } from "./grid/column";
// @ts-ignore
import { Row } from "./grid/row";
import { Header } from "./header";
// @ts-ignore
import { Track } from "./track";

const TracksContainer = styled.div`
  margin: 5rem 0;
`;

// @ts-ignore
const TrackContainer = styled.div`
  padding: 1rem 2rem 1rem 0;
`;

export const Tracks = () => {
  const marker = useScrollSpyMarker(Anchors.Tracks);

  /*
  return (
    <Container>
      <TracksContainer>
        {marker}
        <Header title="Tracks" subtitle="How you can change the future" />

        <Row>
          <Column grow={1}>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>

          <Column grow={1}>
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
          <Column grow={1}>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>

          <Column grow={1}>
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
          <Column grow={1}>
            <TrackContainer>
              <Track
                description="How can we connect people with the same destination: the local football arena? Find digital and sustainable solutions to connect those people to foster shared mobility."
                imageURL="images/tracks/connected-mobility.jpg"
                sponsor="SSV Jahn Regensburg"
                title="A common goal"
              />
            </TrackContainer>
          </Column>

          <Column grow={1}>
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
  */

  return (
    <Container>
      <TracksContainer>
        {marker}
        <Header title="Tracks" subtitle="How you can change the future" />

        <h3>
          Tracks will be announced at a later date. Check back with us some
          other time to see all of the awesome things we have in store for you.
        </h3>
        <br />
        <br />
      </TracksContainer>
    </Container>
  );
};
