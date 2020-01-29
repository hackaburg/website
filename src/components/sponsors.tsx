import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { starBackgroundColor } from "../constants";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Sponsor } from "./sponsor";
import { UpwardsLeftTriangle } from "./triangle";

const SponsorsContainer = styled.div`
  background-color: white;
  color: ${starBackgroundColor};
  padding-bottom: 10rem;
`;

interface ISponsorContainer {
  containerWidth: string;
}

const SponsorContainer = styled.div<ISponsorContainer>`
  padding: 1rem;
  text-align: center;
  margin: auto;

  ${(props) => `
    width: ${props.containerWidth};
  `}
`;

const RowContainer = styled.div`
  margin: 4rem 0;
`;

interface ISponsor {
  width?: string;
  imageURL: string;
  name: string;
  url: string;
}

interface ISponsorList {
  width: string;
  sponsors: ISponsor[];
}

export const Sponsors = () => {
  const marker = useScrollSpyMarker(Anchors.Sponsors);
  const levels: ISponsorList[] = [
    {
      sponsors: [
        {
          imageURL: "images/sponsors/projekt29.png",
          name: "Projekt 29 GmbH & Co. KG",
          url: "https://www.projekt29.de",
          width: "85%",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
          width: "100%",
        },
      ],
      width: "90%",
    },
    {
      sponsors: [
        {
          imageURL: "images/sponsors/internetx.png",
          name: "InterNetX GmbH",
          url: "https://www.internetx.com",
          width: "100%",
        },
        {
          imageURL: "images/sponsors/tcon.png",
          name: "T.CON",
          url: "https://www.tcon-international.com",
          width: "100%",
        },
        {
          imageURL: "images/sponsors/mr.png",
          name: "Maschinenfabrik Reinhausen GmbH",
          url: "https://www.reinhausen.com",
          width: "50%",
        },
      ],
      width: "45%",
    },
    {
      sponsors: [
        {
          imageURL: "images/sponsors/bertrandt.png",
          name: "Bertrandt",
          url: "https://www.bertrandt.com",
          width: "100%",
        },
        {
          imageURL: "images/sponsors/horsch.png",
          name: "Horsch Maschinen GmbH",
          url: "https://www.horsch.com",
          width: "90%",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
          width: "100%",
        },
      ],
      width: "35%",
    },
  ];

  const renderedLevels = levels.map(
    ({ width: levelWidth, sponsors }, levelIndex) => {
      const renderedSponsors = sponsors.map(
        ({ imageURL, name, url, width }, sponsorIndex) => (
          <Column key={sponsorIndex} grow={1}>
            <SponsorContainer containerWidth={levelWidth}>
              <Sponsor
                width={width}
                imageURL={imageURL}
                name={name}
                url={url}
              />
            </SponsorContainer>
          </Column>
        ),
      );

      return (
        <RowContainer key={levelIndex}>
          <Row center>{renderedSponsors}</Row>
        </RowContainer>
      );
    },
  );

  return (
    <SponsorsContainer>
      <UpwardsLeftTriangle color="white" />

      {marker}
      <Container>
        <Header title="Sponsors" subtitle="Our partners" />

        {renderedLevels}
      </Container>
    </SponsorsContainer>
  );
};
