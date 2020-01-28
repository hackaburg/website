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
  name: string;
  url: string;
  imageURL: string;
  size: string;
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
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
          size: "5rem",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
          size: "5rem",
        },
      ],
    },
    {
      sponsors: [
        {
          imageURL: "images/sponsors/internetx.png",
          name: "InterNetX GmbH",
          url: "https://www.internetx.com",
          size: "3rem",
        },
        {
          imageURL: "images/sponsors/tcon.png",
          name: "T.CON",
          url: "https://www.tcon-international.com",
          size: "3rem",
        },
        {
          imageURL: "images/sponsors/mr.png",
          name: "Maschinenfabrik Reinhausen GmbH",
          url: "https://www.reinhausen.com",
          size: "5rem",
        },
      ],
    },
    {
      sponsors: [
        {
          imageURL: "images/sponsors/bertrandt.png",
          name: "Bertrandt",
          url: "https://www.bertrandt.com",
          size: "2rem",
        },
        {
          imageURL: "images/sponsors/horsch.png",
          name: "Horsch Maschinen GmbH",
          url: "https://www.horsch.com",
          size: "4rem",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
          size: "2rem",
        },
      ],
    },
  ];

  const renderedLevels = levels.map(({ sponsors }, levelIndex) => {
    const renderedSponsors = sponsors.map(
      ({ imageURL, name, url, size }, sponsorIndex) => (
        <Column key={sponsorIndex}>
          <SponsorContainer>
            <Sponsor height={size} imageURL={imageURL} name={name} url={url} />
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
