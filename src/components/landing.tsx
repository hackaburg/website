import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile, breakpointTablet } from "../constants";
import { Button } from "./button";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Image } from "./image";
import { Link } from "./link";

const LandingContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const SpaceImageContainer = styled.div`
  position: absolute;
  top: 10rem;
  right: -3rem;

  width: 45rem;

  @media screen and (max-width: ${breakpointTablet}) {
    top: 15rem;
    width: 30rem;
  }

  @media screen and (max-width: ${breakpointMobile}) {
    position: static;
    width: 80%;
    margin: 5rem auto;
  }
`;

const Content = styled.div`
  padding: 20rem 0;

  @media screen and (max-width: ${breakpointMobile}) {
    padding: 0;
    padding-bottom: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2.6rem;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
`;

const Location = styled.h3`
  font-weight: normal;
  font-size: 1.5rem;
`;

const ApplyContainer = styled.div`
  font-size: 1.25rem;
`;

const Backers = styled.div`
  width: 25rem;
  margin-top: 2rem;
`;

const BackerImage = styled.div`
  padding: 0 1rem;

  @media screen and (max-width: ${breakpointMobile}) {
    padding: 0;
    margin: 1rem auto;
    width: 50%;
  }
`;

const Update = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 1rem 0;

  @media screen and not (max-width: ${breakpointMobile}) {
    margin: 0 5rem;
  }
`;

interface ILandingProps {
  isApplicationOpen: boolean;
}

export const Landing = ({ isApplicationOpen }: ILandingProps) => (
  <LandingContainer>
    <SpaceImageContainer>
      <Image label="Hackaburg in space" src="images/space/all.png" />
    </SpaceImageContainer>

    <Container>
      <Content>
        <Title>Hackaburg</Title>
        <Subtitle>Mission | 2022</Subtitle>
        <Location>TechBase Regensburg | 7. - 9. July 2022</Location>

        {isApplicationOpen && (
          <ApplyContainer>
            <Link label="Apply now" target="_blank" to="/apply/">
              <Button>Apply now</Button>
            </Link>
          </ApplyContainer>
        )}

        <Backers>
          <Row center>
            <Column grow={1}>
              <Link
                label="Digitale Gründerinitiative Oberpfalz"
                target="_blank"
                to="https://www.digitale-oberpfalz.de"
              >
                <BackerImage>
                  <Image
                    label="Digitale Gründerinitiative Oberpfalz logo"
                    src="images/dgo.svg"
                  />
                </BackerImage>
              </Link>
            </Column>
            <Column grow={1.5}>
              <Link
                label="ratisbona coding e.V."
                target="_blank"
                to="https://ratisbona-coding.org"
              >
                <BackerImage>
                  <Image
                    label="ratisbona coding e.V. logo"
                    src="images/sponsors/ratisbona-coding.png"
                  />
                </BackerImage>
              </Link>
            </Column>
          </Row>
        </Backers>
        <Update>
          We are heartbroken to announce that, due to the current developments
          regarding COVID-19, we have decided to postpone Hackaburg until
          further notice. We apologize for any inconveniences caused by this
          decision.
        </Update>
      </Content>
    </Container>
  </LandingContainer>
);
