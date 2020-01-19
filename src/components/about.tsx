import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile, breakpointTablet } from "../constants";
import { Header } from "./header";
import { Image } from "./image";

const AboutContainer = styled.section`
  position: relative;
  overflow-x: hidden;
`;

const TowerContainer = styled.div`
  position: absolute;
  left: -10rem;
  width: 30rem;

  @media screen and (max-width: ${breakpointTablet}) {
    display: none;
  }
`;

const FlagContainer = styled.div`
  position: absolute;
  top: 15rem;
  right: -3rem;
  width: 15rem;

  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

const Content = styled.div`
  padding: 10rem 0 15rem 0;
  width: 35rem;
  margin: 0 auto;
  font-size: 2rem;

  @media screen and (max-width: ${breakpointMobile}) {
    width: 80%;
  }
`;

export const About = () => (
  <AboutContainer>
    <TowerContainer>
      <Image label="Hackaburg tower" src="images/space/tower.png" />
    </TowerContainer>

    <FlagContainer>
      <Image label="Hackaburg flag" src="images/space/flag.png" />
    </FlagContainer>

    <Content>
      <Header title="About" subtitle="What is Hackaburg?" />
      Hackaburg is a unique hackathon experience that brings together more than
      100 developers, designers and entrepreneurs from around the world.
    </Content>
  </AboutContainer>
);
