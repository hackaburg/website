import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { breakpointMobile, breakpointTablet } from "../constants";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Button } from "./button";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Image } from "./image";
import { Link } from "./link";

const TeaserContainer = styled.section`
  position: relative;
`;

const AstronautContainer = styled.div`
  position: absolute;
  left: -7rem;
  top: 3rem;
  width: 30rem;

  @media screen and (max-width: ${breakpointTablet}) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  left: 13rem;
  margin: 10rem auto 30rem auto;
  width: 45rem;

  @media screen and (max-width: ${breakpointTablet}) {
    left: 0;
  }

  @media screen and (max-width: ${breakpointMobile}) {
    width: auto;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  width: 21rem;

  @media screen and (max-width: ${breakpointMobile}) {
    width: auto;
  }
`;

const Spacer = styled.div`
  height: 2rem;
`;

const EmbeddedVideo = styled.iframe`
  width: 100%;
  height: 15rem;
  padding-left: 1rem;
  border-radius: 5px;

  @media screen and (max-width: ${breakpointMobile}) {
    padding: 1rem;
  }
`;

export const Teaser = () => {
  const marker = useScrollSpyMarker(Anchors.Teaser);
  return (
    <TeaserContainer>
      {marker}
      <AstronautContainer>
        <Image
          label="Astronaut with a computer"
          src="images/space/astronaut.png"
        />
      </AstronautContainer>
      <Content>
        <Header title="Teaser" subtitle="Launch sequence initiated" />
        <Spacer />
        <Row center>
          <Column width={1}>
            <Text>Hackaburg 2020 has finally started!</Text>
            <Text>Stay up to date on our social media channels</Text>

            <Link label="Hackaburg Instagram" target="_blank" to="">
              <Button fluid>Follow us on Instagram</Button>
            </Link>

            <br />

            <Link label="Hackaburg Facebook" target="_blank" to="">
              <Button fluid>Follow us on Facebook</Button>
            </Link>
          </Column>

          <Column width={30}>
            <EmbeddedVideo
              src="https://www.youtube.com/embed/OqN_HOEJLTA"
              frameBorder="0"
              allowFullScreen
            />
          </Column>
        </Row>
      </Content>
    </TeaserContainer>
  );
};
