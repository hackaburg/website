import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Sponsor } from "./sponsor";

const SponsorsContainer = styled.div`
  margin: 10rem 0;
`;

const SponsorContainer = styled.div`
  padding: 1rem;
`;

const RowContainer = styled.div`
  margin: 2rem 0;
`;

interface ISponsor {
  height?: string;
  width?: string;
  imageURL: string;
  name: string;
  url: string;
}

interface ISponsorList {
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
          height: "5rem",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
          height: "5rem",
        },
      ],
    },
    {
      sponsors: [
        {
          imageURL: "images/sponsors/internetx.png",
          name: "InterNetX GmbH",
          url: "https://www.internetx.com",
          height: "3rem",
        },
        {
          imageURL: "images/sponsors/tcon.png",
          name: "T.CON",
          url: "https://www.tcon-international.com",
          height: "3rem",
        },
        {
          imageURL: "images/sponsors/mr.png",
          name: "Maschinenfabrik Reinhausen GmbH",
          url: "https://www.reinhausen.com",
          height: "3rem",
        },
      ],
    },
    {
      sponsors: [
        {
          imageURL: "images/sponsors/bertrandt.png",
          name: "Bertrandt",
          url: "https://www.bertrandt.com",
          height: "2rem",
        },
        {
          imageURL: "images/sponsors/horsch.png",
          name: "Horsch Maschinen GmbH",
          url: "https://www.horsch.com",
          height: "2rem",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
          height: "2rem",
        },
      ],
    },
  ];

  const renderedLevels = levels.map(({ sponsors }, levelIndex) => {
    const renderedSponsors = sponsors.map(
      (
        { imageURL, name, url, height = undefined, width = undefined },
        sponsorIndex,
      ) => (
        <Column key={sponsorIndex}>
          <SponsorContainer>
            <Sponsor
              height={height}
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
  });

  return (
    <SponsorsContainer>
      {marker}
      <Container>
        <Header title="Sponsors" subtitle="Our partners" />

        {renderedLevels}
      </Container>
    </SponsorsContainer>
  );
};
