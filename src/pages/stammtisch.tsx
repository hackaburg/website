import * as React from "react";
import styled from "@emotion/styled";
import { Container } from "../components/container";
import { Image } from "../components/image";
import { Page } from "../components/page";
import { accentColor, breakpointMobile } from "../constants";

const StammtischContainer = styled.div`
  padding: 15rem 0;
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 40rem;

  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${accentColor};
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const Content = styled.div`
  font-size: 1rem;
  margin-top: 2rem;
  width: 30rem;

  @media screen and (max-width: ${breakpointMobile}) {
    width: 100%;
  }
`;

export default () => (
  <Page>
    <ImageContainer>
      <Image label="Hackaburg Stammtisch logo" src="images/stammtisch.png" />
    </ImageContainer>

    <Container>
      <StammtischContainer>
        <Title>Hackaburg</Title>
        <Subtitle>Stammtisch</Subtitle>

        <Content>
          Wir wollen die IT Szene in Regensburg besser miteinander verknüpfen.
          "Wir", das sind die Leute, die auch den Hackaburg Hackathon in
          Regensburg organisieren. Aktuell ist geplant, dass wir uns einmal im
          Monat treffen und gemütlich bei einem Getränk (oder auch zwei), über
          ein spezifisches technisches Thema sprechen. Themenvorschläge sind
          immer gerne gesehen!
        </Content>
      </StammtischContainer>
    </Container>
  </Page>
);
