import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Container } from "./container";
import { Header } from "./header";

const TracksContainer = styled.div`
  margin: 6rem 0 15rem 0;
`;

export const TracksPlaceholder = () => {
  const marker = useScrollSpyMarker(Anchors.Tracks);

  return (
    <Container>
      <TracksContainer>
        {marker}
        <Header title="Tracks" subtitle="How you can change the future" />

        <p>
          Tracks will be announced at a later date. Check back with us some
          other time to see all of the awesome things we have in store for you.
        </p>
      </TracksContainer>
    </Container>
  );
};
