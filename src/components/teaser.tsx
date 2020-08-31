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
  left: 8rem;
  margin: 10rem auto 20rem auto;
  width: 45rem;

  @media screen and (max-width: ${breakpointTablet}) {
    left: 0;
  }

  @media screen and (max-width: ${breakpointMobile}) {
    width: auto;
    padding: 1rem;
  }
`;

const Text = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  width: 21rem;

  @media screen and (max-width: ${breakpointMobile}) {
    width: auto;
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;

const EmbeddedVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;

  border-radius: 5px;
  overflow: hidden;
  margin-left: 1rem;

  @media screen and (max-width: ${breakpointMobile}) {
    margin: 0;
  }
`;

const EmbeddedVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
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
          <Column shrink={1}>
            <Text>Hackaburg 2021 has finally started!</Text>
            <Text>Stay up to date on our social media channels</Text>

            <ButtonContainer>
              <Link
                label="Hackaburg Instagram"
                target="_blank"
                to="https://www.instagram.com/hackaburg/"
              >
                <Button fluid>Follow us on Instagram</Button>
              </Link>
            </ButtonContainer>

            <ButtonContainer>
              <Link
                label="Hackaburg Facebook"
                target="_blank"
                to="https://www.facebook.com/hackaburg/"
              >
                <Button fluid>Follow us on Facebook</Button>
              </Link>
            </ButtonContainer>
          </Column>

          <Column grow={1}>
            <EmbeddedVideoContainer>
              <EmbeddedVideo
                src="https://www.youtube.com/embed/OqN_HOEJLTA"
                frameBorder="0"
                allowFullScreen
              />
            </EmbeddedVideoContainer>
          </Column>
        </Row>
      </Content>
    </TeaserContainer>
  );
};
